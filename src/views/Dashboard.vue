/* eslint-disable */
<template>
  <div class="home col-8 mx-auto py-5 mt-5">
    <b-modal ref="my-modal2" hide-footer title="Visualización de compañeros">
      <div class="d-block text-center">
        <b-container>
          <b-row>
            <b-col cols="12">
              <ul class="list-cites" v-for="item of materiasFil" :key="item.id">
                <li>
                  <h5>Estudiante: {{ item.nameEstudiante }}</h5>
                </li>
                <li></li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal>
    <b-modal ref="my-modal" hide-footer title="Visualización de estudiantes">
      <div class="d-block text-center">
        <b-container>
          <b-row>
            <b-col cols="12">
              <ul class="list-cites" v-for="item of materiasFil" :key="item.id">
                <li>
                  <h5>Estudiante: {{ item.nameEstudiante }}</h5>
                </li>
                <li></li>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal>
    <h1>Dashboard</h1>
    <div class="card">
      <div class="card-body" v-if="user.type_user === '1'">
        <h3>Bienvenido Administrador, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
        <b-tabs content-class="mt-3">
          <b-tab title="Estudiante" active>
            <p>Registre Estudiantes</p>
            <b-form @submit.prevent="register">
              <b-form-group
                id="input-group-1"
                label="Nombre:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form.name"
                  placeholder="Ingrese el nombre"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Correo Electronico:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form.email"
                  placeholder="Ingrese el correo"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Contraseña:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form.password"
                  placeholder="Ingrese una contraseña"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Repita la Contraseña:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form.password_confirmation"
                  placeholder="Repita la contraseña"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </b-tab>
          <b-tab title="Docente">
            <p>Registre Docente</p>
            <b-form @submit.prevent="registerDocente">
              <b-form-group
                id="input-group-1"
                label="Nombre:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form2.name"
                  placeholder="Ingrese el nombre"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Correo Electronico:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form2.email"
                  placeholder="Ingrese el correo"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Contraseña:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form2.password"
                  placeholder="Ingrese una contraseña"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label="Repita la Contraseña:"
                label-for="input-1"
              >
                <b-form-input
                  v-model="form2.password_confirmation"
                  placeholder="Repita la contraseña"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </b-tab>
          <b-tab title="Información">
            <h3>Nombre: {{ user.name }}</h3>
            <h3>Correo: {{ user.email }}</h3>
          </b-tab>
        </b-tabs>
      </div>
      <div class="card-body" v-if="user.type_user === '2'">
        <h3>Bienvenido Estudiante, {{ user.name }}</h3>
        <b-tabs content-class="mt-3">
          <b-tab title="Materias Asociadas" active
            ><p>Sus materias asignadas son:</p>
            <b-container>
              <b-row>
                <b-col cols="12">
                  <ul
                    class="list-cites"
                    v-for="item of materias2Est"
                    :key="item.id"
                  >
                    <li>
                      <br />
                      <h5>
                        Materia: {{ item.nameSubject }}
                        <b-button
                          variant="danger"
                          style="margin-left: 100px"
                          @click="visualizarRest(item)"
                          pill
                          >Visualizar</b-button
                        >
                      </h5>
                    </li>
                    <li>
                      <h5>Codigo Matricula: {{ item.id }}</h5>
                      <br />
                    </li>
                    <li>
                      <h5>Docente: {{ item.nameDocente }}</h5>
                      <br />
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Registre materias"
            ><p>Registre su nueva materia</p>
            <b-form @submit.prevent="registerMateriaEstudiante2">
              <b-form-group
                id="input-group-100"
                label="Codigo de la materia:"
                label-for="input-100"
              >
                <b-form-select v-model="selected">
                  <option
                    v-for="item in materiasLast"
                    :selected="item.name ? 'selected' : ''"
                    :key="item.id"
                    :value="item"
                  >
                    {{ item.nameSubject }}
                  </option>
                </b-form-select>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </b-tab>
          <b-tab title="Información">
            <h3>Nombre: {{ user.name }}</h3>
            <h3>Correo: {{ user.email }}</h3>
          </b-tab>
        </b-tabs>
      </div>
      <div class="card-body" v-if="user.type_user === '3'">
        <h3>Bienvenido Docente, {{ user.name }}</h3>
        <b-tabs content-class="mt-3">
          <b-tab title="Materias" active>
            <p>Materias Asociadas</p>
            <b-container>
              <b-row>
                <b-col cols="12">
                  <ul
                    class="list-cites"
                    v-for="item of materias2"
                    :key="item.id"
                  >
                    <li>
                      <br />
                      <h5>
                        Materia: {{ item.nameSubject }}
                        <b-button
                          variant="danger"
                          style="margin-left: 100px"
                          @click="visualizar(item)"
                          pill
                          >Visualizar</b-button
                        >
                      </h5>
                    </li>
                    <li>
                      <h5>Codigo Matricula: {{ item.id }}</h5>
                      <br />
                    </li>
                  </ul>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Registre Materias">
            <b-form @submit.prevent="registerMateria">
              <b-form-group
                id="input-group-100"
                label="Nombre de la materia:"
                label-for="input-100"
              >
                <b-form-input
                  v-model="dataMateria.nameSubject"
                  placeholder="Nombre de la Materia"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
          </b-tab>
          <b-tab title="Información">
            <h3>Nombre: {{ user.name }}</h3>
            <h3>Correo: {{ user.email }}</h3>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../apis/User";
import Api from "../apis/Api";
import Csrf from "../apis/Csrf";
import {mapState, mapActions} from 'vuex'
export default {
  data() {
    return {
      selected: null,
      user: null,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        type_user: "2"
      },
      dataMateria: {
        nameSubject: "",
        idDocente: "3",
        nameDocente: "Luceni"
      },
      form2: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        type_user: "3"
      },
      form3: {
        idSubject: ""
      },
      materias: [],
      materiasFil: [],
      materiasEst: [],
      materiasLast: [],
      errors: []
    };
  },

  async mounted() {
    await User.auth().then(response => {
      this.user = response.data;
    });
    this.showMaterias2();
    this.showMateriasForRegister();
    this.showMateriasEst2();
  },
  computed:{
    ...mapState(['materias2','materias2Est','registerMate']),
    ...mapActions(['showMaterias23','showMateriasEst23','registerMateriaEstudiante23'])
  },
  methods: {
    async registerMateriaEstudiante2() {
      let form = {
        idSubject: this.selected.id,
        nameSubject: this.selected.nameSubject,
        idDocente: this.selected.idDocente,
        nameDocente: this.selected.nameDocente,
        idEstudiante: this.user.id,
        nameEstudiante: this.user.name
      };
      this.$store
          .dispatch("registerMateriaEstudiante23",form)
          .then(() => this.$router.push("/dashboard"))
          .catch(err => console.log(err));
      this.showMateriasEst2();
      alert("Registro Exitoso");
    },
    
    async visualizar(evt) {
      console.log(evt);
      let dataUser = {
        idDocente: this.user.id,
        idSubject: evt.id
      };
      await Csrf.getCookie();
      console.log(dataUser);
      const data = await Api.post("/datasMateriaEstDoc", dataUser);
      const dataF = data.data;
      this.materiasFil = dataF;
      console.log("Este es el data");
      console.log(dataF);
      this.$refs["my-modal"].show();
    },
    async visualizarRest(evt) {
      console.log(evt);
      let dataUser = {
        idSubject: evt.idSubject,
        idDocente: evt.idDocente
      };
      console.log("User");
      console.log(dataUser);
      await Csrf.getCookie();
      console.log(dataUser);
      const data = await Api.post("/datasMateriaEstDoc", dataUser);
      const dataF = data.data;
      this.materiasFil = dataF;
      console.log("Este es el data");
      console.log(dataF);
      this.$refs["my-modal2"].show();
    },
    async showMaterias2() {
      let dataUser = {
        idDocente: this.user.id
      };
      console.log("Cargando Datas");
      this.$store
          .dispatch("showMaterias23",dataUser)
          .then(() => this.$router.push("/dashboard"))
          .catch(err => console.log(err));
    },
    async showMateriasForRegister() {
      await Csrf.getCookie();
      const data = await Api.post("/datasMateriaAll");
      const dataF = data.data;
      this.materiasLast = dataF;
      console.log(dataF);
    },
    async showMateriasEst2() {
      let dataUser = {
        idEstudiante: this.user.id
      };
      this.$store
          .dispatch("showMateriasEst23",dataUser)
          .then(() => this.$router.push("/dashboard"))
          .catch(err => console.log(err));
    },
    registerMateria() {
      let datas = {
        nameSubject: this.dataMateria.nameSubject,
        idDocente: this.user.id,
        nameDocente: this.user.name
      };
      User.registerMateria(datas)
        .then(() => {})
        .catch(error => {
          if (error.response.status === 422) {
            alert("Error al registrar");
          }
        });
      this.dataMateria.nameSubject = "";
      this.showMaterias2();
      alert("Registro de materia completado");
    },
    async register() {
      let form = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
        type_user: "2"
      };
      const data = await Api.post("/register", form);
      console.log(data);
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.form.password_confirmation = "";
      alert("Registro Completado");
    },
    async registerDocente() {
      console.log()
      let form = {
        name: this.form2.name,
        email: this.form2.email,
        password: this.form2.password,
        password_confirmation: this.form2.password_confirmation,
        type_user: "3"
      };
      const data = await Api.post("/register", form);
      console.log(data);
      this.form2.name = "";
      this.form2.email = "";
      this.form2.password = "";
      this.form2.password_confirmation = "";

      alert("Docente Registrado");
    }
  }
};
</script>

<style scoped>
.list-cites {
  margin-top: 20px;
  border-style: solid;
  border-width: 5px;
  border-color: #b03d16;
  border-radius: 20px 20px 20px 20px;
  list-style-type: none !important;
}
</style>
