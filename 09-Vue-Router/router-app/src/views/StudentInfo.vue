<template>
  <div>
    <h3>Öğrenci Bilgi Sayfası</h3>
    <p>Öğrenci ID: {{ studentId }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            studentId: this.$route.params.id
        }
    },
}
</script>

<style>

</style>