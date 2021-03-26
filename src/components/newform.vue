<template>
  <div id="b02">
    
    <h1> Enter details of new user</h1>
    <form >
      
      <div>
        <label>First Name</label><br />
        <input
          required
          type="text"
          name="firstName"
          id="firstname"
          v-model="firstname"
        />
      </div>
      <div>
        <label>Last Name</label><br />
        <input
          required
          type="text"
          name="lastname"
          id="lastname"
          v-model="lastname"
        />
      </div>
      <div>
        <label>Email</label><br />
        <input required type="text" name="email" id="email" v-model="email" />
      </div>
      <br>
    
    
    
    
         <span class="form-action-buttons">
          <button type="button" @click="addUser()" id="s02">Submit</button>
           
         </span>
      
   

      
       <span>
        <router-link  :to="{name:'user'}" ><button id="s03" >Cancel</button></router-link></span>
      
  </form> 
  </div>
</template>

<script>
export default {
  name: "newform",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    addUser() {
      console.log("in method");
  
      //e.preventDefault();
      
      let newUser = {
      
        id: Date.now(),
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        
      };

  
      this.firstname = "";
      this.lastname = "";
      this.email = "";

      this.$router.push({ name:"usernew",params:{newUser:newUser,mode:"add"}});
      
    },
  },
};
</script>

<style scoped>
input[type="text"] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#b01{
  margin-left: 30px;
}
#s03{
  background: #d9d9d9;
   border: 1px solid black;
   padding: 5px 9px;
  
   cursor: pointer;

  margin-left: 20px;
}
#s02{
   background: #d9d9d9;
   border: 1px solid black;
   padding: 5px 9px;
  
   cursor: pointer;
  
   margin:5px;

}

  #b02{
    text-align: center;
    border: 1px solid black;
    padding: 10px;
    width:50%;
    padding-bottom: 20px;
    margin:auto;
    margin-top:4%;
    color:black;
}
</style>
