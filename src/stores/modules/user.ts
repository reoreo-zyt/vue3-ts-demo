import { defineStore } from "pinia";
import { type UserState } from "../../stores/interface";
import piniaPersistConfig from "../../stores/helper/persist";

export const useUserStore = defineStore({
  id: "vue3-user",
  state: (): UserState => ({
    token: "",
    userInfo: { name: "vue3" }
  }),
  getters: {},
  actions: {
    // Set Token
    setToken(token: string) {
      this.token = token;
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    }
  },
  persist: piniaPersistConfig("vue3-user")
});
