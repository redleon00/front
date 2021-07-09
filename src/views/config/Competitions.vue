<template>
  <v-container>
    <div class="page-header">
      <h3 class="page-title">
        <strong> {{ title }} </strong>
      </h3>
      <div class="row align-center">
        <div class="col-12"></div>
      </div>
    </div>
    <v-card>
      <v-card-text>
        <v-card-title> Pulse para crear las Competencias </v-card-title>
        <div class="text-center">
          <v-btn class="ma-2" outlined color="indigo" @click="makeCompe">
            Crear las Competencias
          </v-btn>
        </div>
        <v-divider></v-divider>
        <div class="text-center">
          <v-btn class="ma-2" outlined color="indigo" @click="makeCompeEx">
            Crear las Competencias de Exhibición
          </v-btn>
        </div>
        <v-divider></v-divider>
        <div class="text-center">
         <download-excel :data="data1" :fields="headers" worksheet="Animales" name="animales.xls">
          <v-btn class="ma-2" outlined color="indigo"  @click="getAnimals">
            Descargas Data de Animales - Fenotipos
          </v-btn>
        </download-excel>
        </div>
        <v-divider></v-divider>
        <div class="text-center">
         <download-excel :data="data2" :fields="headers" worksheet="Animales" name="animales2.xls">
          <v-btn class="ma-2" outlined color="indigo"  @click="getAnimals2">
            Descargas Data de Animales - Exhibición
          </v-btn>
        </download-excel>
        </div>
        <v-divider></v-divider>
        <div class="text-center">
         
          <v-btn class="ma-2" outlined color="indigo"  @click="genCria">
            Crear tabla de Criadores de Ovinos
          </v-btn>
        
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import axios from "@/axios";
export default {
  data() {
    return {
      title: "Crear Competencias",
      data1:[],
      data2:[],
      headers:{
        "Ejemplar":"name",
        "Fecha de Nacimiento":"birthday",
        "Sexo":"sex",
        "Raza":"race",
        "Categoria":"category",
        "Grupo":"group",
        "Dueño":"owner",
        "Criador":"breeder",
        "Equipo":"team",
        "Nro de Registro": "register",
        "Tatuaje": "tatoo",
        "Asociación": "asociation",
        "Última Actualización": "updated_at"

      }
    };
  },
  created(){
    //this.getAnimals();
  },
  methods: {
    getAnimals(){
      axios.get("functions/getAnimalsExcel")
      .then((res) =>{
        console.log(res.data)
        res.data.allAnimals.forEach((x) => { x.birthday = x.birthday.substr(0, 10)})
        this.data1 = res.data.allAnimals
        
      }).catch((err) => {
          console.error(err);
      });
    },
    getAnimals2(){
      axios.get("functions/getAnimalsExcel2")
      .then((res) =>{
        console.log(res.data)
        res.data.allAnimalsEx.forEach((x) => { x.birthday = x.birthday.substr(0, 10)})
        this.data2 = res.data.allAnimalsEx
        
      }).catch((err) => {
          console.error(err);
      });
    },
    makeCompe() {
      axios.get("functions/generate")
      .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      axios.get("functions/generateGroup")
      .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      axios.get("functions/generateRace")
      .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
      axios
        .get("functions/generateSupreme")
        .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    makeCompeEx(){
    axios
        .get("functions/generateEx")
        .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    
    axios
        .get("functions/generateExCeba")
        .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    axios
        .get("functions/generateMestizas")
        .then((res) => {
          this.data = res.data;
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 3000,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    
    axios
      .get("functions/generateGroupMestizas")
      .then((res) => {
        this.data = res.data;
        this.$toast.open({
          message: res.data.message,
          type: "success",
          position: "bottom",
          duration: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    
    axios
      .get("functions/generateRaceMestizas")
      .then((res) => {
        this.data = res.data;
        this.$toast.open({
          message: res.data.message,
          type: "success",
          position: "bottom",
          duration: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("functions/betterTitsComp")
      .then((res) => {
        this.data = res.data;
        this.$toast.open({
          message: res.data.message,
          type: "success",
          position: "bottom",
          duration: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("functions/milkerComp")
      .then((res) => {
        this.data = res.data;
        this.$toast.open({
          message: res.data.message,
          type: "success",
          position: "bottom",
          duration: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
      });

  },
  genCria(){
    axios
      .get("functions/genCria")
      .then((res) => {
        this.data = res.data;
        console.log(res.data)
        this.$toast.open({
          message: res.data.message,
          type: res.data.type,
          position: "bottom",
          duration: 3000,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  },
  
};
</script>
