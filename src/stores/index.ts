import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// pinia persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export * from "./modules/settings";
export * from "./modules/tags-view";
export * from "./modules/app";

export default pinia;
