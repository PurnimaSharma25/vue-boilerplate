<template>
 <div id="b03">
    <h1>Edit user details here</h1>
    
      <form >
        <div>
          
          <label>First Name</label><br />
          <input type="text"   v-model="user.firstname"  />
        </div>
        <div>
          <label>Last Name</label><br />
          <input type="text" v-model="user.lastname"  />
        </div>
        <div>
          <label>Email</label><br />
          <input type="text" v-model="user.email"  />
        </div>
        <br>
        <div class="form-action-buttons">
           <button id="c01" type="button" @click="updateUser(user)">Update</button>
        </div>
       </form>

   </div>    
</template>

<script>
export default {
  name: "edit",

  

  data() {
    return {
      //flag: false,
      user:{
      id:'',
      firstname: '',
      lastname: '',
      email: '',
      }
     
    
    };

  },
  mounted(){
     this.user=this.$route.params.user;
     
  },
  methods: {
   
    updateUser(user) {
      
     console.log("in update user",user);
     console.log("last name is",user.lastname);
     console.log(this.$route.params.user.lastname);

     this.$router.push({name:"user",params:{newUser:this.$route.params.user,mode:"edit"}});

    },
  }  
};
</script>

<style scope>

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

#b01{
  color:blue;
}

  #b03{
    text-align: center;
    border: 1px solid black;
    padding: 10px;
    width:50%;
    padding-bottom: 20px;
    margin:auto;
    margin-top:4%;
    color:black;
}
#c01{
  cursor: pointer;
}

</style>