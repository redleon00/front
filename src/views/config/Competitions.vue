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
    };
  },
  methods: {
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
  },
};
</script>
