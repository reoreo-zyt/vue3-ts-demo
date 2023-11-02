<template>
  <MilkdownProvider>
    <ProsemirrorAdapterProvider>
      <ArticleEditor />
    </ProsemirrorAdapterProvider>
  </MilkdownProvider>
</template>

<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/vue'
</script>
