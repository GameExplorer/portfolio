<script>
export default {
  name: 'Performance',
  data() {
    return {
      cpuUsage: 0,
      memoryUsage: 0,
      interval: null
    };
  },
  computed: {
    totalMemory() {
      return '32,768 K';
    },
    availableMemory() {
      return '24,123 K';
    },
    kernelMemory() {
      return '8,645 K';
    },
    pageFile() {
      return {
        total: '512,000 K',
        available: '486,344 K',
          usage: Math.floor(Math.random() * 30) + 10,
      };
    }
  },
  methods: {
    getCPUUsage() {
      return Math.floor(Math.random() * 100);
    },
    getMemoryUsage() {
      return Math.floor(Math.random() * 80) + 20; 
    },
    updateMetrics() {
      this.cpuUsage = this.getCPUUsage();
      this.memoryUsage = this.getMemoryUsage();
    }
  },
  mounted() {
    this.updateMetrics();
    this.interval = setInterval(this.updateMetrics, 1500);
  },
  unmounted() {
    clearInterval(this.interval);
  }
};
</script>


<template>
  <div class="">
    <div class="grid grid-cols-2 gap-2">
      <div class="border-2 border-t-white border-l-white border-r-black border-b-black p-4">
        <h3 class="text-lg mb-4">CPU Usage</h3>
        <div class="meter-container relative h-6 bg-black border border-gray-600 mb-2">
          <div 
            class="h-full bg-[#000080] text-base"
            :style="{ width: `${cpuUsage}%` }"
          ></div>
          <div class="absolute top-0 left-0 w-full text-center text-white">
            {{ cpuUsage }}%
          </div>
        </div>
        <div class="text-sm mt-4">
          <p>Speed: 66 MHz</p>
          <p>Type: x86 Family 5</p>
        </div>
      </div>
      <div class="border-2 border-t-white border-l-white border-r-black border-b-black p-4">
        <h3 class="text-lg mb-4">Memory Usage</h3>
        <div class="relative h-6 bg-black border border-gray-600 mb-2">
          <div 
            class="meter-fill h-full bg-[#008000]"
            :style="{ width: `${memoryUsage}%` }"
          ></div>
          <div class="absolute top-0 left-0 w-full text-center text-white">
            {{ memoryUsage }}%
          </div>
        </div>
        <div class="text-sm mt-4 space-y-1">
          <p>Total Physical Memory: {{ totalMemory }}</p>
          <p>Available Physical Memory: {{ availableMemory }}</p>
          <p>Kernel Memory: {{ kernelMemory }}</p>
        </div>
      </div>
      <div class="border-2 border-t-white border-l-white border-r-black border-b-black p-4">
        <h3 class="text-lg mb-4">Page File Usage</h3>
        <div class="relative h-6 bg-black border border-gray-600 mb-2">
          <div 
            class="h-full bg-[#800080]"
            :style="{ width: `${pageFile.usage}%` }"
          ></div>
          <div class="absolute top-0 left-0 w-full text-center text-white">
            {{ pageFile.usage }}%
          </div>
        </div>
        <div class="text-sm mt-4 space-y-1">
          <p>Total Page File: {{ pageFile.total }}</p>
          <p>Available Page File: {{ pageFile.available }}</p>
        </div>
      </div>
    </div>
  </div>
</template>