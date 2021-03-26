<template>
  <div>
    <h2> Enter details of new user</h2>
    <form @submit="addUser">
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
        <input  type="submit" value="Submit" />
      </span>
      
       <span>
        <button id="c01" @click="$emit('cancel-form')">Cancel</button></span>
      </form>
    
  </div>
</template>

<script>
export default {
  name: "adduser",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    addUser(e) {
      e.preventDefault();
      const newUser = {
        id: Date.now(),
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      };
      // Send up to parent
      this.$emit("add-user", newUser);

      this.firstname = "";
      this.lastname = "";
      this.email = "";
      
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
#c01{
  margin-left: 30px;
}
</style>
