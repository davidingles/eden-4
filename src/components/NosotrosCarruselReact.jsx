import estilos from './NosotrosCarruselReact.module.css'
import { useState, useEffect } from 'react'
const cielo2 = '/img/cielo2.jpg'
const nave = '/img/nave.jpg'
const lunes = '/img/lunes.jpg'
const nav = '/img/nav.jpg'

export function NosotrosCarruselReact() {
  const imagenes = [cielo2, nave, lunes, nav];
  const textos = [
    "Empresa fundada en 1995, avalada con una gran experiencia en el sector del cartón.",
    "Auxiliar Manipuladora del Cartón va evolucionando para cubrir las necesidades de sus clientes",
    "Todas las personas que trabajan directa o indirectamente tienen el espíritu de aceptar los retos para adaptarse aun mercado más competitivo y exigente.",
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
    setLoaded(false); // reset loaded state when changing image
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


        <div className='h-[50vh] w-[60vh] m-auto flex'>
          <img onLoad={() => setLoaded(true)} className={`${estilos.foto} ${loaded ? estilos.loaded : ""}`} src={imagenSeleccionada} alt="nave de la auxiliar" />
          <p className='m-8 text-sm h-[40vh]'>{textos[indiceSeleccionado]}</p>
        </div>



        <div className='flex flex-row p-4 m-auto gap-4 '>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(false); previous() }}>{'<'}</button>
          <button className={`${estilos.btn}`} onClick={() => { setAutoPlay(!autoPlay) }} > {autoPlay === true ? 'STOP' : 'PLAY'}</button>
          <button className={`${estilos.btn} btn`} onClick={() => { setAutoPlay(false); next() }}>{'>'}</button>
        </div >

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
      </div >
    </>
  );
}
