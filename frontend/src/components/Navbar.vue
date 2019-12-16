<template>
  <div>
    <b-navbar type="dark" variant="info" class="px-5">
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" alt="logo" class="w-25 h-25" />
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-text class="ml-auto px-3"
          >Ola, <strong>{{ userName }}</strong>
        </b-nav-text>
        <b-nav-text><a @click.prevent="logout()">Sair</a></b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState('user', ['user']),
    userName() {
      return this.user && this.user.username ? this.user.username.split(' ')[0] : 'Usuário'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout').then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style scoped></style>
