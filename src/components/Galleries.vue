<template>
  <div class="galleries">
    <gallery :gallery="gallery" v-for="gallery in galleries" v-bind:key="gallery.id" />
  </div>
</template>
<script setup>
import { inject, ref } from 'vue';
import { IonRow } from '@ionic/vue';

const galleries = ref([]);

const cmorClient = inject('cmorClient')

const fetchGalleries = (host, apiToken) => {
  fetch(`${host}/api/galleries/galleries.json?populate[]=picture_details`,
  {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    }
  })
  .then(response => response.json())
  .then(data => {
    galleries.value = data.data;
  });
}

fetchGalleries(cmorClient.api.baseUrl, cmorClient.api.token)
</script>
<style scoped>
</style>
