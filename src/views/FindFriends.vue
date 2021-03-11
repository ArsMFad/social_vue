<template>
	<v-app>
		<v-list>
			<v-list-item v-for="usr in getUsers" :key="usr">
				<p>a</p>
			</v-list-item>
		</v-list>
	</v-app>
</template>


<script>
export default {
	name: 'FindFriends',
	computed: {
		getUsers: function() {
			this.axios.get("http://37.77.104.246/api/jsonstorage/?id=100f06bcf58ff825f404e5aa25033588")
                .then(
                    (response) => {
                        let users = response.data.data;
                        console.log(users);
                        return users;
                    }
                )
		}
	}
}
</script>
