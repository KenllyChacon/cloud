<template>
  <div id="login">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <label for="username" class="form-label"> Nombre de usuario: </label>
      <input id="username" class="form-control" type="text" v-model="email" required>

      <label for="password" class="form-label"> Contraseña:</label>
      <div class="input-group mb-3">
        <input id="password" class="form-control" type="password" v-model="password" required>
<!--        <button class="btn btn-outline-secondary" type="button" id="btnMostrar">
          <i class="bi bi-eye-fill"></i>
        </button>-->

      </div>

      <button type="submit" class="btn btn-danger">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      showNavbar: true
    }
  }}
/*
  created() {
    this.showNavbar = false
  },
  methods: {
    login() {
      axios.post('http://localhost:8081/API/MarkWeb/V1/usuario/login', {
        email: this.email,
        password: this.password
      })
          .then(response => {
            const token = response.data.token
            const roles = response.data.roles
            const estado = response.data.estado // Agregamos el estado
            localStorage.setItem('token', token)
            localStorage.setItem('roles', JSON.stringify(roles))
            localStorage.setItem('username', this.email)
            localStorage.setItem('estado', estado) // Guardamos el estado
            if (estado) { // Verificamos si el estado es true
              this.$router.push('/') // redirigir a la página principal
            } else {
              alert('Tu cuenta está desactivada') // Mostramos un mensaje de error si el estado es false
            }
          })
          .catch(error => {
            console.error(error)
            alert('Credenciales incorrectas')
          })
    }

  },
  mounted() {
    var btnMostrar = document.getElementById("btnMostrar");
    var password = document.getElementById("password");

    btnMostrar.addEventListener("click", function () {
      if (password.type === "password") {
        password.type = "text";
        btnMostrar.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
      } else {
        password.type = "password";
        btnMostrar.innerHTML = '<i class="bi bi-eye-fill"></i>';
      }
    });
  }
}*/
</script>

<style scoped>
#login {
  width: 500px;
  margin: 70px auto;
}

input {
  margin-bottom: 10px;
  height: 40px;
}

h1 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-bottom: 20px;
  text-align: center;
}

button {
  align-content: center;
  text-align: center;
  margin: 10px 35%;
  //padding: auto;
}

#password {
  width: 285px;
}

#btnMostrar {
  margin-top: 0px;
  height: 40px;
  margin-right: 0px;
}

.mb-3 {
  width: 500px;
}
</style>
