const app = Vue.createApp({
    template: `
    <h2>Frameworkler</h2>
    <ul>
        <li v-for="frame in frameworks" class="list" :class="{selected:frame.selected}" @click="selectTag(frame)" v-show="!frame.selected">
        {{frame.name}}
        </li>
    </ul>
    <h3>Seçilen Frameworkler</h3>
    <ul>
        <li v-for="f in selectTags" class="list" :class="{selected:f.selected}" @click="selectTag(f)" v-show="f.selected">
        {{f.name}}
        </li>
    </ul>
    `,  
    data() {
        return {
            frameworks:[
                {name:"Vue", selected:true},
                {name:"React", selected:true},
                {name:"Svelte", selected:false},
                {name:"Angular", selected:false},
            ]
        }
    },
    methods: {
        selectTag(frame){
            frame.selected=!frame.selected; 
        }
    },
    computed:{
        selectTags(){
            console.log("Değişiklik oldu");
            return selecteds=this.frameworks.filter(i=>i.selected)
        }
    }
})

app.mount('#app')