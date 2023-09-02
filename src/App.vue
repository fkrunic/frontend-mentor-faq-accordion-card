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

  <!-- Center card on screen -->
  <div class="flex flex-col justify-center items-center min-h-screen">

    <!-- Pseudo-container for anchoring floating box on desktop -->
    <div class="relative">

        <!-- Floating box on desktop -->
        <img 
          class="hidden desktop:inline-block w-[11rem] -left-[5.3rem] top-[9rem] absolute z-10" 
          src="./assets/img/illustration-box-desktop.svg" 
          alt="box"
          >

        <!-- Card -->
        <div
          class="
            relative 
            flex flex-col desktop:flex-row desktop:justify-end 
            desktop:px-20
            desktop:w-[50rem] 
            w-[21rem]
            desktop:overflow-hidden
            pb-12  
            items-center 
            bg-white 
            rounded-3xl 
            shadow-2xl
            z-0
            ">

          <!-- Woman Online Desktop -->
          <img class="hidden absolute desktop:block w-[28rem] -left-20 top-[1rem] z-10" src="./assets/img/illustration-woman-online-desktop.svg" alt="woman-online">
          <img class="hidden absolute desktop:block w-[50rem] -left-[27rem] -top-[15rem] z-0" src="./assets/img/bg-pattern-desktop.svg" alt="background">

          <!-- Woman Online Mobile -->
          <div class="absolute desktop:hidden flex flex-col gap-4 -top-28">
            <img class="w-60" src="./assets/img/illustration-woman-online-mobile.svg" alt="women-online-mobile">
            <img class="-mt-24" src="./assets/img/bg-pattern-mobile.svg" alt="background-shadow">
          </div>      

          <!-- FAQ Section -->
          <div class="flex flex-col items-center desktop:items-start gap-4">
            <p class="font-bold text-3xl pt-32 desktop:pt-10 text-dark-blue">FAQ</p>
            <Accordion v-for="fq of faqs" :key="fq.question" :question="fq.question" :answer="fq.answer"></Accordion>
          </div>
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