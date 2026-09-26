import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./app.vue";

// Importá acá tus estilos globales si tenés (ej. './assets/main.css')

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
