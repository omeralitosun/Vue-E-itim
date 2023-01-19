<template>
  <form @submit.prevent="handleSumbit">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: "http://localhost:3000/project/"+ this.id
        }
    },
    mounted(){
        fetch(this.uri)
        .then(res=>res.json())
        .then(data => {
            this.title = data.title;
            this.details= data.details;
        });
    },
    methods:{
        handleSumbit(){
            let project = {
                title: this.title,
                details: this.details
            }
            fetch(this.uri, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(project)
            })
            .then(()=>this.$router.push('/'))
            .catch(err=> console.log(err))
        }
    }
}
</script>

<style>
form{
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label{
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input{
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea{
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  resize: none;
}
form button{
  display: block;
  margin: 20px auto 0;
  background: #76dd78;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
}
form button:hover{
  background: #4c964d
}
</style>