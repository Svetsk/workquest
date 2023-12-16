<script setup lang="ts">
  import {$fetch} from "ofetch";

  const state = reactive({
    login: 'qwe1',
    pass: '12345qwerty',
    last: 0,
    first:'alex',
    middle: 'alex',
    gender:'alex',
    dataBirth:'2023-12-16'
  })

  const sub = async () => {
    const data = await $fetch ("http://localhost:5281/api/Auth/user/create", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // Bearer:
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjhmNjEyYmQ3LWM1OTAtNDMwMy05NDZjLTU0MTU0MjZlMzJlNSIsIkVudGl0eSI6IlVzZXIiLCJSb2xlIjoiR3Vlc3QiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjhmNjEyYmQ3LWM1OTAtNDMwMy05NDZjLTU0MTU0MjZlMzJlNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiI4ZjYxMmJkNy1jNTkwLTQzMDMtOTQ2Yy01NDE1NDI2ZTMyZTUiLCJleHAiOjE3MzM2Mzk1NTYsImlzcyI6IkZyYXVkQ2hlY2suQXV0aCIsImF1ZCI6IkZyYXVkQ2hlY2suU2VydmljZSJ9.cgh1U_NawZmhMCEAjPayp3BlZDTZIRZmfI3xukXSX-Y",
      },
    });

    if (data) {
      console.log(data);
    }
  };


</script>

<template>
  <form @submit.prevent="sub" class="flex flex-col gap-0.5 w-[400px]">
    <input v-model="state.last" class="border-amber-300 border-2" type="text">
    <input v-model="state.first" class="border-amber-300 border-2" type="text">
    <input v-model="state.middle" class="border-amber-300 border-2" type="text">
    <input v-model="state.gender" class="border-amber-300 border-2" type="text">
    <input v-model="state.dataBirth" class="border-amber-300 border-2" type="date">
    <input v-model="state.login" class="border-amber-300 border-2" type="text">
    <input v-model="state.pass" class="border-amber-300 border-2" type="text">
    <input class="border-amber-300 border-2" type="text">
    <button class="bg-amber-300">submit</button>
  </form>
</template>

<style scoped>

</style>