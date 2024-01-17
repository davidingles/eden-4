import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'

const misImagenes = {
	diseño: '/img/jefes/diseño.png',
	administracion: '/img/jefes/admin.jpg',
	logistica: '/img/jefes/logistica.png',
	ventas: '/img/jefes/sales.jpg',
};

const misTextos = {
	ventas: {
		email: "ventas@laauxiliar.es",
		nombre: "Miguel Angel Latorre",
		telefono: "123456789"
	},
	diseño: {
		email: "dg@laauxiliar.es",
		nombre: "Vicente Latorre",
		telefono: "123456789"
	},
	logistica: {
		email: "logistica@laauxiliar.es",
		nombre: "Angel Latorre",
		telefono: "123456789"
	},
	admin: {
		email: "administracion@laauxiliar.es",
		nombre: "Jesus Latorre",
		telefono: "123456789"
	},
}
const claves = ['ventas', 'diseño', 'logistica', 'admin'];

export function ContactoCarruselReact() {
	const imagenes = [misImagenes.ventas, misImagenes.diseño, misImagenes.logistica, misImagenes.administracion];

	const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
	const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
	const [loaded, setLoaded] = useState(true);
	const [autoPlay, setAutoPlay] = useState(true);
	let textos = [misTextos.ventas, misTextos.diseño, misTextos.logistica, misTextos.admin]

	useEffect(() => {
		if (autoPlay) {
			const interval = setInterval(() => {
				nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
			}, 5000);
			return () => clearInterval(interval);
		}
	});
	const nuevaImagenSeleccionada = (index, imagenes, next = true) => {
		setLoaded(false);
		const condicion = next ? indiceSeleccionado < imagenes.length - 1 : indiceSeleccionado > 0;
		const nuevoIndice = next ? (condicion ? indiceSeleccionado + 1 : 0) : (condicion ? indiceSeleccionado - 1 : imagenes.length - 1);
		setIndiceSeleccionado(nuevoIndice);
		setImagenSeleccionada(imagenes[nuevoIndice]);
	};
	const previous = () => {
		nuevaImagenSeleccionada(indiceSeleccionado, imagenes, false);
	};
	const next = () => {
		nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
	};

	return (
		<>
			<div className='flex flex-col m-auto items-center justify-center '>

				{/* //THUMBANILS ================================== */}
				<div className='flex flex-row  gap-4 justify-center cursor-pointer'>
					{imagenes.map((imagen, index) => (
						<div className='flex' key={index}>
							<img
								className={` ${index !== indiceSeleccionado ? estilos.thumbnail2 : estilos.thumbnail}`}
								src={imagen}
								alt="fabrica"
								onClick={() => {
									setImagenSeleccionada(imagen);
									setIndiceSeleccionado(index);
									setAutoPlay(false);
								}}
							/>
						</div>
					))}
				</div>

				{/* w-56 h-56 rounded bordeVerde overflow-hidden transition-all duration-900 ease-in-out  */}



				{/* IMAGEN PRINCIPAL================================== */}
				{/* <div className='h-[50vh] w-[60vh] m-auto flex'>
					<img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" />
					<p className='m-8 text-sm h-[40vh]'>{textos[indiceSeleccionado]}</p>
				</div> */}

				<p className='m-16 font-bold text-3xl  flex flex-col justify-center items-center'>
					<span>{misTextos[claves[indiceSeleccionado]].email}<br /></span>
					<span>{misTextos[claves[indiceSeleccionado]].nombre}<br /></span>
					<span>{misTextos[claves[indiceSeleccionado]].telefono}</span>
				</p>


			</div >
		</>
	);
}
