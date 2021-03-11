<template>
	<v-app>
		<v-list>
			<v-list-item v-for="usr in users" :key="usr">
				<v-card>
					<v-card-title>{{usr.name}}</v-card-title>
					<v-card-subtitle>{{usr.login}}</v-card-subtitle>
					<v-card-text>{{usr.city}}</v-card-text>
					<img v-bind:src="usr.photo" style="max-width: 100%">
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
			</v-list-item>
		</v-list>
	</v-app>
</template>


<script>
export default {
	name: 'FindFriends',
	data() {
		return {
			users: []
		}
	},
	methods: {
		getUsers() {
			this.axios.get("http://37.77.104.246/api/jsonstorage/?id=100f06bcf58ff825f404e5aa25033588")
				.then(
					(response) => {
						let get_users = response.data.data;
						this.users = get_users;
					}
				)
		}
	},
	mounted() {
		this.getUsers();
	}
}
</script>
