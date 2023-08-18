<template>
  <ion-grid fixed>
    <ion-row>
      <ion-col v-for="(categories, id) in columns" :key="id" size="6" size-md="3">
        <ion-list>
          <template v-for="category in categories" :key="category.id">
            <h3>{{ category.attributes.name }}</h3>
            <ion-list>
              <ion-item v-for="link in category.attributes.links" :key="link.id" lines="none">
                <template v-if="useInternalNavigation(link.url)">
                  <ion-label><router-link :to="link.url" :title="link.description">{{ link.name }}</router-link></ion-label>
                </template>
                <template v-else>
                  <ion-label><a :href="link.url" :title="link.description" target="_blank">{{ link.name }}</a></ion-label>
                </template>
              </ion-item>
            </ion-list>
          </template>
        </ion-list>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script setup>
import { ref } from 'vue';

const useInternalNavigation = (url) => {
  if (url.startsWith('/')) {
    return true;
  } else {
    return false;
  }
}

const columns = ref({
  1: [],
  2: [],
  3: [],
  4: []
});

const host = import.meta.env.VITE_BACKEND_BASE_URL;
const apiToken = import.meta.env.VITE_BACKEND_API_TOKEN;

const fetchLinkCategories = async (host, apiToken) => {
  const response = await fetch(`${host}/api/links/categories.json?populate[]=links`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${apiToken}`
    }
  });
  const data = await response.json();
  /* assign categories to columns */
  data.data.forEach((category) => {
    columns.value[category.attributes.link_footer_column].push(category);
  });
}

fetchLinkCategories(host, apiToken);
</script>
<style scoped>
ion-list {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
