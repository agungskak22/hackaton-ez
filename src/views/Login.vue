<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm6 md3 lg3>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="/static/m.png"
                    alt="yescare"
                    width="120"
                    height="120"
                  />
                  <h1 class="flex my-4 primary--text">Yescare Login</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="data.username"
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="data.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="primary" :loading="load" dark @click.prevent="submitLogin(); load =true">
                    Login
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
    import store from '@/store'
export default {
  data() {
      return {
          error : false,
          showpassword:false,
          message: '',
          data: {
            username: '',
            password: ''
          },
          loginError: false,
          load: false,
          valid: true,
      }
  },
  methods: {
    loadUpdate(){
        this.load = true;
    },
    reset () {
        this.$refs.form.reset()
    },
    submitLogin () {
      this.loginError = false
      this.$http.post(this.$apiUrl + '/auth/login', this.data).then(response => {
        if (response.data.status === 0) {
          alert('Sorry your account is disable')
          this.load = false
          return
        }
        store.commit('loginUser')
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('roles', response.data.role)
        this.$router.push({ name: 'dashboard' })
      }).catch(error => {
        console.log(error)
        this.load = false,
        this.error = true,
        this.message = `The username and password you entered don't match`
      })
    }
  }
};
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
