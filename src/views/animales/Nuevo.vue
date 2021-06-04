<template>
  <v-container fluid>
    <v-card elevation="23">
      <v-card-text>
        <v-form ref="form" @submit.prevent="submit">
          <v-row>
            <v-col class="h3 font-weight-bold"
              >Agregar Animal</v-col
            >
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                label="Nombre"
                v-model="form.name"
                class="form-control-sm"
                :rules="rules.required"
                required
              ></v-text-field>
            </v-col>    
            <v-col cols="12" md="4">
                <v-combobox
                  v-model="form.race"
                  label="Raza"
                  :items="races"
                  class="form-control-sm"
                  :rules="rules.required"
                  required
                ></v-combobox>
            </v-col>
            <v-col cols="12" md="4">
               <v-radio-group v-model="form.sex" row>
                <v-radio
                  label="Macho"
                  value="M"
                  color="indigo"
                  class="form-control-sm"
                ></v-radio>
                <v-radio
                  label="Hembra"
                  value="H"
                  color="indigo"
                  class="form-control-sm"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row> 
          <v-row>
              <v-col cols="12" md="6">
                 <v-combobox
                  v-model="form.category"
                  label="Categoria"
                  :items="categorys"
                  class="form-control-sm"
                  :rules="rules.required"
                  required
                  @change="setSubcategory"
                ></v-combobox>
              </v-col>  
              <v-col cols="12" md="6"> 
                 <v-combobox
                  v-model="form.subcategory"
                  label="Subcategoria"
                  :items="subcategorys2"
                  class="form-control-sm"
                  :rules="rules.required"
                  required
                ></v-combobox> 
              </v-col>  
          </v-row>   
          <v-row>
              <v-col cols="12" md="6">
                 <v-combobox
                  v-model="form.owner"
                  label="Propietario"
                  :items="participants"
                  class="form-control-sm"
                  :rules="rules.required"
                  required
                ></v-combobox>
              </v-col> 
              <v-col cols="12" md="6">
                <v-combobox
                  v-model="form.breeder"
                  label="Criador"
                  :items="participants"
                  class="form-control-sm"
                  :rules="rules.required"
                  required
                ></v-combobox>
              </v-col>           
          </v-row>   
           <v-divider></v-divider>
          <v-spacer></v-spacer><v-spacer></v-spacer>
          <v-card-actions>
          <v-btn text :to="link">
            <v-icon dark> fa fa-arrow-left </v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submit"> Aceptar </v-btn>
        </v-card-actions> 
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>        
<script>
import axios from "@/axios";
export default {
  data() {
    return {
      rules: {
        required: [(v) => !!v || "Campo requerido"],
      },
      server: process.env.API_URL || "http://localhost:3000",
      value: "",
      custom: true,
      link: "/animales/index",
      form: {
        name: "",
        sex: "M",
        race: "",
        category: "",
        subcategory: "",
        owner: "",
        breeder: "",
      },
      races: [],
      categorys: [],
      subcategorys: [],
      subcategorys2: [],
      participants: []
    };
  },
  created () {
		this.getParticipants();
    this.getRaces();
    this.getCategory();
    this.getSubcategory();
	},
  methods: {
    submit() {
      axios
        .post(`/animal/register`, this.form)
        .then((res) => {
          this.$toast.open({
            message: res.data.message,
            type: "success",
            position: "bottom",
            duration: 5000,
          });
           this.$refs.form.reset()
           this.sex = 'M'
        })
        .catch((err) => {
          console.error(err);
          this.$toast.open({
            message: "Ups!...ocurrió un error :(",
            type: "error",
            position: "bottom",
            duration: 5000,
          });
        });
    },
    getParticipants(){
      axios.get("participant")
			.then(res => {
        this.participants = res.data.map(function(x) {
                return x.name
            })
			})
			.catch(err => {
				console.error(err); 
			})

    },
    getRaces() {
      axios
        .get("race")
        .then((res) => {
          this.races = res.data.map(function(x) {
                return x.name
            })
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCategory() {
      axios
        .get("category")
        .then((res) => {
          this.categorys = res.data.map(function(x) {
                return x.name
            })
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getSubcategory() {
      axios
        .get("subcategory")
        .then((res) => {
          this.subcategorys = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setSubcategory(){
      this.form.subcategory = ''
      this.subcategorys2 = this.subcategorys.filter(
        p => p.category === this.form.category
      );
      this.subcategorys2 = this.subcategorys2.map(function(x) {
                return x.name
            })
    }
  },
};
</script>