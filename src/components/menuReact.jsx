import React, { useState, useEffect } from 'react';
import estilos from './menuReact.module.css';
import { IconHome, IconContact, IconCatalogo, IconServices, IconNosotros } from './icons/IconHome';

const menu = [

  {
    title: 'Inicio',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Nosotros',
    icon: 'us',
    link: '/nosotros',
  },
  {
    title: 'Servicios',
    icon: 'services',
    link: '/servicios',
  },
  {
    title: 'Contacto',
    icon: 'contact',
    link: '/contacto',
  },
  {
    title: 'Catálogo',
    icon: 'catalogo',
    link: '/catalogo',
  },
]

const MenuReact = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  return (
    <li className='flex flex-col '>
      {menu && menu.map((item, index) => (
        < a
          key={index}
          href={item.link}
          className={`${estilos.mena} ${currentPage === item.link ? estilos.david : ''}`}
        >

          <div className={estilos.menadiv} style={{ marginLeft: '3rem', display: 'flex' }} >{item.title}</div>
          <div
            style={{ display: 'flex', flex: '1', justifyContent: 'end', marginRight: '3rem' }}>
            {item.icon === 'us' && <IconHome />}
            {item.icon === 'home' && <IconNosotros />}
            {item.icon === 'services' && <IconServices />}
            {item.icon === 'contact' && <IconContact />}
            {item.icon === 'catalogo' && <IconCatalogo />}
          </div>

        </a>
      ))
      }

    </li >

  );
};

export default MenuReact;
