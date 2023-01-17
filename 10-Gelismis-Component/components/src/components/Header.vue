<template>
  <div>
    <slot></slot>
    <hr>
    <input type="text" v-model="name">
    <input type="text" v-model="surName">
    <p>{{ nameSurname }}</p>
    <hr>
    <input type="number" v-model="number1"> <br>
    <input type="number" v-model="number2"> <br>
    <input type="number" v-model="total">
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'',
            surName:'',
            number1:0,
            number2:0,
            total:0
        }
    },
    watch:{
        number1(newValue, oldValue){
            console.log("Değerler",oldValue,newValue);
            this.total = parseInt(this.number1) + parseInt(this.number2);
        },
        number2(newValue, oldValue){
            console.log("Değerler",oldValue,newValue);
            this.total = parseInt(this.number1) + parseInt(this.number2);
        }
    },
    computed: {
        nameSurname(){
            return this.name + ' ' + this.surName
        }
    }
}
</script>

<style>

</style>