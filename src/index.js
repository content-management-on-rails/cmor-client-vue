import Alert from "./components/Alert.vue";
import ContactForm from "./components/ContactForm.vue";
import LinkFooter from "./components/LinkFooter.vue";
export { Alert, ContactForm, LinkFooter };

export default {
  install(app, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    app.component("alert", Alert);
    app.component("contact-form", ContactForm);
    app.component("link-footer", LinkFooter);

    app.provide('cmorClient', {
      api: options.api
    })
  }
};
