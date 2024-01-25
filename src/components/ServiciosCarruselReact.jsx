import estilos from './ServiciosCarruselReact.module.css'
import { useState } from 'react'

const misVideos = {
	impresion: {
		dep: "Impresión",
		email: "ventas@laauxiliar.es",
		nombre: "Miguel Ángel Latorre",
		telefono: "686 944 933",
		src: '/videos/videosServicios/vImpresora.webm'
	},
	troquelado: {
		dep: "Troquelado",
		email: "dg@laauxiliar.es",
		nombre: "Vicente Latorre",
		telefono: "657 842 909",
		src: '/videos/videosServicios/vTroqueladora.webm'
	},
	pegado: {
		dep: "Pegado",
		email: "logistica@laauxiliar.es",
		nombre: "Ángel Latorre",
		telefono: "657 803 024",
		src: '/videos/videosServicios/vPegadoraMarron.webm'
	},
	corte: {
		dep: "Corte digital",
		email: "administracion@laauxiliar.es",
		nombre: "Jesús Latorre",
		telefono: "686 944 932",
		src: '/videos/videosServicios/vPloter.webm'

	},
}
const claves = ['impresion', 'troquelado', 'pegado', 'corte'];

export function ServiciosCarruselReact() {
	const videos = [misVideos.impresion, misVideos.troquelado, misVideos.pegado, misVideos.corte];

	const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);
	const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

	return (
		<>

			{/* //THUMBANILS ================================== */}
			<div className='flex flex-row m-auto max-w-[777px]  gap-4 cursor-pointer'>
				{videos.map((video, index) => (
					<div className='flex  relative' key={index}>
						<video
							muted
							autoPlay
							loop
							className={` ${index !== indiceSeleccionado ? estilos.thumbnail2 : estilos.thumbnail}`}
							src={`${index !== null ? misVideos[claves[index]].src : ' '}`}
							alt="fabrica"
							onClick={() => {
								setImagenSeleccionada(video);
								setIndiceSeleccionado(index);
							}}

						/>
						<span className={`${index !== indiceSeleccionado ? estilos.dav : estilos.david}`}>
							{misVideos[claves[index]].dep}

						</span>
					</div>
				))}
			</div>


			{/* VIDEO GRANDE ================================== */}
			<video autoPlay muted loop src={indiceSeleccionado !== null ? misVideos[claves[indiceSeleccionado]].src : ' '} className={`${indiceSeleccionado !== null ? 'flex-none' : 'flex'} m-auto mt-4 min-w-[777px] w-[777px] flex justify-center rounded-lg`} />
		</>
	);
}
