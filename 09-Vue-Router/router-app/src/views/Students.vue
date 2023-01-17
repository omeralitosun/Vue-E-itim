<template>
  <div>
    <h1>Öğrenciler</h1>
    <div v-for="student in students" :key="student.id">
        <router-link :to="{name:'studentsInfo',params:{id:student.id}}">{{ student.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            students: [
                {id:1, name:'Ömer', not:55},
                {id:2, name:'Ali', not:65},
                {id:3, name:'Tosun', not:75},
            ]
        }
    },
}
</script>

<style>

</style>