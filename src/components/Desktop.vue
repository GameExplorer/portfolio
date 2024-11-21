<script>
import Taskbar from "./taskbar.vue";
import Portfolio from "./Portfolio.vue";

export default {
  name: "Desktop",
  components: {
    Taskbar,
    Portfolio,
  },
  data() {
    return {
      icons: [
        { top: 50, left: 50 }, // Initial position of the icon
      ],
      dragOffset: { x: 0, y: 0 },
      isWindowOpen: false,
    };
  },
  methods: {
    startDrag(event, index) {
      this.dragOffset = {
        x: event.clientX - this.icons[index].left,
        y: event.clientY - this.icons[index].top,
      };
    },
    endDrag(event, index) {
      this.icons[index].top = event.clientY - this.dragOffset.y;
      this.icons[index].left = event.clientX - this.dragOffset.x;
    },

    openWindow() {
      this.isWindowOpen = true; // Show the window
    },
    closeWindow() {
      this.isWindowOpen = false; // Hide the window
    },
  },
};
</script>

<style>
.desktop {
  cursor: default;
}

.window {
  width: 100%;
  height: 100%;
}

[aria-label="Close"] {
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1em;
}
</style>

<template>
  <div class="desktop bg-[#008080] h-screen flex flex-col">
    <div class="flex-grow relative" @dragover.prevent @drop.prevent>
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="icon cursor-pointer absolute"
        :style="{ top: icon.top + 'px', left: icon.left + 'px' }"
        draggable="true"
        @dragstart="startDrag($event, index)"
        @dragend="endDrag($event, index)"
        @click="openWindow"
      >
        <img src="../assets/vue.svg" alt="Website Icon" class="w-12 h-12" />
        <p class="text-xs text-center">Portfolio</p>
      </div>

      <div
        v-if="isWindowOpen"
        class="window absolute"
      >
        <div class="title-bar">
          <div class="title-bar-text text-3xl">A Title Bar</div>
          <div class="title-bar-controls p-2">
            <button aria-label="Close" @click="closeWindow">X</button>
          </div>
        </div>
        <div class="window-content p-4 overflow-auto">
          <Portfolio />
        </div>
      </div>
    </div>
    <Taskbar />
  </div>
</template>
