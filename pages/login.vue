<script setup>
import { useFetch } from "#imports";
const state = reactive({
  login: "qwe1111",
  password: "12345qwerty",
  repeatPassword: "12345qwerty",
  lastName: "Lexx",
  firstName: "Lexx",
  middleName: "Lexx",
  gender: 0,
  dateBirth: null,
});

const sub = async () => {
  const { data, error } = await useFetch("http://localhost:5281/api/Auth/user/create", {
    method: "POST",
    body: JSON.stringify(state),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // Bearer:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjhmNjEyYmQ3LWM1OTAtNDMwMy05NDZjLTU0MTU0MjZlMzJlNSIsIkVudGl0eSI6IlVzZXIiLCJSb2xlIjoiR3Vlc3QiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmNjEyYmQ3LWM1OTAtNDMwMy05NDZjLTU0MTU0MjZlMzJlNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiI4ZjYxMmJkNy1jNTkwLTQzMDMtOTQ2Yy01NDE1NDI2ZTMyZTUiLCJleHAiOjE3MzM2Mzk1NTYsImlzcyI6IkZyYXVkQ2hlY2suQXV0aCIsImF1ZCI6IkZyYXVkQ2hlY2suU2VydmljZSJ9.cgh1U_NawZmhMCEAjPayp3BlZDTZIRZmfI3xukXSX-Y",
    },
  });
  console.log(data.value.data);
  if (error.value?.data?.errors) {
    console.log(error.value?.data?.errors);
  }
};
</script>

<template>
  <form @submit.prevent="sub" class="flex flex-col gap-0.5 w-[400px]">
    <input v-model="state.login" class="border-amber-300 border-2" type="text" />

    <input v-model="state.lastName" class="border-amber-300 border-2" type="text" />
    <input v-model="state.firstName" class="border-amber-300 border-2" type="text" />
    <input v-model="state.middleName" class="border-amber-300 border-2" type="text" />
    <input v-model="state.gender" class="border-amber-300 border-2" type="text" />
    <input v-model="state.dateBirth" class="border-amber-300 border-2" type="date" />
    <input v-model="state.password" class="border-amber-300 border-2" type="text" />
    <input v-model="state.repeatPassword" class="border-amber-300 border-2" type="text" />
    <button class="bg-amber-300">submit</button>
  </form>
</template>

<style scoped></style>
