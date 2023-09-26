<template>
  <div class="gallery">
    <ion-row>
      <ion-col>
        <h2>{{ gallery.attributes.name }}</h2>
        <div v-if="gallery.attributes.description != null" v-html="gallery.attributes.description"></div>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12" size-md="6" size-lg="3" class="d-flex" v-for="(picture, index) in gallery.attributes.picture_details" :key="picture">
        <ion-card @click="() => showImg(index)">
          <ion-img :src="picture.attributes.asset_url" />
        </ion-card>
      </ion-col>
    </ion-row>
    <vue-easy-lightbox
        :visible="visible"
        :imgs="gallery.attributes.picture_details.map(picture => picture.attributes.asset_url)"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { IonCol, IonRow, IonCard, IonImg } from '@ionic/vue'
import VueEasyLightbox from 'vue-easy-lightbox'

defineProps({
  gallery: {
    type: Object,
    required: true
  }
})
const visible = ref(false)
const index = ref(0)

const showImg = (idx) => {
  index.value = idx
  visible.value = true
}

const handleHide = () => {
  visible.value = false
}
</script>
<style scoped>
ion-img::part(image) {
  object-fit: cover;
  object-position: center;
  aspect-ratio: 4/3;
  cursor: pointer;
}

/* on hover images add zoom effect with css transform */
ion-img::part(image):hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
}

/* on mouse out reset the transform */
ion-img::part(image):not(:hover) {
  transform: scale(1);
  transition: transform 0.5s ease;
}
</style>
