<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ question: string, answer: string }>()
const toggled = ref(false)

function toggleAccordion() {
  toggled.value = !toggled.value
}

</script>

<template>
  <div 
    class="flex flex-col w-72 cursor-pointer gap-2 py-3 border-b-2 border-b-light-grayish-blue"
    @click="toggleAccordion"
    >
    <div class="flex flex-row items-center justify-between">
      <p 
        class="text-sm text-semi-dark-grayish-blue"
        :class="toggled ? 'font-bold text-dark-blue' : ''" 
      >{{ question }}
      </p>
      <img class="h-2" src="../assets/img/icon-arrow-down.svg" alt="accordion-arrow">
    </div>
      <p class="text-xs text-semi-dark-grayish-blue pr-6" v-if="toggled">{{ answer }}</p>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
