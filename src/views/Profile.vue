<template>
  <v-app dark>
    <v-content class="px-12 py-3">
      <v-container fluid>
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    {{ userData.name }}
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img v-bind:src="userData.photo" style="max-width: 100%">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a v-bind:href="'https://'+ userData.website" target="_blank">{{ userData.website }}</a>
                </p>
                <p>
                    E-mail: <a v-bind:href="'mailto:' + userData.email">{{ userData.email }}</a>
                </p>
                <p>
                    Город: {{ userData.city }}
                </p>
                <p>
                    Место работы: {{ userData.company }}
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
			this.axios.get("http://37.77.104.246/api/jsonstorage/?id=100f06bcf58ff825f404e5aa25033588")
				.then((response)=> {
					console.log(response.data.data[this.$route.params.id - 1]);
					this.userData = response.data.data[this.$route.params.id - 1];
				})
		}
	},
	mounted() {
		this.getUserData();
	},
	watch: {
		$route() {
			this.getUserData();
		}
	}
}
</script>

