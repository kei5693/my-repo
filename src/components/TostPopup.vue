<template>
  <div class="toast" v-bind:class="{ animation: open }">로그인 완료</div>
</template>

<script>
let timer;
export default {
  props: ["open"],
  watch: {
    // open에 새로운 값이 들어올 때
    open(newValue) {
      if (newValue) {
        console.log("팝업 열기");
        clearTimeout(timer);
        timer = setTimeout(() => this.$emit("close"), 2000);
      }
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: #000;
  color: #fff;
  transition: bottom 0.3s linear;
}
.animation {
  bottom: 5%;
}
</style>
