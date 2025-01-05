<script>
export default {
  name: "Applications",
  props: {
    openApps: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      sortBy: "name",
      sortOrder: "asc",
    };
  },
  computed: {
    sortedApps() {
      return [...this.openApps].sort((a, b) => {
        if (this.sortOrder === "asc") {
          return a.localeCompare(b);
        }
        return b.localeCompare(a);
      });
    },
  },
  methods: {
    getAppIcon(appName) {
      const icons = {
        Portfolio: "/portfolio_icon.png",
        Credits: "/notepad.png",
        "System Information": "/task_manager.png",
      };
      return icons[appName] || "/portfolio_icon.png";
    },

    getMemoryUsage(app) {
      const memory = {
        Portfolio: "24,568 K",
        Credits: "12,444 K",
        "System Information": "18,756 K",
      };
      return memory[app] || "15,000 K";
    },

    getCPUUsage() {
      return Math.floor(Math.random() * 5) + 1;
    },

    toggleSort() {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },

    handleEndTask(app) {
      this.$emit('end-task', app);
    }
  },
};
</script>

<template>
  <div class="applications-tab p-2">
    <div v-if="openApps.length === 0" class="text-center py-4 text-lg">
      No applications are running
    </div>

    <table v-else class="w-full border-collapse border-2 border-black">
      <thead>
        <tr class="bg-[#c0c0c0]">
          <th
            @click="toggleSort"
            class="text-left p-1 border border-gray-500 cursor-pointer text-base"
          >
            Application {{ sortOrder === "asc" ? "▲" : "▼" }}
          </th>
          <th class="text-left text-base p-1 border border-gray-500">Status</th>
          <th
            @click="toggleSort"
            class="text-left text-base p-1 border border-gray-500"
          >
            Memory
          </th>
          <th class="text-left text-base p-1 border border-gray-500">CPU</th>
          <th class="text-left text-base p-1 border border-gray-500">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="app in sortedApps"
          :key="app"
          class="hover:bg-[#000080] hover:text-white"
        >
          <td class="p-1 border border-gray-500">
            <div class="flex items-center text-base">
              <img :src="getAppIcon(app)" :alt="app" class="w-4 h-4 mr-2" />
              {{ app }}
            </div>
          </td>
          <td class="text-base p-1 border border-gray-500">Running</td>
          <td class="text-base p-1 border border-gray-500">
            {{ getMemoryUsage(app) }}
          </td>
          <td class="text-base p-1 border border-gray-500">
            {{ getCPUUsage() }}%
          </td>
          <td class="p-1 border border-gray-500">
            <button
              @click="handleEndTask(app)"
              class="text-sm px-2 py-1 bg-[#c0c0c0] border border-gray-400 hover:bg-red-600 hover:text-white"
            >
              End Task
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

