import i18next from "i18next";
// 自动检测设备使用的语言，通过缓存里面的设备选择需要使用的语言
import LanguageDetector from "i18next-browser-languagedetector";
// 从后端加载资源
import HttpBackend from "i18next-http-backend";
// 处理韩语后缀的插件
import processor, {
  KoreanPostpositionProcessor,
} from "i18next-korean-postposition-processor";
import { namespaceMap } from "./utils-plugins";
import { toKebabCase } from "#utils/strings";
import pkg from "#package.json";

// 使用插件
i18next.use(LanguageDetector);
i18next.use(HttpBackend);
i18next.use(processor);
i18next.use(new KoreanPostpositionProcessor());

const nsEn: string[] = [];

await i18next.init({
  // 回退语言，决定于用户使用的语言
  // 当无法提供用户的首选语言时，可以指定另外一个语言作为备用
  fallbackLng: {
    "es-419": ["es-ES", "en"],
    default: ["en"],
  },
  // 支持的语言
  supportedLngs: [
    "en", // 英文
    "zh-Hans", // 中文
  ],
  // i18next-browser-languagedetector 插件参数
  detection: {
    lookupLocalStorage: "prLang", // 通过 localStorage 缓存选择的语言
  },
  // i18next-http-backend 插件参数
  backend: {
    // 资源加载的地址
    loadPath(lng: string, [ns]: string[]) {
      console.log(lng, ns, "==loadPath==");
      // Use namespace maps where required
      let fileName: string;
      if (namespaceMap[ns]) {
        fileName = namespaceMap[ns];
      } else if (ns.startsWith("mysteryEncounters/")) {
        fileName = toKebabCase(ns + "-dialogue"); // mystery-encounters/a-trainers-test-dialogue
      } else {
        fileName = toKebabCase(ns);
      }
      // ex: "./locales/en/move-anims"
      return `./locales/${lng}/${fileName}.json?v=${pkg.version}`;
    },
  },
  // 默认的命名空间字符串
  defaultNS: "menu",
  // TODO: 要加载的命名空间字符串或者数组。
  // 配合 vite 插件使用，需要实现按需加载
  ns: nsEn,
  // ns: ["menu", "egg"], // assigned with #app/plugins/vite/namespaces-i18n-plugin.ts
  interpolation: {
    // 默认情况下，值会被转义以缓解 XSS 攻击。
    // 关闭转义
    escapeValue: false,
  },
  debug: true, // 将信息级别记录到控制台输出。有助于查找加载失败的问题。
  postProcess: ["korean-postposition"],
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = i18next.t(
  "menu:loadingAsset",
  { assetName: "111" }
);

i18next.changeLanguage("en");
i18next.changeLanguage("zh-Hans");
