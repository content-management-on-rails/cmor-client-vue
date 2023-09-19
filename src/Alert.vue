<template>
  <ion-card :color="cardStyle == 'background' ? color : null">
    <slot />
  </ion-card>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  cardStyle: {
    type: String,
    default: 'background'
  }
})
</script>
<style scoped>
ion-card {
  padding: 1rem;
  margin-left: 0;
  margin-right: 0;
}
</style>
