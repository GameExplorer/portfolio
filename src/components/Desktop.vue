<script>
import Taskbar from "./taskbar.vue";
import Portfolio from "./Portfolio.vue";
import MenuItems from "./MenuItems.vue";
import Credits from "./CreditsWindow.vue";
import SystemInformation from "./SystemInformationWindow.vue";

export default {
  name: "Desktop",
  components: {
    Taskbar,
    Portfolio,
    MenuItems,
    Credits,
    SystemInformation,
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
          name: "RateGP",
          iconImage: "RateGP_icon.png",
          iconAlt: "RateGP icon",
          url: "https://www.rategp.app/",
          top: 250,
          left: 50,
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
          iconAlt: "System Information",
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

      // Handle apps that should change URL
      const routeApps = {
        'Portfolio': '/portfolio',
        'System Information': '/system_information',
        'Credits': '/credits'
      };

      if (routeApps[appName]) {
        // Change the URL
        this.$router.push(routeApps[appName]);

        // Then open the window normally
        this.cursor = "progress";
        this.randomOpenTime = Math.floor(Math.random() * 1500);

        setTimeout(() => {
          if (!this.windowStates[appName]) {
            this.windowStates[appName] = { isOpen: false };
          }
          this.windowStates[appName].isOpen = true;
          this.cursor = "default";
          if (!this.openApps.includes(appName)) {
            this.openApps.push(appName);
          }
        }, this.randomOpenTime);
        return;
      }

      // Handle external URLs
      if (app.url !== "none") {
        window.open(app.url, "_blank");
        return;
      }

      // Handle other apps (if any)
      this.cursor = "progress";
      this.randomOpenTime = Math.floor(Math.random() * 1500);

      setTimeout(() => {
        if (!this.windowStates[appName]) {
          this.windowStates[appName] = { isOpen: false };
        }
        this.windowStates[appName].isOpen = true;
        this.cursor = "default";
        if (!this.openApps.includes(appName)) {
          this.openApps.push(appName);
        }
      }, this.randomOpenTime);
    },

    closeWindow(appName) {
      // Handle route-based apps
      const routeApps = ['Portfolio', 'System Information', 'Credits'];

      if (routeApps.includes(appName)) {
        // Change URL back to home
        this.$router.push('/');
        return;
      }

      if (this.windowStates[appName]) {
        this.windowStates[appName].isOpen = false;
      }
      this.openApps = this.openApps.filter((app) => app !== appName);
    },

    minimizeWindow(appName) {
      const routeApps = ['Portfolio', 'System Information', 'Credits'];

      if (routeApps.includes(appName)) {
        // Change URL back to home when minimizing
        this.$router.push('/');
        return;
      }

      if (this.windowStates[appName]) {
        this.windowStates[appName].isOpen = false;
      }
    },

    focusApp(appName) {
      if (this.openApps.includes(appName) && this.windowStates[appName]) {
        this.windowStates[appName].isOpen = true;
      }
    },
    handleEndTask(appName) {
      this.closeWindow(appName);
    },
    handleMoveForward() {
      if (this.$refs.portfolio) {
        this.$refs.portfolio.moveForward();
      }
    },
    handleMoveBackward() {
      if (this.$refs.portfolio) {
        this.$refs.portfolio.moveBackward();
      }
    },
    handleRefreshContent() {
      if (this.$refs.portfolio) {
        this.$refs.portfolio.refreshContent();
      }
    },

    handleRouteChange() {
      const routeToApp = {
        'Portfolio': 'Portfolio',
        'SystemInformation': 'System Information',
        'Credits': 'Credits'
      };

      const appName = routeToApp[this.$route.name];

      if (appName) {
        // Auto-open the window for this route
        if (!this.windowStates[appName]) {
          this.windowStates[appName] = { isOpen: false };
        }
        this.windowStates[appName].isOpen = true;
        if (!this.openApps.includes(appName)) {
          this.openApps.push(appName);
        }
      } else {
        // Close all windows when on home route
        Object.keys(this.windowStates).forEach(app => {
          this.windowStates[app].isOpen = false;
        });
        this.openApps = [];
      }
    }
  },
  mounted() {
    this.handleRouteChange();
  },

  watch: {
    '$route'() {
      this.handleRouteChange();
    }
  },
};
</script>

<style>
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

.creditsWindow {
  width: 400px;
  height: 300px;
  background-color: #c7c9c8;
  border: 3px solid #ffffff;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-bottom-color: #7a7a7a;
  border-right-color: #7a7a7a;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #7a7a7a;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.systemWindow {
 width: 100%;
  max-width: 720px;
  height: 90vh; /* Default height for mobile */
  max-height: 70%; /* Maximum height on larger screens */
  background-color: #c7c9c8;
  border: 3px solid #ffffff;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-bottom-color: #7a7a7a;
  border-right-color: #7a7a7a;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #7a7a7a;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div class="desktop h-screen flex flex-col" :data-cursor="cursor">
    <div class="flex-grow relative overflow-hidden" @dragover.prevent @drop.prevent>
      <div v-for="(icon, index) in icons" :key="index" class="cursor-pointer absolute icon"
        :style="{ top: `${icon.top}px`, left: `${icon.left}px` }" draggable="true" @dragstart="startDrag($event, index)"
        @dragend="endDrag($event, index)" @click="openWindow(icon.name)">
        <img :src="icon.iconImage" :alt="icon.iconAlt" class="w-12 h-12 m-auto icons" />
        <p class="text-xs text-center text-white bg-gray-500 mt-1">
          {{ icon.name }}
        </p>
      </div>
      <template v-for="app in openApps" :key="app">
        <div v-if="windowStates[app]?.isOpen" class="relative">
          <template v-if="app === 'Portfolio'">
            <div class="window">
              <div class="title-bar">
                <div class="title-bar-text text-2xl uppercase inline-flex">
                  <img src="/portfolio_icon.png" alt="page icon" class="pr-2" />
                  Portfolio
                </div>
                <div class="title-bar-controls p-2">
                  <button aria-label="Minimize" class="bg-gray-300" @click="minimizeWindow(app)"></button>
                  <button aria-label="Close" class="bg-gray-300" @click="closeWindow(app)">
                    X
                  </button>
                </div>
              </div>
              <MenuItems @move-forward="handleMoveForward" @move-backward="handleMoveBackward"
                @refresh-content="handleRefreshContent" />
              <div class="window-content p-4 h-screen">
                <Portfolio ref="portfolio" />
              </div>
            </div>
          </template>
          <template v-if="app === 'Credits'">
            <div class="window creditsWindow">
              <div class="title-bar">
                <div class="title-bar-text text-2xl inline-flex">
                  <img src="/notepad.png" alt="page icon" class="pr-2" />
                  Credits
                </div>
                <div class="title-bar-controls p-2">
                  <button aria-label="Minimize" class="bg-gray-300" @click="minimizeWindow(app)"></button>
                  <button aria-label="Close" class="bg-gray-300" @click="closeWindow(app)">
                    X
                  </button>
                </div>
              </div>
              <div class="window-content p-2 bg-gray-300">
                <Credits />
              </div>
            </div>
          </template>
          <template v-if="app === 'System Information'">
            <div class="window systemWindow">
              <div class="title-bar">
                <div class="title-bar-text text-xl inline-flex">
                  <img src="/task_manager.png" alt="page icon" class="pr-2" />
                  System Information
                </div>
                <div class="title-bar-controls p-2">
                  <button aria-label="Minimize" class="bg-gray-300" @click="minimizeWindow(app)"></button>
                  <button aria-label="Close" class="bg-gray-300" @click="closeWindow(app)">
                    X
                  </button>
                </div>
              </div>
              <div class="window-content p-2 bg-gray-300">
                <SystemInformation :openApps="openApps" @end-task="handleEndTask" />
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>

    <div ref="taskbar" class="taskbar fixed w-full bottom-0 right-0 z-20">
      <Taskbar :openApps="openApps" @close="closeWindow" @focus="focusApp" @open="openWindow" />
    </div>
  </div>
</template>
