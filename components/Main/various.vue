<script setup lang="ts">

import Item from "~/components/Items/item.vue";
</script>

<template>
  <div class="various">
    <items-title sub-title="Our Services" title="The various services we provide to make your business more powerful" />
    <div class="various__item">
      <div class="various__item__row">
        <item title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly"  icon-item="~/image/Pen.png" />
        <item title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly"  />
        <item title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly"  />
      </div>
      <div class="various__item__row">
        <item title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly"  icon-item="~/image/Pen.png" />
        <item title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly"  />
        <item title="Ideate" description="We help you develop creative ideas so that your business can grow more rapidly"  />
      </div>
    </div>

  </div>
</template>

<style scoped>
  .various__item{
    display: flex;
    flex-direction: column;
    row-gap: 60px;
  }
  .various{
    padding: 200px 0;
  }
  .various__item__row{
    display: flex;
    column-gap: 32px;
  }
</style>