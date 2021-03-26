
<template>
    <div>
        <button @click="sendToSecond">this is first component</button>
        <second />
    </div>
</template>

<script>
import { bus } from "../main.js";
import second from "./second.vue";

export default {

    name:"first",

    methods:{
        sendToSecond(){
            console.log("this is secondToSecond method");
            //this.$root.$emit('msgFromFirst','yashi');
           bus.$emit('msgFromFirst','yashi');
        }
    },
    components:{
        second
    }
   
}
</script>