<template>
    <div>
       
    </div>
</template>

<script>
import { bus } from "../main.js";
export default {
    name:"second",
    
    created(){
        // this.$root.$on('msgFromFirst' ,(arg1) => {
        //     console.log("data pass from first to second component by event bus : ",arg1);
        // });

        bus.$on('msgFromFirst' ,(data) => {
           
            console.log("data pass from first to second component by event bus : ",data);
        })
    }
   
}
</script>