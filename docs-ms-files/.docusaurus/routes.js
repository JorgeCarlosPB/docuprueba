
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','a87'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','d62'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d09'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','192'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','21a'),
    routes: [
      {
        path: '/docs/Configuración e instalación/Definición del entorno',
        component: ComponentCreator('/docs/Configuración e instalación/Definición del entorno','862'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Configuración e instalación/Ejecución',
        component: ComponentCreator('/docs/Configuración e instalación/Ejecución','a83'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Configuración e instalación/Instalación',
        component: ComponentCreator('/docs/Configuración e instalación/Instalación','d28'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Configuración e instalación/pruebas',
        component: ComponentCreator('/docs/Configuración e instalación/pruebas','498'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Configuración e instalación/Requisitos',
        component: ComponentCreator('/docs/Configuración e instalación/Requisitos','710'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Manual swagger',
        component: ComponentCreator('/docs/Manual swagger','fac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Notas_lanzamiento',
        component: ComponentCreator('/docs/Notas_lanzamiento','0ca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Escritura',
        component: ComponentCreator('/docs/Servicios API/Escritura','76a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Existencia',
        component: ComponentCreator('/docs/Servicios API/Existencia','dfd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Lectura',
        component: ComponentCreator('/docs/Servicios API/Lectura','aa5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Reemplazar',
        component: ComponentCreator('/docs/Servicios API/Reemplazar','927'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Remover',
        component: ComponentCreator('/docs/Servicios API/Remover','1e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Reubicar',
        component: ComponentCreator('/docs/Servicios API/Reubicar','d79'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/Schemas',
        component: ComponentCreator('/docs/Servicios API/Schemas','459'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Servicios API/verificar servicio',
        component: ComponentCreator('/docs/Servicios API/verificar servicio','1af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
