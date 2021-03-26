<template>
  <div id="i01">
    
    <h1> Welcome to app </h1>
  
    <router-link  :to="{name:'user'}" > View all users</router-link>
    <br>
    <br>
      <input type="text" v-model="dataUpdate">
      <br>
      <h1>Computed example: {{reversedMessage}}</h1>


    
   </div> 
</template>

<script>



export default{
beforeCreate(){
  console.log("before created");
},
created(){
  console.log("created");
},
beforeMount(){
  console.log("before Mount");
},
mounted(){
  console.log("mounted");
},
beforeUpdate (){
  console.log("before update ");
},
updated(){
  console.log("updated");
},
beforeDestroy (){
  console.log("before Destroy ");
},
destroyed(){
  console.log("destroyed");
},

data(){
  return{
     dataUpdate:"data",
  }
},
watch:{
  dataUpdate(value){
    console.log("in watch",value);
  }
},

computed: {
    reversedMessage: function () {
      return this.dataUpdate.split('').reverse().join('')
    }
  },
 

}

</script>
<style  scoped>
 
 #i01{
   text-align: center;
   margin-top:7%;
 }

</style>