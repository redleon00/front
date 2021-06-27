<template>
  <v-container>
    <v-dialog
      v-model="modal"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="mx-auto">
        <div class="page-header text-center">
         
          <h1>
            <strong> {{item.race+" "}}{{ item.category+" " }}{{item.sex == 'M' ? 'MACHO' : 'HEMBRA'}} </strong>
          </h1>
        
        </div>
        <div class="page-header text-center">
          <h1 >
            <strong> RESULTADOS </strong>
          </h1>
          <div class="row align-center">
            <div class="col-12"></div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-5">
            <div class="text-center">
              <div class="card mb-4 shadow p-3 mb-5 bg-white rounded" style="max-width: 740px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="require('@/assets/azulE.png')" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h1 class="card-title text-primary"><strong>1ER LUGAR</strong></h1>
                    <p class="card-text h2 text-muted">Ejemplar:</p>
                    <p class="card-text h1"><strong>{{item.firts_animal.name}}</strong></p>
                    <p class="card-text h5"><strong>Expositor: </strong>{{item.firts_animal.team}}</p>
                    <p class="card-text h5"><strong>Criador: </strong>{{item.firts_animal.breeder}}</p>
                  </div>
                </div>
              </div>
            </div>
              
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 ml-4">
            <div class="text-center">
              <div v-if="item.second_animal.name">
              <div class="card mb-3 shadow" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="require('@/assets/azulE.png')" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    
                    <h1 class="card-title">2do LUGAR</h1>
                    <p class="card-text h3 text-muted">Ejemplar:</p>
                    <p class="card-text h2"><strong>{{item.second_animal.name}}</strong></p>
                    <p class="card-text h6"><strong>Expositor: </strong>{{item.second_animal.team}}</p>
                    <p class="card-text h6"><strong>Criador: </strong>{{item.second_animal.breeder}}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
          <v-col md="4" offset-md="4">
            <div class="text-center">
              <div v-if="item.third_animal.name">
              <div class="card mb-3 shadow" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="require('@/assets/azulE.png')" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    
                    <h1 class="card-title">3er LUGAR</h1>
                    <p class="card-text h3 text-muted">Ejemplar:</p>
                    <p class="card-text h2"><strong>{{item.third_animal.name}}</strong></p>
                    <p class="card-text h6"><strong>Expositor: </strong>{{item.third_animal.team}}</p>
                    <p class="card-text h6"><strong>Criador: </strong>{{item.third_animal.breeder}}</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </v-col>
        </div>

        <v-card-actions>
          <v-btn color="red" text @click="close"> Cerrar </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    modal: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    toggled: {
      type: Boolean,
    },
  },

  data() {
    return {
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 12,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 6,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 6,
        },
      ],
    };
  },
  created() {
    console.log("animales que llegaron", this.toggled);
  },
  methods: {
    close() {
      this.$emit("closed");
    },
  },
};
</script>
<style scoped>
.transparent {
  opacity: 0.2;
}
</style>
