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
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="">
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

        <v-list-item link to='/users/2'>

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

      </v-list>

    </v-navigation-drawer>

    <v-content class="px-12 py-3">
      <v-container fluid>
        <router-view v-on:login="updateUser" />
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
  methods: {
  }
};
</script>


<script>
  
</script>

<style lang="scss">
</style>
