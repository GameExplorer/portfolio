<script>
export default {
  name: "SysInfo",

  data() {
    return {
      currentTime: "",
      timeOpened: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      browserInfo: this.getBrowserInfo(), // Initialize with method
      stats: {
        cpu: 0,
        memory: 0,
        disk: 0,
        network: 0,
      },
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
    getBrowserInfo() {
      const userAgent = navigator.userAgent;
      let browserName = "Unknown";
      let browserEngine = "Unknown";
      let browserVersion = "Unknown";
      let platform = navigator.platform;

      // Firefox
      if (userAgent.includes("Firefox")) {
        browserName = "Firefox";
        browserEngine = "Gecko";
        const match = userAgent.match(/Firefox\/([0-9.]+)/);
        if (match) browserVersion = match[1];
      }
      // Chrome
      else if (userAgent.includes("Chrome")) {
        browserName = "Chrome";
        browserEngine = "Blink";
        const match = userAgent.match(/Chrome\/([0-9.]+)/);
        if (match) browserVersion = match[1];
      }
      // Safari
      else if (userAgent.includes("Safari")) {
        browserName = "Safari";
        browserEngine = "WebKit";
        const match = userAgent.match(/Version\/([0-9.]+)/);
        if (match) browserVersion = match[1];
      }
      // Edge
      else if (userAgent.includes("Edg")) {
        browserName = "Edge";
        browserEngine = "Blink";
        const match = userAgent.match(/Edg\/([0-9.]+)/);
        if (match) browserVersion = match[1];
      }

      // Get platform in a more reliable way
      let detectedPlatform = platform;
      if (userAgent.includes("Windows")) detectedPlatform = "Windows";
      else if (userAgent.includes("Mac")) detectedPlatform = "macOS";
      else if (userAgent.includes("Linux")) detectedPlatform = "Linux";

      return {
        name: browserName,
        engine: browserEngine,
        version: browserVersion,
        screenSize: `${window.screen.width} x ${window.screen.height}`,
        platform: detectedPlatform,
        language: navigator.language,
      };
    },

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
  },
};
</script>

<template>
  <div class="text-2xl uppercase text-center">Browser Information</div>
  <div class="text-left border-2 border-black bg-white p-2">
    <p class="pb-2">Current Time: {{ currentTime }}</p>
    <p class="pb-2">Time opened: {{ timeOpened }}</p>
    <p class="pb-2">Browser: {{ browserInfo.name }}</p>
    <p class="pb-2">Browser Engine: {{ browserInfo.engine }}</p>
    <p class="pb-2">Browser Version: {{ browserInfo.version }}</p>
    <p class="pb-2">Platform: {{ browserInfo.platform }}</p>
    <p class="pb-2">Screen size: {{ browserInfo.screenSize }}</p>
    <p class="pb-2">Language: {{ browserInfo.language }}</p>
  </div>
</template>
