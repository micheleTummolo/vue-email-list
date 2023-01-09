const { createApp } = Vue

createApp({
    data() {
        return {
            email: [],
        }
    },

    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.email.push(result.data.response)
                })
            }
            console.log(this.email)
        })
    }
}).mount('#app')