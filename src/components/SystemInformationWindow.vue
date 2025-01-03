<script>
import WindowMenuItems from "./WindowMenuItems.vue";
import Applications from "./SystemInformation/Applications.vue";

export default {
  name: "SystemInformationWindow",
    components: {
        WindowMenuItems,
        Applications,
    },
  data() {
    return {
      currentTime: "",
      timeOpened: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      browserInfo: {
        name: navigator.userAgentData?.brands[0]?.brand,
        engine: navigator.userAgentData?.brands[0]?.brand,
        version: navigator.userAgentData?.brands[0]?.version,
        screenSize: `${window.screen.width} x ${window.screen.height}`,
        platform: navigator.userAgentData?.platform,
        language: navigator.language,
      },
      stats: {
        cpu: 0,
        memory: 0,
        disk: 0,
        network: 0,
        },
      currentTab: 0,
      isContentVisible: true,
      tabs: [
        { name: "Applications", component: "Applications" },
        { name: "Processes", component: "Processes" },
        { name: "Performance", component: "Performance" },
          { name: "Networking", component: "Networking" },
        {name: "System Information", component:"SysInfo"},
      ],
    };
  },

  mounted() {
    this.updateTime();
    this.timer = setInterval(this.updateTime, 1000);
    this.interval = setInterval(this.updateStats, 1500);
  },

  beforeUnmount() {
    clearInterval(this.timer);
    clearInterval(this.interval);
  },

  methods: {
    updateTime() {
      const options = { hour: "2-digit", minute: "2-digit", hour12: false };
      this.currentTime = new Date().toLocaleTimeString("en-US", options);
    },
    getRandomPercentage(min = 0, max = 100) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    updateStats() {
      this.stats.cpu = this.getRandomPercentage();
      this.stats.memory = this.getRandomPercentage();
      this.stats.disk = this.getRandomPercentage();
      this.stats.network = this.getRandomPercentage();
      },
     setCurrentTab(index) {
      this.currentTab = index;
    },
  },
};
</script>

<style>
.memory-bar {
  height: 20px;
  width: 100%;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 5px;
}

.memory-fill {
  height: 100%;
  background-color: #4caf50; /* Green for memory fill */
  transition: width 0.3s ease-in-out; /* Smooth animation for the fill */
}
</style>

<template>
    <div class="menu-bar cursor-default">
    <WindowMenuItems />
  </div>
  <div class="window-content">
  <div class="content text-lg">
    <menu role="tablist" class="text-base z-10 flex justify-center items-center">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        role="tab"
        :aria-selected="currentTab === index"
      >
        <a href="#tabs" @click.prevent="setCurrentTab(index)">
          {{ tab.name }}
        </a>
      </li>
    </menu>
    <div class="" role="tabpanel">
      <div class="window-body">
        <component
          :is="tabs[currentTab].component"
          :key="refreshKey"
          v-if="isContentVisible"
          class=""
        ></component>
      </div>
    </div>
    </div>
    </div>
    <!--<div class="text-2xl uppercase text-center">System Information</div>
    <div class="text-left">
      <p class="border-b pb-2">Current Time: {{ currentTime }}</p>
      <p class="border-b pb-2">Time opened: {{ timeOpened }}</p>
      <p class="border-b pb-2">Browser: {{ browserInfo.name }}</p>
      <p class="border-b pb-2">Browser Engine: {{ browserInfo.engine }}</p>
      <p class="border-b pb-2">Browser Version: {{ browserInfo.version }}</p>
      <p class="border-b pb-2">Platform: {{ browserInfo.platform }}</p>
      <p class="border-b pb-2">Screen size: {{ browserInfo.screenSize }}</p>
      <p class="border-b pb-2">Language: {{ browserInfo.language }}</p>
    </div>
    <div>
    <div class="text-2xl uppercase text-center mt-4">System Simulation</div>
    <div class="text-left">
      <p class="border-b pb-2">CPU: {{ stats.cpu }}%</p>
      <p class="border-b pb-2">
        Memory: {{ stats.memory }}%
        <div class="memory-bar">
          <div class="memory-fill" :style="{ width: stats.memory + '%' }"></div>
        </div>
      </p>
      <p class="border-b pb-2">Disk: {{ stats.disk }}%</p>
      <p class="border-b pb-2">Network: {{ stats.network }}%</p>
    </div>
  </div>
  </div>
  </div>-->
</template>
