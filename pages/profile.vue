<template>
  <div>
    <pre v-if="user && !errors">
            {{ user }}
        </pre
    >
    <div class="" v-else>
      <pre>
            {{ errors?.message }}
            {{ errors?.statusCode }}
            {{ errors?.statusMessage }}
        </pre
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { H3Error } from "h3";
const user = ref<Object | null>(null);
const cookie = useCookie("jwt-token");
const errors = ref<H3Error | null>(null);
try {
  const { data, error } = await useFetch("http://localhost:5281/api/Auth/user/check", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: cookie.value ? `Bearer ${cookie.value}` : "",
      //   Bearer: cookie.value ? cookie.value : "",
    },
  });
  if (error.value) {
    throw error.value;
  }

  console.log(data.value);
  if (data.value) {
    user.value = data.value;
  }
} catch (error) {
  console.log("Error", error);
  errors.value = error as H3Error;
}
// const sub = async () => {

// };
// onMounted(async () => {
//   await sub();
// });
</script>

<style lang="scss" scoped></style>
