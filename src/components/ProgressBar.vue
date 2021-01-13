<template lang="">
  <div class="progress"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.progress {
  width: 0%;
  height: 20px;
  background: lime;
  animation: loading 1s linear forwards;
}

@keyframes loading {
  0% {
    width: 0%;
  }
  50% {
    width: 90%;
  }
  100% {
    width: 100%;
  }
}
</style>
