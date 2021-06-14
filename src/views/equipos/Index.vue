<template>
  <div class="container">
    <div class="page-header">
      <h3 class="page-title"><strong> {{ title }} </strong></h3>
      <div class="row align-center">
        <div class="col-12"></div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-md-2">
       <div data-app>   
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab small dark v-bind="attrs" v-on="on" :to="link">
              <v-icon dark> fa fa-plus </v-icon>
            </v-btn>
          </template>
          <span>Agregar Nuevo</span>
        </v-tooltip>
        </div>
      </div>
      <div class="col-md-4">
        <input
          class="form-control"
          type="text"
          v-model="search"
          placeholder="Buscar.."
          id="search"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <v-data-table
          :headers="headers"
          :items="data"
          loading
          loading-text="Please wait"
          :search="search"
          :items-per-page="10"
          :page.sync="page"
          hide-default-footer
          @page-count="pageCount = $event"
          class="border"
          id="table"
        >
         <template v-slot:[`all_teams.owner`]="{ item }">
          
            {{ item.all_teams.owner }}
          
        </template>
        <template v-slot:[`item.owner`]="{ item }">
          <v-icon
            color="blue"
            small
          >
          {{ item.owner }}
          </v-icon>
        
        </template>
        <template v-slot:[`item.breeder`]="{ item }">
          <v-icon
            color="blue"
            small
          >
          {{ item.breeder }}
          </v-icon>
        
        </template>
        <template  v-slot:[`item.actions`]="{ item }">             
            <v-icon
              small
              class="mr-4"
              @click="editItem(item)"
              color="red"
            >
              fa fa-edit
            </v-icon>   
            <v-icon
              small
              class="ml-4"
              @click="deleteItem(item)"
            >
             fa fa-trash
            </v-icon>
            
        </template>
        </v-data-table>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from "@/axios"
export default {
   
  data() {
    return {
      title: "Equipos",
      isLoading: false,
      page: 1,
      type: 0,
      pageCount: 0,
      data: [],
      search: "",
      link:"/equipos/nuevo",
      headers: [
        {
          text: "Participante",
          align: "start",
          sortable: true,
          value: "participant",
          class: "thead-light",
        },
        {
          text: "Nombre del Equipo",
          align: "center",
          sortable: true,
          value: "name",
          class: "thead-light",
        },
        {
          text: "Especie",
          align: "center",
          sortable: true,
          value: "animal_type",
          class: "thead-light",
        },
        {
          text: "Numero de Ejemplares",
          align: "center",
          sortable: true,
          value: "all_teams.length",
          class: "thead-light",
        },
        {
          text: "Asociación",
          align: "center",
          sortable: true,
          value: "asociacion",
          class: "thead-light",
        },
        {
          text: "Acciones",
          align: "start",
          sortable: false,
          value: "actions",
          class: "thead-light",
        },

      ],
    };
  },
  created () {
		this.getTeams();
	},
  methods: {
    getTeams(){
      axios.get("teams")
			.then(res => {
				this.data = res.data
        console.log("data", this.data)
			})
			.catch(err => {
				console.error(err); 
			})

    },
    deleteItem (item) {
        let pos = this.data.indexOf(item)
        axios
          .post(`/teams/deleted/${item._id}`)
          .then( res => {
            this.$toast.open({
              message: res.data.message,
              type: "warning",
              position: "bottom",
              duration: 3000,
            });
            this.data.splice(pos, 1)
          } )
          .catch((err) => {
            console.error(err);
            this.$toast.open({
              message: "Ups!...ocurrió un error :(",
              type: "error",
              position: "bottom",
              duration: 3000,
            });
          })
        
      },
      editItem (item) {
        this.$router.push({ name: 'EditarEquipo', params: { item: item } })
      },
      
     
}
}
</script>