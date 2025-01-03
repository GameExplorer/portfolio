<script>
import happyMessage from "./HappyMessage.vue";
export default {
  name: "Taskbar",
  components: {
    happyMessage,
  },
  props: {
    openApps: Array,
  },
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      isWindowOpen: false,
      openStart: false,
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const options = { hour: "2-digit", minute: "2-digit", hour12: false };
      this.currentTime = new Date().toLocaleTimeString("en-US", options);
    },

    getAppIcon(appName) {
      const icons = {
        Portfolio: "/portfolio_icon.png",
        Credits: "/notepad.png",
        "System Information": "/task_manager.png",
      };
      return icons[appName] || "/portfolio_icon.png";
    },

    closeWindow() {
      this.isWindowOpen = false;
    },

    openWindow() {
      this.isWindowOpen = true;
    },

    toggleStart() {
      this.openStart = !this.openStart;
    },

    resetPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.taskbar {
  font-family: "Microsoft Sans Serif", "Windows-Regular", sans-serif;
  background-color: #c7c9c8;
  border-top: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
  border-bottom: 2px solid #7a7a7a;
  border-right: 2px solid #7a7a7a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #7a7a7a;
}

.taskbar-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0;
  list-style: none;
}

.taskbar-left {
  display: flex;
  gap: 8px;
  align-items: center;
}

.taskbar-right {
  display: flex;
  gap: 0.75em;
  align-items: center;
  margin-left: auto;
  margin-right: 0.75em;
}

.start-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  font-weight: bold;
  background-color: #c7c9c8;
  border: 3px solid #2a2a2a;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  box-shadow: inset -1px -1px 1px #2a2a2a, inset 1px 1px 1px #fff;
  cursor: pointer;
}

.start-button:hover {
  border-top-color: #292929;
  border-left-color: #292929;
  border-bottom-color: #ffffff;
  border-right-color: #ffffff;
}

.start-icon {
  width: 16px;
  height: 16px;
}

.taskbar-icon {
  padding: 0.25rem 1.2rem;
  font-size: 0.75rem;
  background-color: #c7c9c8;
  border: 2px solid #2a2a2a;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #2a2a2a;
}

.taskbar-icon:hover {
  border-top-color: #7a7a7a;
  border-left-color: #7a7a7a;
  border-bottom-color: #ffffff;
  border-right-color: #ffffff;
}

.taskbar-clock .clock {
  padding: 0.3rem 0.7rem;
  border: 2px solid #2a2a2a;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #2a2a2a;
}

.window {
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

.title-bar {
  position: relative;
  width: 100%;
}

.window-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 8px;
}

.start-menu {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 32em;
  height: 42em;
  margin-bottom: 6px;
  display: flex;
  background-color: #c7c9c8;
  border: 2px solid #2a2a2a;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #2a2a2a;
}

.user-icon {
  width: 2rem;
  height: 2rem;
}

.menu-divider {
  height: 2px;
  background-color: #7a7a7a;
  margin: 2px 0;
}

.menu-items {
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1rem;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #000080;
  color: white;
  cursor: pointer;
}

.menu-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.resetBtn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 100% 0.5rem 0.5rem 0.1rem;
  position: absolute;
  bottom: 0;
  left: 15%;
}

.resetBtn button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.divide-line {
  display: inline-block;
  height: full;
  width: 0.2rem;
  background: linear-gradient(to right, #000000 50%, #ffffff 50%);
  margin: 0 0.1rem;
  vertical-align: middle;
}

img:hover {
  cursor: url("/cursor_hover.png"), pointer;
}
</style>

<template>
  <div class="taskbar">
    <ul class="taskbar-content">
      <div class="taskbar-left">
        <li class="relative">
          <button class="start-button" @click="toggleStart">
            <img src="/start_icon.png" alt="start icon" class="start-icon" />
            Start
          </button>
          <div v-if="openStart" class="start-menu">
            <div
              class="w-[3.5rem] h-full flex items-center justify-center bg-gradient-to-t from-blue-700 from-20% to-[#000080] to-60%"
            >
              <span
                class="absolute uppercase text-2xl font-bold tracking-[1rem] whitespace-nowrap left-[30px] bottom-4 -rotate-90 origin-left text-white"
              >
                Petar
              </span>
            </div>
            <div class="menu-divider"></div>
            <div class="menu-items">
              <div class="menu-item">
                <img
                  src="/directory_control_panel.png"
                  alt="Programs"
                  class="menu-icon"
                />
                <span class="text-xl">Made</span>
              </div>
              <div class="menu-item">
                <img
                  src="/directory_fonts.png"
                  alt="Documents"
                  class="menu-icon"
                />
                <span class="text-xl">By</span>
              </div>
              <div class="menu-item">
                <img
                  src="/directory_closed.png"
                  alt="Settings"
                  class="menu-icon"
                />
                <span class="text-xl">Petar</span>
              </div>
            </div>
            <div class="resetBtn text-lg" @click="resetPage">
              <button class="px-2">
                <img src="/reset_monitor.png" alt="Reset page" class="" /> Reset
              </button>
            </div>
          </div>
        </li>
        <div class="divide-line">&nbsp;</div>
        <li class="taskbar-icons">
          <span
            v-for="(app, index) in openApps"
            :key="index"
            class="taskbar-icon inline-flex items-center mx-1"
          >
            <div
              class="flex flex-grow items-center cursor-pointer font-bold"
              @click="$emit('focus', app)"
            >
              <img :src="getAppIcon(app)" alt="App Icon" class="w-4 h-4 mr-2" />
              {{ app }}
            </div>
            <span
              @click.stop="$emit('close', app)"
              class="ml-4 text-red-500 cursor-pointer"
              aria-label="Close"
            >
              X
            </span>
          </span>
        </li>
        <li>
          <div class="justify-items-end">
            <img
              src="/portfolio_icon.png"
              alt="clock icon"
              class="w-4 h-4 hover:cursor-pointer"
              @click="$emit('open', 'Portfolio')"
            />
          </div>
        </li>
      </div>
      <div class="taskbar-right">
        <li class="">EN</li>
        <li>
          <div class="hover:cursor-pointer">
            <img
              src="/info.png"
              alt="clock icon"
              class="w-6 h-6"
              @click="openWindow"
            />
            <div v-if="isWindowOpen" class="window">
              <happyMessage @close-window="closeWindow"></happyMessage>
            </div>
          </div>
        </li>
      </div>
      <li class="taskbar-clock text-base text-center bg-[#c7c9c8]">
        <div class="clock">{{ currentTime }}</div>
      </li>
    </ul>
  </div>
</template>
