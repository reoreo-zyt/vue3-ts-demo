/**
 * @name createVitePlugins
 * @description 压缩html，提供ejs模板语法
 */

import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export const ConfigUnocssPlugin = () => {
  return Unocss({
    presets: [presetUno(), presetAttributify()],
  })
}
