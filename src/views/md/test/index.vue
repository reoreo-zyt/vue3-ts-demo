<template>
  <article>
    <markdown-content />
  </article>
</template>

<script lang="ts">
import { VueComponent } from '@/md/the-doc.md'

export default {
  components: {
    MarkdownContent: VueComponent,
  },
}
</script>
