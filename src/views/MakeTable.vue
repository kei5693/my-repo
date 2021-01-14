<template>
  <div>
    <ul>
      <li>입력1 <input type="text" v-model="value1"></li>
      <li>입력2 <input type="text" v-model="value2"></li>
      <li>입력3 <input type="text" v-model="value3"></li>
    </ul>
    <button type="button" @click="inputName">입력</button>
    <p>result : <span>{{ this.userNames.join(',') }}</span></p>
  </div>
</template>

<script>

export default {
  data(){
    return{
      value1 : '',
      value2 : '',
      value3 : '',
      userNames : [],
    }
  },
  methods: {
    inputName(){
      this.userNames = [],
      this.userNames.push(this.value1, this.value2, this.value3);
      console.log(this.userNames);
    }
  },
}
</script>

<style>
  ul {padding:0;}
  li {list-style: none;}
  li + li {margin-top:10px;}
</style>