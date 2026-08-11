'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

function Core() {
  const mesh = useRef<Mesh>(null)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    if (!mesh.current) return
    mesh.current.rotation.x += delta * 0.12
    mesh.current.rotation.y += delta * (active ? 0.8 : 0.2)
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08
  })

  return (
    <mesh
      ref={mesh}
      scale={active ? 1.08 : 1}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      <icosahedronGeometry args={[1.55, 3]} />
      <meshStandardMaterial
        color="#d7d7d1"
        wireframe
        transparent
        opacity={0.72}
        roughness={0.25}
        metalness={0.85}
      />
    </mesh>
  )
}

export function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={2.2} />
      <directionalLight position={[3, 4, 4]} intensity={5} color="#ffffff" />
      <directionalLight position={[-3, -2, 2]} intensity={2} color="#a8ffcb" />
      <Core />
    </Canvas>
  )
}
