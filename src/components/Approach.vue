<template>
  <div style="height:700px; width:100%">
    <l-map ref="map" :zoom="zoom" :center="latLng">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="latLng" ref="marker">
        <l-tooltip>
          <slot />
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";

import { onMounted, ref, watchEffect } from "vue";

const props = defineProps({
  latLng: {
    type: Array,
    required: true,
  },
  zoom: {
    type: Number,
    default: 50,
  },
});

// get marker
const marker = ref(null);

onMounted(() => {
  setTimeout(() => {
    marker.value.leafletObject.openTooltip();
  }, 1000);
});

// const zoom = 50
// const markerLatLng = [50.12438570049274, 8.701396219891874]
</script>
<style scoped></style>