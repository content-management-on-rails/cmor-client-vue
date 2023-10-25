<template>
  <div :class="`alert alert-${color} ion-padding`">
    <slot />
  </div>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: 'primary'
  }
});
</script>
<style scoped>
.alert-primary {
  background-color: var(--ion-color-primary-tint);
  color: var(--ion-color-primary-contrast);
}

.alert-secondary {
  background-color: var(--ion-color-secondary-tint);
  color: var(--ion-color-secondary-contrast);
}

.alert-tertiary {
  background-color: var(--ion-color-tertiary-tint);
  color: var(--ion-color-tertiary-contrast);
}

.alert-success {
  background-color: var(--ion-color-success-tint);
  color: var(--ion-color-success-contrast);
}

.alert-danger {
  background-color: var(--ion-color-danger-tint);
  color: var(--ion-color-danger-contrast);
}

.alert-warning {
  background-color: var(--ion-color-warning-tint);
  color: var(--ion-color-warning-contrast);
}

.alert-dark {
  background-color: var(--ion-color-dark-tint);
  color: var(--ion-color-dark-contrast);
}

.alert-medium {
  background-color: var(--ion-color-medium-tint);
  color: var(--ion-color-medium-contrast);
}

.alert-light {
  background-color: var(--ion-color-light-tint);
  color: var(--ion-color-light-contrast);
}
</style>
