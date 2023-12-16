<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div>
      <nuxt-link to="/"><nuxt-img src="/image/logo.svg" width="64px" height="64px" /></nuxt-link>
    </div>
    <div>
      <nav>
        <ul>
          <li class="active"><nuxt-link to="/" >Главная</nuxt-link></li>
          <li><nuxt-link to="/" >Вакансии</nuxt-link></li>
          <li><nuxt-link to="/" >Резюме</nuxt-link></li>
          <li><nuxt-link to="/" >Карьерная траектория</nuxt-link></li>
          <li><nuxt-link to="/" >О нас</nuxt-link></li>
        </ul>
      </nav>
    </div>
    <div class="button">
      <nuxt-link to="/login" >Регистрация/Вход</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
    & nav ul{
      display: flex;
      column-gap: 82px;
      & li a{
        color: #6B6B6B;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px; /* 140% */
      }
    }
  }
  .active a{
    color: #4C40F7 !important;
  }
  .button a{
    color: #FFF;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px; /* 162.5% */
    border-radius: 12px;
    background: #4C40F7;
    display: flex;
    padding: 12px;
    justify-content: center;
    align-items: center;
  }
</style>