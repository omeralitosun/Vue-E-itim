const app = Vue.createApp({
    template:`
    <h2>Bu ilk uygulamamız : {{baslik}}</h2>
    <h3>İçerik : {{içerik}}</h3>
    <p>Yorum Sayısı : {{yorumSayisi}}</p>
    <button v-on:click="ekle()">Ekle</button>
    <span>{{yazi}}</span>
    `,
    data() {
        return {
            baslik:'Vue Dersi',
            içerik:'Vue 3 Konuları',
            yorumSayisi: 0,
            yazi:"Yorum eklemek için tıklayın."
        }
    },
    methods: {
        ekle(){
            this.yorumSayisi++
            this.yazi=`${this.yorumSayisi} tane yorum girildi.`
        }
    },
})
    
app.mount('#app')