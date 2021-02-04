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

        <v-list-item link :to='link'>

          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left">Home</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-list-item link :to='link'>

          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-left">My profile</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>


        <v-list-item link :to='link'>

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
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    Иван Иванов
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img src="https://randomuser.me/api/portraits/men/2.jpg" style="max-width: 100%">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a href="..." target="_blank">...</a>
                </p>
                <p>
                    E-mail: <a href="mailto:...">...</a>
                </p>
                <p>
                    Город: ...
                </p>
                <p>
                    Место работы: ...
                </p>
            </v-col>
        </v-row>
      </v-container>

      <v-container fluid>
        <v-divider class="my-3"></v-divider>
        <h1>Publications</h1>

        <v-row>
          <v-col cols="7">
            <v-card>
              <v-card-title>Smth</v-card-title>
              <v-card-subtitle>smth</v-card-subtitle>
              <v-card-text>smth smth smth smth smth smth smth smth smth smth smth</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="7">
            <v-card>
              <v-card-title>Smth</v-card-title>
              <v-card-subtitle>smth</v-card-subtitle>
              <v-card-text>smth smth smth smth smth smth smth smth smth smth smth</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-content>
  </v-app>
</template>


<script>
export default {
	name: 'Profile',
	data() {
		return {
			userData: ''
		}
	},
	methods: {
		getUserData() {
			this.axios.get(`http://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
				.then((response)=> {
					console.log(response);
					this.userData = response.data;
				})
		}
	}
}
</script>

