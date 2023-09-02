<script setup lang="ts">
import Accordion from './components/Accordion.vue';

interface FAQ {
  question: string,
  answer: string
};

const faqs: Array<FAQ> = [
  {
    question: "How many team members can I invite?",
    answer: "Up to five team members can be associated to one account."
  },
  {
    question: "What is the maximum file upload size?",
    answer: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    question: "How do I reset my password?",
    answer: "Before logging in, there is a button to 'Reset Password'."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "Go to your account settings, select 'Subscriptions', and click 'Cancel'."
  },
  {
    question: "Do you provide additional support?",
    answer: "Our Premium membership includes a dedicated support professional. To learn more, visit our website!"
  }
];
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-col justify-start items-center min-h-screen">
    <div
      class="relative flex flex-col desktop:flex-row desktop:justify-between desktop:px-20 m-[24em] pb-12 w-[21rem] desktop:w-[50rem] items-center bg-white rounded-3xl shadow-2xl">

      <div class="absolute flex flex-col gap-4 -top-28">
        <img class="w-60" src="./assets/img/illustration-woman-online-mobile.svg" alt="women-online-mobile">
        <img class="-mt-24" src="./assets/img/bg-pattern-mobile.svg" alt="background-shadow">
      </div>

      <div class="flex flex-col items-center desktop:items-start gap-4">
        <p class="font-bold text-3xl pt-32 desktop:pt-10 text-dark-blue">FAQ</p>
        <Accordion v-for="fq of faqs" :key="fq.question" :question="fq.question" :answer="fq.answer"></Accordion>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      bodyClass: 'font-kumbh-sans bg-gradient-to-b from-soft-violet to-soft-blue'
    };
  },
  mounted() {
    document.body.className = this.bodyClass;
  },
  beforeDestroy() {
    // Reset the class when the component is destroyed
    document.body.className = '';
  }
};
</script>