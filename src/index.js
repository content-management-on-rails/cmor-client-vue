import Alert from "./components/Alert.vue";
import ContactForm from "./components/ContactForm.vue";
import Gallery from "./components/Gallery.vue";
import Galleries from "./components/Galleries.vue";
import LinkFooter from "./components/LinkFooter.vue";
import De from "./locales/de.json";
import En from "./locales/en.json";

const Locales = {
  de: De,
  en: En
};

export { Alert, ContactForm, Gallery, Galleries, LinkFooter, Locales };

export default {
  install(app, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    app.component("alert", Alert);
    app.component("contact-form", ContactForm);
    app.component("gallery", Gallery);
    app.component("galleries", Galleries);
    app.component("link-footer", LinkFooter);

    app.provide('cmorClient', {
      api: options.api
    })
  }
};
