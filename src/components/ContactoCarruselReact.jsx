import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const diseño = '/img/jefes/diseño.png'
const administracion = '/img/jefes/administracion.png'
const logistica = '/img/jefes/logistica.png'
const ventas = '/img/jefes/ventas.png'

export function ContactoCarruselReact() {
	const imagenes = [diseño, administracion, logistica, ventas];
	const textos = [
		"Auxiliar Manipuladora del Cartón, S.L. fue fundada en 1995 como una empresa familiar, avalada con la experiencia de más de una década de trabajo en el sector de sus fundadores.",
		"Debido a su seriedad y honestidad Auxiliar Manipuladora del Cartón SL, esta creciendo con paso firme al igual que la confianza y respeto de sus clientes y proveedores.",
		"El espíritu de superación, conocimiento y capacidad de todas las personas que trabajan directa o indirectamente en la empresa, hace que ésta acepte los retos y se adapte aun mercado más competitivo y exigente.",
		"La empresa se dedica a la fabricación de productos de papelería y embalaje, con una amplia gama de productos, que se adaptan a las necesidades de nuestros clientes.",
	];
	const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
	const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
	const [loaded, setLoaded] = useState(true);
	const [autoPlay, setAutoPlay] = useState(true);

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
					<p className='m-8 text-sm h-[40vh]'>{textos[indiceSeleccionado]}</p>
				</div>






			</div >
		</>
	);
}
