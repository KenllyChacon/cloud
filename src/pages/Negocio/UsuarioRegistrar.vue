<template>
  <div id="cont">
    <h2>Registrar Usuario</h2>
    <!--    <router-link to="/gestionNegocio/usuarios">-->
    <!--      <button type="button" class="btn btn-outline-danger" id="btn_ic">-->
    <!--        <img class="iconos" src="@/assets/images/ic_volver.png" alt="Volver">-->
    <!--        <label class="txt_ic">Volver</label>-->
    <!--      </button>-->
    <!--    </router-link>-->
    <mesaje-alerta-vue v-if="mostrarAlerta">{{ mensaje }}</mesaje-alerta-vue>

    <form @submit.prevent="registrarUsuario()">

      <div class="form-group">
        <label for="email">Nombres:</label>
        <input type="text" class="form-control" id="email" v-model="nombres" required>
      </div>

      <div class="form-group">
        <label for="email">Apellidos:</label>
        <input type="text" class="form-control" id="email" v-model="apellidos" required>
      </div>

      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <select class="form-control" id="provincia">
          <option value="" selected>Seleccione una provincia</option>
          <option value="Azuay">Azuay</option>
          <option value="Bolívar">Bolívar</option>
          <option value="Cañar">Cañar</option>
          <option value="Carchi">Carchi</option>
          <option value="Chimborazo">Chimborazo</option>
          <option value="Cotopaxi">Cotopaxi</option>
          <option value="El Oro">El Oro</option>
          <option value="Esmeraldas">Esmeraldas</option>
          <option value="Galápagos">Galápagos</option>
          <option value="Guayas">Guayas</option>
          <option value="Imbabura">Imbabura</option>
          <option value="Loja">Loja</option>
          <option value="Los Ríos">Los Ríos</option>
          <option value="Manabí">Manabí</option>
          <option value="Morona-Santiago">Morona-Santiago</option>
          <option value="Napo">Napo</option>
          <option value="Orellana">Orellana</option>
          <option value="Pastaza">Pastaza</option>
          <option value="Pichincha">Pichincha</option>
          <option value="Santa Elena">Santa Elena</option>
          <option value="Santo Domingo de los Tsáchilas">Santo Domingo de los Tsáchilas</option>
          <option value="Sucumbíos">Sucumbíos</option>
          <option value="Tungurahua">Tungurahua</option>
          <option value="Zamora-Chinchipe">Zamora-Chinchipe</option>
        </select>
      </div>

      <div class="form-group">
        <label for="email">Dirección:</label>
        <input type="text" class="form-control" id="email" v-model="direccion" required>
      </div>

      <div class="form-group">
        <label for="email">Ciudad:</label>
        <input type="text" class="form-control" id="email" v-model="ciudad" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" class="form-control" id="email" v-model="email" required>
      </div>

      <hr class="mb-4">

      <div class="row">
        <label for="categoria">Fecha de nacimiento:</label>
        <div class="col-md-4">
          <div class="form-group">
            <label for="day">Día</label>
            <input type="number" class="form-control" id="day" name="day" min="1" max="31" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="month">Mes</label>
            <input type="number" class="form-control" id="month" name="month" min="1" max="12" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="year">Año</label>
            <input type="number" class="form-control" id="year" name="year" min="1900" max="2021" required>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="gender">Género</label>
        <select class="form-control" id="gender" name="gender" required>
          <option value="">Seleccione...</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>
      </div>

      <hr class="mb-4">

      <div class="form-group">
        <label for="categoria">Categoría:</label>
        <select class="form-control" id="categoria" name="categoria">
          <option value="30-34">30-34</option>
          <option value="35-39">35-39</option>
          <option value="40-44">40-44</option>
          <option value="45-49">45-49</option>
          <option value="50-54">50-54</option>
          <option value="55-59">55-59</option>
          <option value="60-64">60-64</option>
          <option value="65-69">65-69</option>
          <option value="70-74">70-74</option>
          <option value="75-79">75-79</option>
          <option value="80-84">80-84</option>
          <option value="85-89">85-89</option>
          <option value="90-94">90-94</option>
        </select>
      </div>

      <hr class="mb-4">

      <label for="categoria">Pruebas en las que se inscribe:</label>
      <p>Marque con una x y coloque su mejor marca del 2022 y lo que va del 2023</p>
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>PRUEBA</th>
          <th>GRUPO DE EDAD</th>
          <th>X</th>
          <th>MEJOR MARCA DEL 2022/2023</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>100 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>200 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>400 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>800 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>1500 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>5000 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>10000 Metros Planos</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>2000 Metros Obstáculos</td>
          <td>MUJERES TODAS; HOMBRES 60+</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>3000 Metros Obstáculos</td>
          <td>HOMBRES 30-59</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>5000 Metros Marcha</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Salto Alto</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Salto Largo</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Salto Triple</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Salto con Garrocha</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Impulsión de Bala</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Lanzamiento de Disco</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Lanzamiento de Jabalina</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Lanzamiento de Martillo</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Lanzamiento de Martelete</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td>Pentathlon Tradicional</td>
          <td>TODOS Y TODAS</td>
          <td><input type="checkbox"></td>
          <td><input type="text"></td>
        </tr>
        </tbody>
      </table>
      <button type="submit" class="btn btn-danger">Registrar</button>
    </form>
    <loading-comp :loading="loading"></loading-comp>

  </div>
</template>
<script>
/*import MesajeAlertaVue from '@/components/MesajeAlerta.vue'
import LoadingComp from '@/components/LoadingComp.vue';

import { obtenerTipoIdFachada, registrarUsuarioFachada, obtenerPerfilesFachada } from '@/assets/js/api_markweb/ProcesarUsuarios'*/
export default {

  data() {
    return {
      nombres: null,
      apellidos: null,
      direccion: null,
      ciudad: null,
      email: null,
      password: null,
      perfil: null,
      tipoId: null,
      identificacion: null,
      id: null,
      tipos: [],
      perfiles: [],
      mensaje: null,
      mostrarAlerta: false,
      passwordConfirm: null,
      estado: null,
      loading: false,


    }
  },
  /*
    components: {
      MesajeAlertaVue,
      LoadingComp,
    },


    mounted() {
      this.obtenerTiposId()

    },

    methods: {
      async obtenerTiposId() {
        this.loading = true;
        this.tipos = await obtenerTipoIdFachada()
        this.perfiles = await obtenerPerfilesFachada()
        this.loading = false;
      },


      registrarUsuario() {
        if (this.password !== this.passwordConfirm) {
          this.mostrarAlerta = true;
          this.mensaje = "Las contraseñas no coinciden";
          return;
        }

        const usuario = {
          id: 0,
          nombres: this.nombres,
          apellidos: this.apellidos,
          email: this.email,
          password: this.password,
          perfil: this.perfil,
          tipoId: this.tipoId,
          identificacion: this.identificacion,
          estado: this.estado
        };

        this.loading = true;

        registrarUsuarioFachada(usuario)
            .then((response) => {
              try {
                console.log(response.status);
                if (response.status === 410) {
                  this.mostrarAlerta = true;
                  this.mensaje = "Ya existe un usuario con el nombre de usuario: " + this.email;
                } else {
                  this.mostrarAlerta = true;
                  this.mensaje = "Usuario registrado con éxito";
                  this.id = null;
                  this.nombres = null;
                  this.apellidos = null;
                  this.email = null;
                  this.password = null;
                  this.perfil = null;
                  this.tipoId = null;
                  this.identificacion = null;
                  this.estado = null;
                  this.passwordConfirm=null;
                }
                this.loading = false;
              } catch (error) {
                this.mostrarAlerta = true;
                this.mensaje = "Ha ocurrido un error al procesar la respuesta del servidor";
                console.log(error);
                this.loading = false;
              }
            })
            .catch((error) => {
              this.mostrarAlerta = true;
              this.mensaje = "Ha ocurrido un error al guardar, prueba a cambiar el nombre de usuario";
              console.log(error);
              this.loading = false;
            });
      }


    },*/

}
</script>
<style scoped>
.form-check {
  margin-left: 20px;
}

#radio {
  display: flex;
}

#cont {
  width: 40%;
  margin: 20px auto;
}

h2 {
  text-align: center;
}

.btn {
  margin: 10px 40%;
}

.iconos {
  width: 70px;
  height: 70px;
  margin: 10px auto;
}

#btn_ic {
  width: 100px;
  height: 130px;
  text-align: center;
  align-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font: bolder;
  font-size: large;
  margin-right: 20px;
  margin-top: 0px;
  position: absolute;
  top: 5%;
  right: 0.3%;
}
</style>