<template>
  
  <div id="b01">
   
   <h1>{{msg | to-uppercase}}</h1>
   
   <div v-for="user in user" :key="user.id">
      <user v-bind:user="user" v-on:del-user="deleteUser" />
      <br />
   </div>

    <div>
       
      <router-link  :to="{name:'new'}"   >
             
           <md-button class="md-primary md-raised "> ADD MORE USERS HERE
           </md-button>  
          
           
      </router-link>
      
      
    </div>
     
   </div>

</template>

<script>

//import newform from "./newform.vue";
import user from "./user.vue";

export default {
  name: "list",
  data() {
    return {
      addmore: false,
      msg:"Current user are",
      addmsg:"i am extra msg",
      user: [
        {
          id: 1,
          firstname: "Yashi",
          lastname: "Jain",
          email: "jainnyashi@gmail.com",
        },
        {
          id: 2,
          firstname: "Nidhi",
          lastname: "Jain",
          email: "nidhijain@gmail.com",
        },
        {
          id: 3,
          firstname: "harsh",
          lastname: "Jain",
          email: "harshjain@gmail.com",
        },
      ],
    };
  },
  

  
  
  mounted(){
   if(this.$route.params.mode == "add")
   {
     console.log("i am in if loop");
     this.addUser(this.$route.params.newUser);
   }
  
    
  },
  created(){
  
   if(this.$route.params.mode == "edit"){
      console.log("i am in else loop");
      this.updateUser(this.$route.params.newUser);
   }
   //this.addUser(this.$route.params.newUser);
},
  components: {
    user,

  },
 

  methods: {
   
    addUser(newUser) {
      //console.log("in list add user");
     
      this.user.push(newUser);
     
    },
    deleteUser(id) {
      this.user = this.user.filter((user) => user.id !== id);
    },

    updateUser(updateduser){

      // console.log(updateduser);
      // console.log(this.user);
      //var user1= this.user.filter((user) => user.id == x.id);

      var index = this.user.findIndex(z => z.id == updateduser.id);
      //console.log("index is",index);
      if (index !== -1) {
      this.user[index] = updateduser;
    
         }
     
    },
  
    cancelform(){
       this.addmore = false;
    }
  }
  
};
</script>

<style scoped>
  #t01{
  
   background: #d9d9d9;
   border: 1px solid black;
  padding: 5px 9px;
  cursor: pointer;
  
  }

  #b01{
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



