<template>
  <form @submit.prevent="submit">
    <ion-item>
      <ion-label position="floating">Name</ion-label>
      <ion-input type="text" aria-label="Name" v-model="formData.name" :class="errorClassesFor('name')" :error-text="errorFor('name')"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">E-Mail</ion-label>
      <ion-input type="email" aria-label="E-Mail" v-model="formData.email" :class="errorClassesFor('email')" :error-text="errorFor('email')"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Telefonnummer</ion-label>
      <ion-input type="phone" aria-label="Phone" v-model="formData.phone" :class="errorClassesFor('phone')" :error-text="errorFor('phone')"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Nachricht</ion-label>
      <ion-textarea aria-label="Nachricht" v-model="formData.message" :class="errorClassesFor('message')" :error-text="errorFor('message')"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-checkbox v-model="formData.acceptTermsOfService">Hiermit erlaube ich dem Seitenbetreiber die Nutzung meiner Daten zwecks Beantwortung dieser Kontaktanfrage.</ion-checkbox>
      <ion-text color="danger" class="ion-padding-start" v-if="errorFor('accept_terms_of_service')">
        {{ errorFor('accept_terms_of_service') }}
      </ion-text>
    </ion-item>

    <ion-button type="submit" expand="block">{{ $t("cmorClientVue.contactForm.submitButtonText") }}</ion-button>

    <alert color="success" v-if="success === true">
      Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.
    </alert>

    <alert color="danger" v-if="success === false">
      Es ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Eingaben.
    </alert>

  </form>
</template>
<script setup>
import { inject, ref } from 'vue';
import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonText, IonCheckbox } from '@ionic/vue';

const cmorClient = inject('cmorClient');
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  acceptTermsOfService: false
});

const errors = ref({})

const success = ref(null);

const errorFor = (field) => {
  if(errors.value[field]) {
    return errors.value[field].join(', ');
  }
}

const errorClassesFor = (field) => {
  if(errors.value[field]) {
    return 'ion-invalid ion-dirty ion-touched';
  }
}

const submit = async (event) => {
  errors.value = {};
  success.value = null;
  const response = await fetch(`${cmorClient.api.baseUrl}/api/contact/contact_requests.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${cmorClient.api.token}`
    },
    body: JSON.stringify({
      contact_request: formData.value
    })
  });

  if(response.status === 422) {
    const data = await response.json();
    errors.value = data.errors;
    success.value = false;

  }

  if(response.status === 201) {
    const data = await response.json();
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
      acceptTermsOfService: false
    }
    success.value = true;
  }
}
</script>
<style scoped>
</style>
