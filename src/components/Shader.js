import React, { useEffect, useState } from "react"
import { Surface } from "gl-react-dom"
import { Shaders, Node, GLSL } from "gl-react"

export const Shader = () => {
  const [time, setTime] = useState(Date.now())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 50)

    return () => clearInterval(interval)
  }, [])
  return (
    <Surface
      version="webgl"
      webglContextAttributes={{
        powerPreference: "high-performance",
        premultipliedAlpha: false,
      }}
      width="100vw"
      height="100vh"
    >
      <Node
        shader={shaders.background}
        uniforms={{
          piTime: ((time * 0.000025) % Math.PI) * 2,
        }}
      />
    </Surface>
  )
}

const shader = `
precision highp float;
uniform float piTime;
varying vec2 uv;
void main () {
  float dir = step(0.5, uv.x);
  vec2 uv2 = mix(vec2(uv.x, 1.0-uv.y), uv, dir);
  vec2 uv3 = vec2((uv2.x - 0.5) * 0.75 + 0.5, (uv2.y-0.5) * 1.0 + 0.5);
  vec2 banding = abs(uv3.xy - 0.5) * 2.0;
  float mask = banding.x * banding.x * (1.0 - (banding.y * banding.y));
  vec2 uv4 = uv3 + (piTime * (dir * -2.0 + 1.0)) * vec2(4.0, 1.0) + (uv3.x + uv3.y) + dir * vec2(0.0, 1.25);
  vec2 waves = (sin(uv4 * 3.0) - cos(uv4 * -4.0)) * 0.3 + 0.5;
  vec2 waves2 = vec2(waves.x - waves.y, waves.y - waves.x) * 0.5 + 0.5;
  vec3 colorWaves = vec3(waves2.x, waves2.y * 1.6, (waves2.y + waves2.x) * 0.75);
  float mask2 = mask * mask;
  vec3 final = colorWaves * vec3(mask2, mask2, mask);
  final = normalize(final) * mask; //worth the cost, to ensure that color variations do not create brightness variations
  gl_FragColor = vec4(final, 1.0);
  // gl_FragColor = vec4(waves, 0.0, 1.0);
  // gl_FragColor = vec4(waves2, 0.0, 1.0);
  // gl_FragColor = vec4(colorWaves, 1.0);
}
`
const shaders = Shaders.create({ background: { frag: GLSL`${shader}` } })
