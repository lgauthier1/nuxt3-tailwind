<template>
	<div class="w-full z-10 sticky top-0 text-indigo-600 border-b bg-white">
		<div class="p-4">
			<h1 class="text-xl font-bold">
				{{ title }}
			</h1>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

  <style scoped>

  </style>
