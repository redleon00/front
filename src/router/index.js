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
      path: '/config/subcategoria',
      name: 'Subcategorias',
      component: () => import(/* webpackChunkName: "about" */ '../views/config/IndexS.vue')
    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router