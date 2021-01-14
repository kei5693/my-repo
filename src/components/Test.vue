<template>
  <div>
    <form v-on:submit="submitForm">
      <div>
        <label for="username">ID: </label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="username_input"
          v-bind:class="{ error: !isUsernameValid }"
        />
      </div>
      <div>
        <label for="password">PW: </label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit" :disabled="!isUsernameValid">로그인</button>
    </form>
    <!-- <p v-if="!isUsernameValid">올바르지 않은 이메일</p> -->
    <!-- <p v-if="isUsernameValid">이메일 형식이 맞습니다.</p> -->
    <TostPopup v-bind:open="isSuccess" v-on:close="closePopup" />
  </div>
</template>

<script>
import TostPopup from "@/components/TostPopup.vue";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default {
  components: {
    TostPopup,
  },
  data() {
    return {
      username: "",
      password: "",
      isError: false,
      isSuccess: false,
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log("submitted");
      this.isSuccess = true;
      //this.initForm();
      //this.isError = true;
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
    closePopup() {
      this.isSuccess = false;
    },
  },
};
</script>

<style scoped>
form input {
  outline: none;
  border: 1px solid #000;
}
input.error {
  border: 1px solid red;
}
form button {
  margin-top: 10px;
}
</style>
