import Alert from "./Alert.vue";
import ContactForm from "./ContactForm.vue";
import LinkFooter from "./LinkFooter.vue";

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

export { Alert, ContactForm, LinkFooter };
