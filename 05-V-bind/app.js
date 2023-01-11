const app = Vue.createApp({
    template: `
    <div v-bind:style="style">
    Deneme yazısı    
    </div>
    `,  
    data() {
        return {
            style:"color:green"
        }
    },
    methods: {

    },
})

app.mount('#app')