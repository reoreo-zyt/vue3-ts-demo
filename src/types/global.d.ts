declare namespace Menu {
  interface MenuOptions {
    path: string;
    name: string;
    component?: string | (() => Promise<unknown>);
    redirect?: string;
    meta: MetaProps;
    children?: MenuOptions[];
  }
  interface MetaProps {
    icon: string;
    title: string;
    activeMenu?: string;
    isLink?: string;
    isHide: boolean;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
  }
}

/* FileType */
declare namespace File {
  type ImageMimeType =
    | "image/apng"
    | "image/bmp"
    | "image/gif"
    | "image/jpeg"
    | "image/pjpeg"
    | "image/png"
    | "image/svg+xml"
    | "image/tiff"
    | "image/webp"
    | "image/x-icon";

  type ExcelMimeType = "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
}

/**
 * 平台的名称、版本、运行所需的`node`版本、依赖、构建时间的类型提示
 */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    engines: {
      node: string;
    };
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
  };
  buildTimestamp: number;
};

interface AppSettings {
  /** 系统标题 */
  title: string;
  /** 系统版本 */
  version: string;
  /** 是否显示设置 */
  showSettings: boolean;
  /** 是否显示多标签导航 */
  tagsView: boolean;
  /** 是否显示侧边栏Logo */
  sidebarLogo: boolean;
  /** 导航栏布局(left|top|mix) */
  layout: string;
  /** 主题颜色 */
  themeColor: string;
  /** 主题模式(dark|light) */
  theme: string;
  /** 布局大小(default |large |small) */
  size: string;
  /** 语言( zh-cn| en) */
  language: string;
  /** 是否开启水印 */
  watermarkEnabled: boolean;
  /** 水印内容 */
  watermarkContent: string;
}

/**
 * 页签对象
 */
interface TagView {
  /** 页签名称 */
  name: string;
  /** 页签标题 */
  title: string;
  /** 页签路由路径 */
  path: string;
  /** 页签路由完整路径 */
  fullPath: string;
  /** 页签图标 */
  icon?: string;
  /** 是否固定页签 */
  affix?: boolean;
  /** 是否开启缓存 */
  keepAlive?: boolean;
  /** 路由查询参数 */
  query?: any;
}
