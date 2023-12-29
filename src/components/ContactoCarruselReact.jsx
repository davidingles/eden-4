import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const diseño = '/img/jefes/diseño.png'
const administracion = '/img/jefes/administracion.png'
const logistica = '/img/jefes/logistica.png'
const ventas = '/img/jefes/ventas.png'

const depDiseño2 = [
	{
		departamento: "diseño",
		email: "dg@laauxiliar.es",
		telefono: "123456789",
		responsable: "Vicente Latorre",
	},
	{
		departamento: "ventas",
		email: "dg@laauxiliar.es",
		telefono: "123456789",
		responsable: "Vicente Latorre",
	},
	{
		departamento: "logistica",
		email: "dg@laauxiliar.es",
		telefono: "123456789",
		responsable: "Vicente Latorre",
	},
	{
		departamento: "admin",
		email: "dg@laauxiliar.es",
		telefono: "123456789",
		responsable: "Vicente Latorre",
	}
]

export function ContactoCarruselReact() {
	const imagenes = [diseño, administracion, logistica, ventas];

	const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
	const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
	const [loaded, setLoaded] = useState(true);
	const [autoPlay, setAutoPlay] = useState(true);
	let textos = 'hola'


	useEffect(() => {
		if (autoPlay) {
			const interval = setInterval(() => {
				nuevaImagenSeleccionada(indiceSeleccionado, imagenes, true);
			}, 3000);
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
				<div className='flex flex-row gap-4'>
					{imagenes.map((imagen, index) => (
						<div className='flex ' key={index}>
							<img
								className={`w-[222px] rounded-lg estilos.thumbnail cursor-pointer ${index !== indiceSeleccionado ? estilos.thumbnail2 : ""}`}
								src={imagen}
								alt="fabrica"
								onClick={() => {
									setImagenSeleccionada(imagen);
									setIndiceSeleccionado(index);
								}}
							/>
						</div>
					))}
				</div>


				<div className='flex flex-row p-4 m-auto gap-4 '>
					<button className={`${estilos.btn}`} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
					<button className={`${estilos.btn}`} onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
					<button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
				</div >


				<div className='h-[50vh] w-[60vh] m-auto flex'>
					{/* <img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" /> */}
					<p className='m-8 text-sm h-[40vh]'>{textos[indiceSeleccionado] || 'Cargando...'}</p>
				</div>






			</div >
		</>
	);
}
