import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AnimationMixer } from 'three'
import * as THREE from 'three'
import { Stats, OrbitControls, Environment, useGLTF, Clone, Html, ContactShadows } from '@react-three/drei'

const Models = [
	// { title: 'blender', url: './models/blender.gltf' },
	{ title: 'jamoneroMacondo2', url: './gltf/jamoneroMacondo2.glb' },
	{ title: 'jamoneroMacondo3', url: './gltf/jamoneroMacondo3.glb' },
	{ title: '1p0391', url: './gltf/1p0391.glb' },
]

function Model({ url }) {
	const [model, setModel] = useState(null)
	const [mixer, setMixer] = useState(null)

	useEffect(() => {
		const loader = new GLTFLoader()
		loader.load(url, (gltf) => {
			setModel(gltf.scene)

			const mixer = new AnimationMixer(gltf.scene)
			setMixer(mixer)

			gltf.animations.forEach((clip) => {
				mixer.clipAction(clip).play()
			})
		})
	}, [url])

	useFrame((state, delta) => {
		if (mixer) {
			mixer.update(delta)
		}
	})

	return model ? (
		<primitive object={model} position={[0, 0, 0]} scale={[1, 1, 1]} />
	) : null
}

function Fallback() {
	return <div>Loading...</div>
}

export default function EstucheConAsas({ david }) {
	const [title, setTitle] = useState(david)
	useEffect(() => {
		{
			setTitle(david)
		}
	}, [david])


	const modelIndex = Models.findIndex((m) => m.title === title)
	const modelUrl = modelIndex !== -1 ? Models[modelIndex].url : null

	return (
		<>

			{/* <a href={`/animacion/${david}`}>hola</a> */}
			<Canvas camera={{ position: [0, .4, -0.6], near: .01, fov: 50 }}>
				<pointLight position={[100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 0]} intensity={55555} decay={2} />
				<pointLight position={[-100, 100, 100]} intensity={11111} decay={2} />
				<pointLight position={[100, -100, -100]} intensity={11111} decay={2} />
				<pointLight position={[100, -100, 100]} intensity={11111} decay={2} />
				<ambientLight intensity={2} />
				<Suspense fallback={<Fallback />}>
					{modelUrl && <Model url={modelUrl} />}
				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={.2} />
				<ContactShadows resolution={512} scale={.5} position={[0, -0.3, 0]} blur={2} opacity={0.2} far={1} color='#8a6246' />
			</Canvas>
		</>
	)
}