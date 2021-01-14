<template>
  <div class="progress" v-bind:class="{ on: open }"></div>
</template>

<script>
  export default {
    props: {
      open: Boolean,
    },
  };
  </script>

<style scoped>
.progress {
  position: absolute;
  top:0;
  left:0;
  width: 0%;
  height: 10px;
  background: lime;
}
.progress.on {
  animation: loading 1s forwards cubic-bezier(0.65, 0.05, 0.36, 1) ;
}

@keyframes loading {
  0%    {width: 0%;}
  100%  {width: 100%;}
}
</style>
