<template>
  <Milkdown />
</template>

<script setup lang="ts">
import { Milkdown, useEditor } from '@milkdown/vue'
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { commonmark } from '@milkdown/preset-commonmark'
import { history } from '@milkdown/plugin-history'
import { tooltipFactory } from '@milkdown/plugin-tooltip'
import Tooltip from '@/components/ToolTip/index.vue'
import { usePluginViewFactory } from '@prosemirror-adapter/vue'

const markdown = `# Milkdown Vue Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vue**.`
const tooltip = tooltipFactory('Text')
const pluginViewFactory = usePluginViewFactory()

useEditor((root) => {
  return Editor.make()
    .config(nord)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
      ctx.set(tooltip.key, {
        view: pluginViewFactory({
          component: Tooltip,
        }),
      })
    })
    .use(commonmark)
    .use(history)
    .use(tooltip)
})
</script>
