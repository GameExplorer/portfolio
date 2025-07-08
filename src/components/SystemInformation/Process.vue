<script>
import Portfolio from "../Portfolio.vue";

export default {
  name: "Processes",
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
      systemProcesses: [
        {
          name: "System Idle Process",
          pid: 0,
          priority: 0,
          threads: 1,
          isSystem: true,
        },
        {
          name: "System",
          pid: 4,
          priority: 8,
          threads: 3,
          isSystem: true,
        },
        {
          name: "Petar Explorer",
          pid: 1337,
          priority: 8,
          threads: 4,
          isSystem: true,
        },
        {
          name: "Registry",
          pid: 96,
          priority: 8,
          threads: 2,
          isSystem: true,
        },
        {
          name: "Desktop Manager",
          pid: 748,
          priority: 13,
          threads: 8,
          isSystem: true,
        },
        {
          name: "svchost.exe",
          pid: 1234,
          priority: 10,
          threads: 5,
          isSystem: true,
        },
        {
          name: "csrss.exe",
          pid: 5678,
          priority: 9,
          threads: 6,
          isSystem: true,
        },
        {
          name: "coding.exe",
          pid: 1337,
          priority: 24,
          threads: 7,
          isSystem: true,
        }
      ],
      appPIDs: new Map(),
    };
  },
  computed: {
    allProcesses() {
      const appProcesses = this.openApps.map((app) => {
        if (!this.appPIDs.has(app)) {
          this.appPIDs.set(app, this.generateUniquePID());
        }

        return {
          name: app,
          pid: this.appPIDs.get(app),
          priority: this.getPriority(),
          threads: this.getThreads(),
          isSystem: false,
        };
      });

      return [...this.systemProcesses, ...appProcesses];
    },

    sortedProcesses() {
      return [...this.allProcesses].sort((a, b) => {
        if (this.sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
      });
    },
  },
  methods: {
    generateUniquePID() {
      const usedPIDs = new Set([
        ...this.systemProcesses.map((p) => p.pid),
        ...this.appPIDs.values(),
      ]);
      let pid;
      do {
        pid = Math.floor(Math.random() * 9000) + 1000;
      } while (usedPIDs.has(pid));
      return pid;
    },

    getPriority() {
      return Math.floor(Math.random() * 20) + 1;
    },

    getThreads() {
      return Math.floor(Math.random() * 5) + 1;
    },

    toggleSort() {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },
  },
};
</script>

<template>
  <div class="p-2">
    <div v-if="allProcesses.length === 0" class="text-center py-4 text-lg">
      No processes are running
    </div>

    <table v-else class="w-full border-collapse border-2 border-black">
      <thead>
        <tr class="bg-[#c0c0c0]">
          <th
            @click="toggleSort"
            class="text-left p-1 border border-gray-500 cursor-pointer text-base"
          >
            Process {{ sortOrder === "asc" ? "▲" : "▼" }}
          </th>
          <th class="text-left text-base p-1 border border-gray-500">PID</th>
          <th class="text-left text-base p-1 border border-gray-500">
            Priority
          </th>
          <th class="text-left text-base p-1 border border-gray-500">
            Threads
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="process in sortedProcesses"
          :key="process.pid"
          :class="{
            'hover:bg-[#000080] hover:text-white': true,
            'text-gray-600': process.isSystem,
          }"
        >
          <td class="p-2 border border-gray-500">
            <div class="flex items-center text-base">
              {{ process.name }}
            </div>
          </td>
          <td class="text-base p-1 border border-gray-500">
            {{ process.pid }}
          </td>
          <td class="text-base p-1 border border-gray-500">
            {{ process.priority }}
          </td>
          <td class="text-base p-1 border border-gray-500">
            {{ process.threads }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
