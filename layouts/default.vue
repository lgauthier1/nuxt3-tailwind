<!-- layouts/default.vue -->
<template>
  <div class="flex h-screen">
    <NavLeftDashboard class="w-72" />
    <div class="flex-grow">
      <NavTop :title="title" />
      <RouterView class="p-4" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const title = ref('')

const updateTitle = () => {
  const pageTitle = route.meta.title || route.name || 'Dashboard'
  title.value = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
}

watchEffect(updateTitle)
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
