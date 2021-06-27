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
        <v-card-title> Seleccione las tablas a resetear </v-card-title>
        <v-form>
          <v-row class="light--text">
            <v-col cols="3">
              <v-checkbox  v-model="form.animals" @click="selectAni">
                  <template v-slot:label>
              <div>
                  Animales
            </div>
            </template>

              </v-checkbox>
            </v-col>
            <v-col cols="3">
              <v-checkbox v-model="form.results" >
                  <template v-slot:label>
              <div>
                  Resultados
            </div>
            </template>
              </v-checkbox>
            </v-col>
            <v-col cols="3">
              <v-checkbox v-model="form.participants">
                  <template v-slot:label>
              <div>
                  Participantes
            </div>
            </template>
              </v-checkbox>
            </v-col>
            <v-col cols="3">
              <v-checkbox v-model="form.team">
                  <template v-slot:label>
              <div>
                  Equipos
            </div>
            </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn color="blue darken-1" text @click="reset">
            Resetear
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import axios from '@/axios'
export default {
  data() {
    return {
      title: "Tablas de Datos",
      form:{
          animals:false,
          results: false,
          participants:false,
          team:false
      }
    };
  },
  methods:{
      reset(){
          if(this.form.animals == false && this.form.results == false && this.form.participants == false && this.form.team == false ){
              return this.$toast.open({
                        message: "Debe seleccionar alguna de las opciones",
                        type: "error",
                        position: "bottom",
                        duration: 3000,
                        });
          }
          axios
            .post('bd', this.form)
            .then(res => {
                this.$toast.open({
              message: res.data.message,
              type: "warning",
              position: "bottom",
              duration: 3000,
            });
            })
            .catch((err) =>{
                this.$toast.open({
                message: "Ups!...ocurrió un error :("+err,
                type: "error",
                position: "bottom",
                duration: 3000,
                });
            })
      },
      selectAni(){
          
          this.form.results = (this.form.animals == true) ? true : false
      },
     
  }
};
</script>
