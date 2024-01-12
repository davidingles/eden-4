import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const diseño = '/img/jefes/diseño.png'
const administracion = '/img/jefes/admin.jpg'
const logistica = '/img/jefes/logistica.png'
const ventas = '/img/jefes/sales.jpg'

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
	const imagenes = [ventas, diseño, logistica, administracion];

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
								className={`w-56 h-auto rounded overflow-hidden transition-all duration-900 ease-in-out shadow-md ${index !== indiceSeleccionado ? estilos.thumbnail2 : ""}`}
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




				<div className='h-[50vh] w-[60vh] m-auto flex'>
					<img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" />
					<p className='m-8 text-sm h-[40vh]'>{textos[indiceSeleccionado]}</p>
				</div>




			</div >
		</>
	);
}
