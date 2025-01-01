<script>
import Taskbar from "./taskbar.vue";
import Portfolio from "./Portfolio.vue";
import MenuItems from "./MenuItems.vue";
import Credits from "./CreditsWindow.vue";

export default {
  name: "Desktop",
  components: {
    Taskbar,
    Portfolio,
    MenuItems,
    Credits,
  },
  data() {
    return {
      icons: [
        {
          name: "Portfolio",
          iconImage: "/portfolio_icon.png",
          iconAlt: "portfolio icon",
          url: "none",
          top: 50,
          left: 50,
        },
        {
          name: "Petar.fun",
          iconImage: "/petar_fun.png",
          iconAlt: "petar.fun icon",
          url: "https://petar.fun",
          top: 50,
          left: 150,
        },
        {
          name: "Credits",
          iconImage: "/notepad.png",
          iconAlt: "Credits",
          url: "none",
          top: 150,
          left: 50,
        },
        {
          name: "System Information",
          iconImage: "/task_manager.png",
          iconAlt: "Task Manager",
          url: "none",
          top: 150,
          left: 120,
        },
      ],
      dragOffset: { x: 0, y: 0 },
      windowStates: {
        Portfolio: { isOpen: false },
        Credits: { isOpen: false },
        "System Information": { isOpen: false },
      },
      openApps: [],
      randomOpenTime: 0,
      cursor: "default",
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
      const taskbar = this.$refs.taskbar.getBoundingClientRect();

      const iconElement = event.target.closest(".icon");
      const iconHeight = iconElement.offsetHeight;
      const iconWidth = iconElement.offsetWidth;

      const newTop = event.clientY - this.dragOffset.y;
      const newLeft = event.clientX - this.dragOffset.x;

      if (
        newTop + iconHeight > taskbar.top &&
        newTop < taskbar.bottom &&
        newLeft + iconWidth > taskbar.left &&
        newLeft < taskbar.right
      ) {
        console.log("Icon drag blocked to taskbar area.");
        return;
      }

      this.icons[index].top = newTop;
      this.icons[index].left = newLeft;
    },
    openWindow(appName) {
      const app = this.icons.find((icon) => icon.name === appName);

      if (!app) return;

      if (app.url === "none") {
        this.cursor = "progress";
        this.randomOpenTime = Math.floor(Math.random() * 1500);

        setTimeout(() => {
          // Initialize the window state if it doesn't exist
          if (!this.windowStates[appName]) {
            this.$set(this.windowStates, appName, { isOpen: false });
          }

          // Set the window state to open
          this.windowStates[appName].isOpen = true;

          this.cursor = "default";
          if (!this.openApps.includes(appName)) {
            this.openApps.push(appName);
          }
        }, this.randomOpenTime);
      } else {
        window.open(app.url, "_blank");
      }
    },
    closeWindow(appName) {
      if (this.windowStates[appName]) {
        this.windowStates[appName].isOpen = false;
      }
      this.openApps = this.openApps.filter((app) => app !== appName);
    },

    minimizeWindow(appName) {
      if (this.windowStates[appName]) {
        this.windowStates[appName].isOpen = false;
      }
    },

    focusApp(appName) {
      if (this.openApps.includes(appName) && this.windowStates[appName]) {
        this.windowStates[appName].isOpen = true;
      }
    },
  },
};
</script>

<style>
.desktop {
  cursor: default;
  background-image: url("/desktopBackground.webp");
  background-repeat: no-repeat;
  background-size: cover;
}

.desktop[data-cursor="progress"] {
  cursor: url("/windows-98-hourglass.png"), progress !important;
}

.desktop[data-cursor="default"] {
  cursor: url("/cursor.png"), default !important;
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

.desktop[data-cursor="pointer"] {
  cursor: url("/cursor_hover.png"), pointer;
}
</style>

<template>
  <div class="desktop h-screen flex flex-col" :data-cursor="cursor">
    <div
      class="flex-grow relative overflow-hidden"
      @dragover.prevent
      @drop.prevent
    >
      <!-- Icons -->
      <div
        v-for="(icon, index) in icons"
        :key="index"
        class="cursor-pointer absolute icon"
        :style="{ top: `${icon.top}px`, left: `${icon.left}px` }"
        draggable="true"
        @dragstart="startDrag($event, index)"
        @dragend="endDrag($event, index)"
        @click="openWindow(icon.name)"
      >
        <img
          :src="icon.iconImage"
          :alt="icon.iconAlt"
          class="w-12 h-12 m-auto icons"
        />
        <p class="text-xs text-center text-white bg-gray-500 mt-1">
          {{ icon.name }}
        </p>
      </div>

      <!-- Windows -->
      <template v-for="app in openApps" :key="app">
        <div v-if="windowStates[app]?.isOpen" class="window fixed">
          <!-- Portfolio Window -->
          <template v-if="app === 'Portfolio'">
            <div class="title-bar">
              <div class="title-bar-text text-2xl uppercase inline-flex">
                <img src="/portfolio_icon.png" alt="page icon" class="pr-2" />
                Portfolio
              </div>
              <div class="title-bar-controls p-2">
                <button
                  aria-label="Minimize"
                  class="bg-gray-300"
                  @click="minimizeWindow(app)"
                ></button>
                <button
                  aria-label="Close"
                  class="bg-gray-300"
                  @click="closeWindow(app)"
                >
                  X
                </button>
              </div>
            </div>
            <MenuItems />
            <div class="window-content p-4">
              <Portfolio ref="portfolio" />
            </div>
          </template>

          <!-- Credits Window -->
          <template v-if="app === 'Credits'">
            <div class="title-bar">
              <div class="title-bar-text text-2xl uppercase inline-flex">
                <img src="/notepad.png" alt="page icon" class="pr-2" />
                Credits
              </div>
              <div class="title-bar-controls p-2">
                <button
                  aria-label="Minimize"
                  class="bg-gray-300"
                  @click="minimizeWindow(app)"
                ></button>
                <button
                  aria-label="Close"
                  class="bg-gray-300"
                  @click="closeWindow(app)"
                >
                  X
                </button>
              </div>
            </div>
            <Credits />
          </template>

          <!-- System Information Window -->
          <template v-if="app === 'System Information'">
            <div class="title-bar">
              <div class="title-bar-text text-2xl uppercase inline-flex">
                <img src="/task_manager.png" alt="page icon" class="pr-2" />
                System Information
              </div>
              <div class="title-bar-controls p-2">
                <button
                  aria-label="Minimize"
                  class="bg-gray-300"
                  @click="minimizeWindow(app)"
                ></button>
                <button
                  aria-label="Close"
                  class="bg-gray-300"
                  @click="closeWindow(app)"
                >
                  X
                </button>
              </div>
            </div>
            <!-- Add your System Information component here -->
          </template>
        </div>
      </template>
    </div>

    <div ref="taskbar" class="taskbar fixed w-full bottom-0 right-0 z-20">
      <Taskbar
        :openApps="openApps"
        @close="closeWindow"
        @focus="focusApp"
        @open="openWindow"
      />
    </div>
  </div>
</template>
