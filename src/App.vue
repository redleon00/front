<template>
  <div id="app">
      <sidebar-menu :menu="menu" :width="width"/>
      <div class="row justify-content-md-center">
        <div class="col-md-10 offset-md-2">
          <router-view></router-view>
          <v-app><v-main></v-main></v-app>
        </div>    
      </div>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  components: {
    SidebarMenu,
  },
  props: {
    // Sidebar menu (required)
   
    // Sidebar Collapse state
    collapsed: {
      type: Boolean,
      default: true
    },

    // Sidebar width (expanded)
    width: {
      type: String,
      default: '200px'
    },
    
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Sistema Puntuador",
          hiddenOnCollapse: true,
        },
        {
          href:  '/' ,
          title: "Inicio",
          icon: "fa fa-home",
        },
        {
          href: "",
          title: "Registros",
          icon: "fa fa-edit",
          child: [
            {
              href: "/animales/index",
              title: "Animales",
              icon: "fa fa-horse",
            },
            {
              href: "/participantes/index",
              title: "Participantes",
              icon: "fa fa-hat-cowboy-side",
            },
          ],
        },
        {
          href: "/competencia",
          title: "Competencia",
          icon: "fa fa-trophy"
        },
        {
          href: "/resultados",
          title: "Resultados",
          icon: "fa fa-result"
        },
        {
          href: "/config",
          title: "Configuración",
          icon: "fa fa-grip-vertical",
          child:[
            {
              href:"/config/raza",
              title:"Razas",
              icon: "fa fa-sort-amount-up"
            },
            {
              href:"/config/categoria",
              title:"Categorias",
              icon: "fa fa-sort-amount-up"
            },
            {
              href:"/config/subcategoria",
              title:"SubCategorias",
              icon: "fa fa-sort-amount-up"
            },
            
          ]
        },
      ],
    };
  },
};
</script>

<style>
.v-sidebar-menu {
  height: auto !important;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 42;
}
.v-sidebar-menu .vsm-arrow:after {
  font-family: FontAwesome;
}
.v-sidebar-menu .collapse-btn:after {
  content: "\f07e";
  font-family: FontAwesome;
}
</style>`