
import React, { useRef, useMemo, memo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Preload, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';


const NeuralParticles = memo(({ count = 60, isDark }: { count?: number; isDark: boolean }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    const colorArr = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);

      color.setHex(Math.random() > 0.5 ? 0x6366f1 : 0x0ea5e9);
      colorArr[i * 3] = color.r;
      colorArr[i * 3 + 1] = color.g;
      colorArr[i * 3 + 2] = color.b;
    }
    return { positions: p, colors: colorArr };
  }, [count]);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (ref.current) {
      // Slow rotation — invalidate every frame but particles need it
      ref.current.rotation.y += 0.0008;
      ref.current.rotation.x += 0.0004;
    }
  });

  return (
    <Points ref={ref} positions={points.positions} colors={points.colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={isDark ? 0.025 : 0.045}
        sizeAttenuation={true}
        depthWrite={false}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        opacity={isDark ? 0.9 : 0.7}
      />
    </Points>
  );
});

interface ThreeSphereProps {
  isDark?: boolean;
}

const ThreeSphereScene: React.FC<ThreeSphereProps> = ({ isDark: _ignoredIsDark }) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Improved observer with rootMargin for earlier loading but still performance-focused
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01, rootMargin: '200px' }
    );
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? currentTheme === 'dark' : false;

  if (!mounted) return <div ref={containerRef} className="absolute inset-0" />;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45, near: 0.1, far: 20 }}
          gl={{
            antialias: false,
            powerPreference: "default",
            alpha: true,
            stencil: false,
            depth: false,
            precision: 'lowp',
          }}
          dpr={[1, Math.min(1.2, window.devicePixelRatio)]}
          frameloop="always"
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} color="#6366f1" />

            <Float speed={0.5} rotationIntensity={0.05} floatIntensity={0.05}>
              <NeuralParticles count={60} isDark={isDark} />
            </Float>
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default memo(ThreeSphereScene);
