<script>
export default {
  name: "Taskbar",
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
    };
  },

  mounted() {
    this.getCurrentTime();
  },

  methods: {
    getCurrentTime() {
      const options = {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      };
      const now = new Date();
      this.currentTime = now.toLocaleTimeString("en-US", options);
      setInterval(() => {
        this.currentTime = new Date().toLocaleTimeString("en-US", options);
      }, 1000);
    },
  },
};
</script>

<template>
  <div class="bg-[#c7c9c8] mt-auto">
    <ul class="list-none flex justify-between items-center p-2 w-full">
      <div class="flex gap-4">
        <li>
          <button class="flex items-center pr-4 mt-1 text-2xl font-bold gap-2">
            <img src="../assets/vue.svg" alt="start icon" class="" />
            Start
          </button>
        </li>
      </div>
      <li class="px-2 text-xl border-l-4 border-t-4 border-[#99999a]">
        {{ currentTime }}
    </li>
    </ul>
  </div>
</template>
