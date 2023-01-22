<template>
  <div>
    <Navbar/>
    <router-view @themeChange="changeTheme($event)"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default{
  components:{
    Navbar
  },
  data() {
    return {
      darkTheme:false,
    }
  },
  methods:{
    changeTheme(e){
      if(e){
        
      }
    }
  }
}
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
