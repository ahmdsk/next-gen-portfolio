"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1
      meshRef.current.rotation.y = time * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef as any} args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color={isDark ? "#818cf8" : "#bfdbfe"}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={isDark ? 0.2 : 0.05}
          metalness={isDark ? 0.8 : 0.4}
          emissive={isDark ? "#312e81" : "#eff6ff"}
          emissiveIntensity={isDark ? 0.2 : 0.8}
          clearcoat={isDark ? 0 : 1}
          clearcoatRoughness={0.1}
          transmission={isDark ? 0 : 0.2}
        />
      </Sphere>
    </Float>
  )
}

function Particles() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const count = 1000
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  const pointsRef = useRef<THREE.Points>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={isDark ? "#ffffff" : "#0f172a"}
        transparent
        opacity={isDark ? 0.3 : 0.2}
        sizeAttenuation
      />
    </points>
  )
}

export function ThreeBackground() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="absolute inset-0 -z-10 bg-background" />

  return (
    <div className="absolute inset-0 -z-10 bg-background transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={resolvedTheme === "dark" ? 0.5 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <AnimatedSphere />
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  )
}
