<template>
    <div>
        <p>{{message | to-uupercase}} </p>
        </div>
</template>

<script>
export default {
    name:'filterexample',
    data(){
      return{
          message:'I am filter example',
      }
    }
};
</script>


in main.js 

 Vue.filter('to-uppercase',function(value){
     return value.toUpperCase();
 })
