import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/registros',
      name: 'Home1',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/competencia',
      name: 'Home2',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/resultados',
      name: 'Home3',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
      path: '/config',
      name: 'Home4',
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    //Participantes
    {
      path: '/participantes/index',
      name: 'Listado',
      component: () => import(/* webpackChunkName: "about" */ '../views/participantes/Index.vue')
    },
    {
      path: '/participantes/nuevo',
      name: 'Nuevo',
      component: () => import(/* webpackChunkName: "about" */ '../views/participantes/Nuevo.vue')
    },
    {
      path: '/participantes/editar/:item',
      name: 'EditarParticipante',
      component: () => import(/* webpackChunkName: "about" */ '../views/participantes/Editar.vue')
    },
    //Animales
    {
      path: '/animales/index',
      name: 'ListadoAnimal',
      component: () => import(/* webpackChunkName: "about" */ '../views/animales/Index.vue')
    },
    {
      path: '/animales/nuevo',
      name: 'NuevoAnimal',
      component: () => import(/* webpackChunkName: "about" */ '../views/animales/Nuevo.vue')
    },
    {
      path: '/animales/editar/:item',
      name: 'EditarAnimal',
      component: () => import(/* webpackChunkName: "about" */ '../views/animales/Editar.vue')
    },
    // Equipos
    {
      path: '/equipos/index',
      name: 'ListadoEquipos',
      component: () => import('../views/equipos/Index.vue')
    },
    {
      path: '/equipos/nuevo',
      name: 'NuevoEquipo',
      component: () => import('../views/equipos/Nuevo.vue')
    },
    {
      path: '/equipos/editar/:item',
      name: 'EditarEquipo',
      component: () => import('../views/equipos/Editar.vue')
    },
    //equipos de exhibicion
    {
      path: '/exhibicion/index',
      name: 'ListadoEquiposEx',
      component: () => import('../views/exhibicion/Index.vue')
    },
    {
      path: '/exhibicion/nuevo',
      name: 'NuevoEquiposEx',
      component: () => import('../views/exhibicion/Nuevo.vue')
    },
    //Competencias
    {
      path: '/competencia/categoria/',
      name: 'CompetenciaCategoria',
      component: () => import('../views/competencia/Categoria.vue')
    },
    {
      path: '/competencia/grupo/',
      name: 'CompetenciaGrupo',
      component: () => import('../views/competencia/Grupo.vue')
    },
    {
      path: '/competencia/raza/',
      name: 'CompetenciaRaza',
      component: () => import('../views/competencia/Raza.vue')
    },
    {
      path: '/competencia/supremo/',
      name: 'CompetenciaSupremo',
      component: () => import('../views/competencia/Supremo.vue')
    },
    //resultados
    {
      path: '/resultados/categoria/',
      name: 'ResultadosC',
      component: () => import('../views/resultados/Categoria.vue')
    },
    {
      path: '/resultados/grupo/',
      name: 'ResultadosG',
      component: () => import('../views/resultados/Grupo.vue')
    },
    {
      path: '/resultados/raza/',
      name: 'ResultadosR',
      component: () => import('../views/resultados/Raza.vue')
    },
    {
      path: '/resultados/supremo/',
      name: 'ResultadosS',
      component: () => import('../views/resultados/Supremo.vue')
    },
    {
      path: '/resultados/tablas/',
      name: 'Tablas',
      component: () => import('../views/resultados/Tablas.vue')
    },
    //Configuraciones
    {
      path: '/config/raza',
      name: 'Razas',
      component: () => import(/* webpackChunkName: "about" */ '../views/config/IndexR.vue')
    },
    {
      path: '/config/categoria',
      name: 'Categorias',
      component: () => import(/* webpackChunkName: "about" */ '../views/config/IndexC.vue')
    },
    {
      path: '/config/bd',
      name: 'BD',
      component: () => import(/* webpackChunkName: "about" */ '../views/config/Bb.vue')
    },
    {
      path: '/config/competitions',
      name: 'CreateCompe',
      component: () => import(/* webpackChunkName: "about" */ '../views/config/Competitions.vue')
    },
    {
      path: '/config/asociations',
      name: 'CreateAsoc',
      component: () => import(/* webpackChunkName: "about" */ '../views/config/Asociations.vue')
    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router