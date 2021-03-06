<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Регистрация
            </v-card-title>

            <v-text-field
                label="Введите имя"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="authenticate">
                Регистрация
            </v-btn>
        </v-card>
    </div>
</template>


<script>
export default {
    name: 'Registration',
    data() {
        return {
            login: '',
            password: '',
            name: '',
            website: '',
            email: '',
            city: '',
            company: '',
            photo: ''
        }
    },
    methods: {
        register() {
            this.axios.get("http://37.77.104.246/api/jsonstorage/?id=0f6fb5a75e57647807aa7205a5140f02")
                .then(
                    (response) => {
                        let users = response.data;
                        let found = false;
                    }
                )
        },
        addUser() {
            this.axios.post("http://37.77.104.246/api/jsonstorage/?id=0f6fb5a75e57647807aa7205a5140f02", {
                data: users
            })

        }
    }
}
</script>