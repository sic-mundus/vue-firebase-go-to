<template>
<v-app-bar app color="primary" dark>
     <v-toolbar-title>Application</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
        v-if="!getUser"
        color="secondary"
        class="primary--text"
        to="/login">
        LOGIN
    </v-btn>

    <v-btn
        v-if="getUser"
        outlined
        color="secondary"
        @click="signOut"
        >
        LOGOUT
    </v-btn>

</v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    ...mapActions(['logout']),
    signOut () {
      this.logout()
      if (this.$route.path !== '/') this.$router.replace('/')
    }
  }
}
</script>