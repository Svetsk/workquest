<template>
  <p class="subtitle">{{ subTitle }}</p>
  <p class="title">{{ title }}</p>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String,
});
</script>

<style lang="scss" scoped>
.subtitle{
  color: #FF2D59;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px; /* 140% */
}
.title{
  color: #111029;
  text-align: center;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px; /* 133.333% */
  letter-spacing: -0.1px;
  padding-bottom: 60px;
}
</style>