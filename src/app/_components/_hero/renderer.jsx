"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from 'three';

const vertex = `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    vec2 hash22(vec2 p) {
        p = fract(p * vec2(443.897, 441.423));
        p += dot(p, p + 19.19);
        return fract(vec2(p.x * p.y, p.x + p.y));
    }

    vec2 voronoiData(vec2 uv) {
        vec2 cell = floor(uv);
        vec2 fr = fract(uv);
        float minDist = 1.0;
        vec2 minPoint = vec2(0.0);

        for (int y = -1; y <= 1; y++) {
            for (int x = -1; x <= 1; x++) {
                vec2 neighbor = vec2(float(x), float(y));
                vec2 point = hash22(cell + neighbor);
                vec2 diff = neighbor + point - fr;
                float dist = length(diff);
                if (dist < minDist) {
                    minDist = dist;
                    minPoint = point;
                }
            }
        }
        return minPoint;
    }

    vec2 voronoiCenter(vec2 uv) {
        vec2 cell = floor(uv);
        vec2 fr = fract(uv);
        float minDist = 1.0;
        vec2 minCenter = vec2(0.0);

        for (int y = -1; y <= 1; y++) {
            for (int x = -1; x <= 1; x++) {
                vec2 neighbor = vec2(float(x), float(y));
                vec2 point = hash22(cell + neighbor);
                vec2 diff = neighbor + point - fr;
                float dist = length(diff);
                if (dist < minDist) {
                    minDist = dist;
                    minCenter = (cell + neighbor + point) / 16.0;
                }
            }
        }
        return minCenter;
    }

    void main() {
        vec2 uv = vUv;
        vec2 uvVoro = uv * 16.0;
        vec2 mouseVoro = uMouse * 16.0;

        vec2 voroPoint = voronoiData(uvVoro);
        float voroId = voroPoint.x + voroPoint.y;
        float microGrain = 0.015 + 0.01 * cos(voroId * 6.2831 + uTime * 0.1);
        float finalGray = 0.05 + microGrain;

        // Centres en espace Voronoi
        vec2 hoveredCellVoro = voronoiCenter(mouseVoro) * 16.0;
        vec2 fragCellVoro    = voronoiCenter(uvVoro)    * 16.0;
        float cellDist = length(fragCellVoro - hoveredCellVoro);

        // Cellule exacte
        float cellHighlight = smoothstep(0.001, 0.0, cellDist) * 0.05;

        // Cellules voisines
        float neighborGlow = smoothstep(2.0, 0.0, cellDist) * 0.05;

        // Hover doux original
        float mouseDist = length(uv - uMouse);
        float hover = smoothstep(0.18, 0.0, mouseDist) * 0.01;

        finalGray += cellHighlight + neighborGlow + hover;

        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        finalGray *= clamp(vignette * 16.0 + 0.2, 0.0, 1.0);

        gl_FragColor = vec4(vec3(finalGray), 1.0);
    }
`;
const ThaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uMouse: new THREE.Vector2(0.5, 0.5)
    },
    vertex,
    fragment
);
extend({ ThaderMaterial });

function WavePlane() {
    const { width, height } = useThree((state) => state.viewport);
    const mat = useRef();
    const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));

    useEffect(() => {
        const handleMouseMove = (event) => {
            targetMouse.current.x = event.clientX / window.innerWidth;
            targetMouse.current.y = 1.0 - (event.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame(({ clock }) => {
        if (mat.current) {
            mat.current.uTime = clock.getElapsedTime();
            // ✅ uMouse est directement un Vector2, pas { value: Vector2 }
            mat.current.uMouse.lerp(targetMouse.current, 0.05);
        }
    });

    return (
        <mesh>
            <planeGeometry args={[width, height]} />
            <thaderMaterial attach="material" ref={mat} />
        </mesh>
    );
}

export default function Background() {
    return (
        <Canvas
            style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "110vh", zIndex:-1 }}
        >
            <WavePlane />
        </Canvas>
    );
}