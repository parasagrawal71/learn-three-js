import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

/**
 * Components can be written to create and use 2d or 3d objects
 */
function Cube() {
    const meshRef = useRef(null); // Points to instance of the mesh in three-js
    useFrame(() => {
        if (!meshRef.current) {
            return;
        }

        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });
    // react-spring NPM library can be used for animations

    return (
        <mesh ref={meshRef}>
            <boxGeometry />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
}

export default function R3f(props) {
    const { style } = props;

    return (
        <Canvas style={style}>
            {/* <PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]} /> */}
            {/* <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh> */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
        </Canvas>
    );
}
