<template >
  <div >
    <br>
    <div style="text-align:center">
      <div>{{ user.firstname }}</div>
      <div>{{ user.lastname }}</div>
      <div>{{ user.email }}</div>
      
      
      <router-link :to="{name:'edit',params:{id:user.id,user:user}}">
        <button   id="s01">Edit</button>
      </router-link>

      <button @click="$emit('del-user', user.id)"  id="s01">Delete</button>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "user",

   props: {
    
      user: {
        type: Object,
      },
    
   },

  data() {
    return {
      //flag: false,
    
    };
  },

  methods: {
  
  }  
};
</script>

<style scope>

.update {
  background: blue;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
  margin-left: 1%;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

#s01{
   background: #d9d9d9;
   border: 1px solid black;
  padding: 5px 9px;
  border-radius: 10%;
  cursor: pointer;
  
  margin:10px;
}

input[type="text"] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

h2{
  color:red;
}





</style>
