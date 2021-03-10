<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="authenticate">
                Войти
            </v-btn>
        </v-card>
    </div>
</template>


<script>
export default {
    name: 'Login',
    data(){
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        authenticate() {
            this.axios.get("http://37.77.104.246/api/jsonstorage/?id=100f06bcf58ff825f404e5aa25033588")
                .then(
                    (response) => {
                        let users = response.data.data;
                        let found = false;

                        for (let index in users) {
                            console.log(users[index].login);
                            console.log(users[index].password);
                            if ((this.login == users[index].login) && (this.password == users[index].password)) {

                                this.$store.commit('setUserId', parseInt(index) + 1)
                                this.$router.push('users/' + this.$store.state.userId);
                                found = true;
                                break;
                            }
                        }

                        if (!found) {
                            window.alert('Wrong!')
                        }
                    }
                )
        }
    },
    mounted(){
        if(this.$store.state.userId != '-1')
            this.$router.push('users/' + this.$store.state.userId);
    }
}
</script>