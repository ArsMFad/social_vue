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

            <v-text-field
                label="Input name"
                v-model="name"
                outlined
            ></v-text-field>

            <v-text-field
                label="Input website"
                v-model="website"
                outlined
            ></v-text-field>

            <v-text-field
                label="Input email"
                v-model="email"
                outlined
            ></v-text-field>

            <v-text-field
                label="Input city"
                v-model="city"
                outlined
            ></v-text-field>

            <v-text-field
                label="Input company"
                v-model="company"
                outlined
            ></v-text-field>


            <v-text-field
                label="Input link on photo"
                v-model="photo"
                outlined
            ></v-text-field>

            <v-btn @click="register">
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
        addUser(us) {
            this.axios.put("http://37.77.104.246/api/jsonstorage/?id=100f06bcf58ff825f404e5aa25033588", {
                data: us
            })
        },
        register() {
            this.axios.get("http://37.77.104.246/api/jsonstorage/?id=100f06bcf58ff825f404e5aa25033588")
                .then(
                    (response) => {
                        let users = response.data.data;
                        console.log(users);
                        if (this.name == '') {
                            this.name = 'Daniil';
                        }
                        if (this.website == '') {
                            this.website = 'ya_gospodin.svobodnix.mislei';
                        }
                        if (this.email == '') {
                            this.email = 'Ya_genii@plamennix.rechei';
                        }
                        if (this.city == '') {
                            this.city = 'Sankt-Peterburg';
                        }
                        if (this.company == '') {
                            this.company = 'None';
                        }
                        if (this.photo == '') {
                            this.photo = 'https://prodetlit.ru/images/thumb/8/8c/Daniil-Harms.jpg/250px-Daniil-Harms.jpg';
                        }
                        let new_one = {'login': this.login, 'password': this.password, 'name': this.name, 'website': this.website, 'email': this.email, 'city': this.city, 'company': this.company, 'photo': this.photo};
                        users.push(new_one);
                        console.log(users);
                        this.addUser(users);
                    }
                )
        }
    }
}
</script>