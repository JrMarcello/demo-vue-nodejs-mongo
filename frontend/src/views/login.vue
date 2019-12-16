<template>
  <div class="container-fluid bg-info h-100 align-content-center  ">
    <div id="login">
      <div class="image">
        <img src="../assets/logo.png" alt="logo" style="width: 250px;" />
      </div>
      <div class="login-form" v-if="formLogin">
        <b-card>
          <b-form class="p-2" @submit.prevent="login">
            <b-form-input v-model="user.email" type="email" required placeholder="Email"></b-form-input>
            <b-form-input v-model="user.password" type="password" required placeholder="Senha"></b-form-input>
            <b-button class="" type="submit" variant="info">LOGIN</b-button>
          </b-form>

          <b-button class="text-decoration-none" variant="link" @click.prevent="handleForm()">Cadastre-se</b-button>
        </b-card>
      </div>
      <div class="login-form" v-else>
        <b-card>
          <b-form class="p-2" @submit.prevent="register">
            <b-form-input v-model="user.username" type="text" required placeholder="Nome"></b-form-input>
            <b-form-input v-model="user.email" type="email" required placeholder="Email"></b-form-input>
            <b-form-input v-model="user.password" type="password" required placeholder="Senha"></b-form-input>
            <b-button class="" type="submit" variant="info">CADASTRAR</b-button>
          </b-form>

          <b-button class="text-decoration-none" variant="link" @click.prevent="handleForm()">Login</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      error: false,
      formLogin: true
    }
  },
  methods: {
    handleForm() {
      this.formLogin = !this.formLogin
      this.user = {
        username: '',
        email: '',
        password: ''
      }
    },
    login() {
      this.$store
        .dispatch('user/login', this.user)
        .then(() => this.$router.push('/'))
        .catch(() => {
          this.$bvToast.toast('Email e/ou Senha válido(s)', {
            title: 'Erro',
            variant: 'danger',
            solid: true
          })
        })
    },
    register() {
      this.$store
        .dispatch('user/register', this.user)
        .then(() => {
          this.handleForm()

          this.$bvToast.toast('Usuario criado', {
            title: 'Sucesso',
            variant: 'success',
            solid: true
          })
        })
        .catch(() => {
          this.$bvToast.toast('Informe um Email e/ou Senha válido(s)', {
            title: 'Erro cadastrar usuario',
            variant: 'danger',
            solid: true
          })
        })
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  padding-top: 10%;
  padding-bottom: 5px;
}

.login-form {
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.login-form input {
  margin: 0 0 15px;
  padding: 15px;
}

.login-form button {
  width: 100%;
  border: 0;
  padding: 10px;
  font-weight: bold;
}

.login-form .message {
  margin: 10px 0 0;
}
</style>
