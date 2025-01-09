import { useAuthStore } from "@/stores/modules/auth";

/**
 * @description 页面按钮权限
 * */
export const useAuthButtons = () => {
  const route = useRoute();

  const BUTTONS = computed(() => {
    // * 在方法内部声明防止出现错误 getActivePinia() was called but there was no active Pinia.
    const authStore = useAuthStore();
    const authButtons = authStore.authButtonListGet[route.name as string] || [];
    let currentPageAuthButton: { [key: string]: boolean } = {};
    authButtons.forEach((item: any) => (currentPageAuthButton[item] = true));
    return currentPageAuthButton;
  });

  return {
    BUTTONS
  };
};
