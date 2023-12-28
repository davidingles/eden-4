import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


import React from "react";

export function Dav(props) {
	const { nodes, materials } = useGLTF("/gltf/arbol y ciervo.gltf");
	return (
		<group {...props} dispose={null} scale={.5} position={[0, 0, 0]}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001.geometry}
				material={nodes.Plane001.material}
				position={[-0.01, 0.005, 0]}
				scale={3.505}
			/>
			<group position={[0.792, 0.51, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_1.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_1_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_1_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.844, 0.151, -0.019]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_2.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_2_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_2_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.977, 0.155, -0.016]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_3.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_3_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_3_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.873, 0.326, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_4.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_4_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_4_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.114, 0.663, -0.015]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_5.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_5_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_5_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.291, 0.119, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_6.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_6_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_6_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.291, 0.533, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_7.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_7_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_7_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.291, 0.898, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_8.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_8_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_8_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.291, 1.163, -0.017]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_9.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_9_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_9_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.24, 0.663, -0.185]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_10.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_10_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_10_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.434, 0.666, -0.119]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_11.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_11_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_11_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.424, 0.666, 0.098]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_12.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_12_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_12_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
			<group position={[0.234, 0.666, 0.15]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_13.geometry}
					material={materials["back-dil"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_13_1.geometry}
					material={materials["Material.001"]}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.mesh_13_2.geometry}
					material={materials["Material.002"]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/gltf/arbol y ciervo.gltf");



const Troquel1g0011 = ({ }) => {
	return (

		<Canvas
			style={{}}
			camera={{
				view: {
					enabled: true,
					fullWidth: 100,
					fullHeight: 100,
					offsetX: 0,
					offsetY: -30,
					width: 100,
					height: 100
				},
				focus: 10,
				fov: 80,
				zoom: 3,
				position: [0, 0.5, 1.5]
			}} >
			<ambientLight intensity={2} />
			{/* <pointLight position={[10, 10, 2]} /> */}
			<Suspense fallback={null}>

				<Dav />

			</Suspense>
			<OrbitControls autoRotate autoRotateSpeed={1} />
			<ContactShadows resolution={512} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#202020' />
		</Canvas>
	)
}
export default Troquel1g0011
