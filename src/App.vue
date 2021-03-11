<template>
  <v-app dark>
    <v-navigation-drawer
      app
      color="green"
      expand-on-hover
      hide-overlay
      permanent
      right
      dark
    >
      <v-list
        nav
        shaped
        dense
      >
        <v-list-item two line>
          <v-list-item-avatar>
            <img v-bind:src="getPhoto" alt="">
          </v-list-item-avatar>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item link to='/'>

          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='/login' v-if="$store.state.userId == '-1'">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='/registration' v-if="$store.state.userId == '-1'">
          <v-list-item-icon>
            <v-icon>mdi-account-alert</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left">Registration</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item-group v-else>
          <v-list-item link :to='`/users/${$store.state.userId  }`'>

            <v-list-item-icon>
              <v-icon>mdi-account-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-left">My profile</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>


          <v-list-item link to='/users' exact>

            <v-list-item-icon>
              <v-icon>mdi-account-multiple-plus-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-left">Find friends</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-content class="px-12 py-3">
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    nav: true
  }),
  computed: {
    getPhoto() {
      return this.$store.state.photo;
    }
  }
};
</script>

<style>
.app {
  background-image: url(https://apwshop.com/upload/iblock/ed0/680.jpg);
}
</style>
