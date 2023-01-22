<template>
  <div class="home">
    <ThemeNav @themeChange="themeChange($event)"></ThemeNav>
    <FilterNav @filterChange="current = $event" :current = "current"></FilterNav>
    <div v-if="projects.length">
      <div class="project-div" v-for="project in filteredProject" :key="project.id">
        <SingleProject 
        :darkTheme="darkTheme"
        :project="project" 
        @delete="handleDelete" 
        @complete="handleComplete"> 
        </SingleProject>   
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue"
import FilterNav from "../components/FilterNav.vue"
import ThemeNav from "../components/ThemeNav.vue"
import { process } from "ipaddr.js"

export default {
  name: 'Home',
  components: {
    SingleProject,
    FilterNav,
    ThemeNav
  },
  data() {
    return {
      projects: [],
      current: 'all',
      darkTheme: false 
    }
  },
  mounted(){
    console.log(process.env.VUE_APP_BASE_API_URL);
    fetch('http://localhost:3000/project')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))    
  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    handleComplete(id){
      let p = this.projects.find(project => project.id === id)
      p.complete = !p.complete;
    },
    themeChange(e){
      this.darkTheme=e;
      this.$emit('themeChange', e);
    }
  },
  computed:{
    filteredProject(){
      if (this.current === 'completed'){
        return this.projects.filter(project => project.complete)
      } else if(this.current === 'ongoing'){
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  }
}
</script>
