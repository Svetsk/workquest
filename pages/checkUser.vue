<template>
    <div>
        <div class="form">
        <form @submit.prevent="sub" class="flex flex-col gap-0.5 w-[400px]">
            <button class="bg-amber-300">submit</button>
        </form>
    <div class="errors" v-if="errors">
      <pre>{{ errors }}</pre>
    </div>
  </div>
    </div>
</template>

<script setup>
import { useFetch } from "#imports";
const errors = ref(null);
const cookie = useCookie("jwt-token");
const sub = async () => {
  try {
    const { data, error } = await useFetch("http://localhost:5281/api/Auth/user/check", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Bearer:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6ImEzYmQ1MmI3LWJhODMtNDI2ZS05MTkxLTc3MmVkOWMyYWFlZiIsIkVudGl0eSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImEzYmQ1MmI3LWJhODMtNDI2ZS05MTkxLTc3MmVkOWMyYWFlZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhM2JkNTJiNy1iYTgzLTQyNmUtOTE5MS03NzJlZDljMmFhZWYiLCJleHAiOjE3MzQzNDQzNTQsImlzcyI6IkZyYXVkQ2hlY2suQXV0aCIsImF1ZCI6IkZyYXVkQ2hlY2suU2VydmljZSJ9.XYlCoiLVeAPdQ1mLtEAT-HYlQDx0XqLdm0SOIvyWS98",
      },
    });
    if (error.value) {
      throw error.value;
    }
    console.log(data.value)
  } catch (error) {
    console.log(error);
    errors.value = error;
  }

};
</script>

<style lang="scss" scoped>

</style>