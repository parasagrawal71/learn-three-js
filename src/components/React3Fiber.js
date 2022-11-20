import { Canvas } from '@react-three/fiber';

export default function R3f() {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}
