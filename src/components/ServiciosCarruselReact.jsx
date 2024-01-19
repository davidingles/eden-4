import estilos from './ServiciosCarruselReact.module.css'
import { useState } from 'react'

const misVideos = {
	impresion: {
		dep: "Impresión",
		email: "ventas@laauxiliar.es",
		nombre: "Miguel Ángel Latorre",
		telefono: "686 944 933",
		src: '/videos/videosServicios/videoImpresora2.webm'
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
			<div className='flex flex-col m-auto items-center justify-center '>

				{/* //THUMBANILS ================================== */}
				<div className='flex flex-row  gap-4 justify-center cursor-pointer'>
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



			</div >
			<p className='m-16 font-bold text-3xl  flex flex-col justify-center items-center min-h-[7rem]'>
				<video autoPlay muted loop src={indiceSeleccionado !== null ? misVideos[claves[indiceSeleccionado]].src : ' '} />
			</p>
		</>
	);
}
