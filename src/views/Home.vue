<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <p>{{msg}}</p> -->
    <Test />
    <TostPopup />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'
import TostPopup from '@/components/TostPopup.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
    Test,
    TostPopup
  },
  data(){
    return {
      
    }
  }
}
</script>
