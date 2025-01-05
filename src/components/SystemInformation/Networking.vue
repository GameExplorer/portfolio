<script>
export default {
  name: 'Networking',
  data() {
    return {
      bytesReceived: 0,
      bytesSent: 0,
      totalReceived: 0,
      totalSent: 0,
      interval: null
    };
  },
  methods: {
    getNetworkUsage() {
      return Math.floor(Math.random() * 1000); 
    },
    updateMetrics() {
      this.bytesReceived = this.getNetworkUsage();
      this.bytesSent = this.getNetworkUsage();
      this.totalReceived += this.bytesReceived;
      this.totalSent += this.bytesSent;
    },
    formatBytes(bytes) {
      return Math.floor(bytes / 1024);
    }
  },
  computed: {
    formattedTotalReceived() {
      return `${this.formatBytes(this.totalReceived)} MB`;
    },
    formattedTotalSent() {
      return `${this.formatBytes(this.totalSent)} MB`;
    }
  },
  mounted() {
    this.updateMetrics();
    this.interval = setInterval(this.updateMetrics, 1000);
  },
  unmounted() {
    clearInterval(this.interval);
  }
};
</script>

<template>
  <div class="w-full ">
    <div class="p-2">
      <h3 class="text-lg lg:text-xl mb-4 text-center uppercase">Network Adapter</h3>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p class="mb-2">Bytes Received/sec</p>
          <div class="meter-container relative h-6 bg-black border border-gray-600">
            <div 
              class="meter-fill h-full bg-[#000080]"
              :style="{ width: `${(bytesReceived / 1000) * 100}%` }"
            ></div>
            <div class="absolute top-0 left-0 w-full text-center text-white">
              {{ bytesReceived }} Kb/s
            </div>
          </div>
        </div>
        <div>
          <p class="mb-2">Bytes Sent/sec</p>
          <div class="meter-container relative h-6 bg-black border border-gray-600">
            <div 
              class="meter-fill h-full bg-[#008000]"
              :style="{ width: `${(bytesSent / 1000) * 100}%` }"
            ></div>
            <div class="absolute top-0 left-0 w-full text-center text-white">
              {{ bytesSent }} Kb/s
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="border-2 border-t-white border-l-white border-r-black border-b-black p-4">
          <h4 class="text-md mb-2">Network Statistics</h4>
          <div class="space-y-2 text-sm">
            <p>Adapter Type: Ethernet</p>
            <p>IP Address: 192.168.1.100</p>
            <p>Subnet Mask: 255.255.255.0</p>
            <p>Default Gateway: 192.168.1.1</p>
          </div>
        </div>
        <div class="border-2 border-t-white border-l-white border-r-black border-b-black p-4">
          <h4 class="text-md mb-2">Bytes Totals</h4>
          <div class="space-y-2 text-sm">
            <p>Total Received: {{ Math.floor(totalReceived / 1024) }} MB</p>
            <p>Total Sent: {{ Math.floor(totalSent / 1024) }} MB</p>
            <p>Status: Connected</p>
            <p>Speed: 100.0 Mbps</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meter-container {
  position: relative;
  overflow: hidden;
}

.meter-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 9%,
      rgba(255, 255, 255, 0.1) 10%
    );
  pointer-events: none;
}
</style>