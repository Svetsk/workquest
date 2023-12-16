<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  link: String,
  iconItem: String,
});
</script>

<template>
  <div>
    <div class="item__work">
      <div class="icon">
        <nuxt-img src="{{ iconItem }}" width="97px" height="97px" />
      </div>
      <div class="item__text">
        <p>{{ title }}</p>
        <p>{{ description }}</p>
      </div>
      <nuxt-link to="{{ link }}"> > </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  image{
    border-radius: 100px;
    background: #FF2D59;
  }
  .item__work{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 44px;
    padding: 44px;
    border: 1px solid;
    border-radius: 20px;
  }
  .item__text{
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    & p:nth-child(1){
      color: #000;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
    }
    & p:nth-child(2){
      color: #6B6B6B;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
    }
  }
</style>