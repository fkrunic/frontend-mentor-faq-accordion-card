<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ question: string, answer: string }>()
const toggled = ref(false)

function toggleAccordion() {
  toggled.value = !toggled.value
}

</script>

<template>
  <div class="flex flex-col cursor-pointer gap-2" @click="toggleAccordion">
    <p>{{ question }}</p>
    <p v-if="toggled">{{ answer }}</p>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
