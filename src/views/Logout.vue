<template>
</template>
<script>
import store from '../store.js'
export default {
  mounted () {
    localStorage.removeItem('token')
    localStorage.removeItem('roles')
    localStorage.removeItem('id')
    localStorage.removeItem('name')
    store.commit('logoutUser')
    this.$router.push({ name: 'Login' })
  }
}
</script>