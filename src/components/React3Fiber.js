import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

/**
 * Components can be written to create and use 2d or 3d objects
 */
function Cube() {
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
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
            <Cube />
        </Canvas>
    );
}
