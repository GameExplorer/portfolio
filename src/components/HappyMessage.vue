<script>
import WindowMenuItems from './WindowMenuItems.vue';

export default {
  name: "HappyMessage",
  components: {
    WindowMenuItems,
  },
  data() {
    return {
      rndMessage: "",
      messages: [
        {
          id: 0,
          message: "Feeling good, man",
        },
        {
          id: 1,
          message: "This was made in Vue",
        },
        {
          id: 2,
          message: "Go do some coding",
        },
        {
          id: 3,
          message: "Today is good day",
        },
        {
          id: 4,
          message: "So many books so little time",
        },
        {
          id: 5,
          message: "Failure is just another type of success. The wrong kind.",
        },
        {
          id: 6,
          message: "Gold is a great conductor",
        },
      ],
      
    };
  },
  emits: ["close-window"],
  methods: {
    closeWindow() {
      this.$emit("close-window");
    },
    randomMessage() {
      const index = Math.floor(Math.random() * this.messages.length);
      this.rndMessage = this.messages[index].message;
      console.log(this.rndMessage);
      return this.rndMessage;
    },
  },
};
</script>

<template>
  <div class="title-bar">
    <div class="title-bar-text text-xl inline-flex vertical-center">
      <img src="/info.png" alt="page icon" class="pr-2" />
      Happy Message
    </div>
    <div class="title-bar-controls">
      <button
        aria-label="Close"
        class="bg-gray-300 text-gray-700"
        @click="closeWindow"
      >
        X
      </button>
    </div>
  </div>
  <div class="menu-bar cursor-default">
    <WindowMenuItems />
  </div>
  <div class="window-content">
    <div class="content p-4 text-xl text-center bg-white h-screen border-2 border-gray-400">
      <p class="relative">
        {{ randomMessage() }}
      </p>
    </div>
  </div>
</template>
