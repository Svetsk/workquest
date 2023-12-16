<script setup lang="ts">

</script>

<template>
  <div class="banner">
    <div class="banner__left">
      <h1>Найдите стажировку<br>в <span>крупную компанию</span><br>Получите работу <span>мечты</span></h1>
      <p>We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
      <div>
        <nuxt-link to="/">
          Получить предложение >
        </nuxt-link>
      </div>
    </div>
    <div>
      <nuxt-img src="/image/bunner.png" width="650px" height="550px"/>
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped>
  .banner{
    padding-top: 113px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .banner__left {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    & a {
      color: #FFF;
      font-size: 16px;
      font-weight: 600;
      line-height: 26px; /* 162.5% */
      border-radius: 12px;
      background: #4C40F7;
      padding: 19px;
    }
  }
  h1{
    color: #111029;
    font-size: 56px;
    font-weight: 600;
    line-height: 72px; /* 128.571% */
    letter-spacing: -0.4px;
    margin: 0;
    & span{
      color: #FF6800;
    }
  }
  p{
    color: #6B6B6B;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px; /* 177.778% */
    width: 365px;
    margin: 0;
    padding-bottom: 24px;
  }
</style>