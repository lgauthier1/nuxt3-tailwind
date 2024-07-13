<!-- components/PdfActionBar.vue -->
<template>
  <div class="action-bar fixed top-4 right-4 flex gap-4 z-50 bg-red">
    <UButton
      icon="i-heroicons-home"
      size="sm"
      color="primary"
      variant="solid"
      :trailing="false"
      to="/"
    />
    <UButton
      icon="i-heroicons-printer"
      size="sm"
      color="primary"
      variant="solid"
      :trailing="false"
      @click="printPage"
    />
  </div>
</template>

<script setup>
const printPage = () => {
  window.print()
}
</script>

<style scoped>
@media print {
  .action-bar {
    display: none;
  }
}
</style>
