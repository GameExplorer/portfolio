<script>
export default {
  name: "TaskManager",
  data() {
    return {
      applications: [
        {
          name: "Portfolio.exe",
          status: "Running",
          memory: "24,568 K",
          cpu: "01"
        },
        {
          name: "SystemInformation.exe",
          status: "Running",
          memory: "12,844 K",
          cpu: "00"
        },
        {
          name: "Credits.exe",
          status: "Not Responding",
          memory: "18,232 K",
          cpu: "02"
        }
      ],
      selectedApp: null,
      sortBy: 'name',
      sortDirection: 'asc'
    };
  },
  computed: {
    sortedApplications() {
      return [...this.applications].sort((a, b) => {
        let comparison = 0;
        if (a[this.sortBy] < b[this.sortBy]) comparison = -1;
        if (a[this.sortBy] > b[this.sortBy]) comparison = 1;
        return this.sortDirection === 'asc' ? comparison : -comparison;
      });
    }
  },
  methods: {
    selectApp(app) {
      this.selectedApp = app;
    },
    sortApps(field) {
      if (this.sortBy === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortBy = field;
        this.sortDirection = 'asc';
      }
    },
    endTask() {
      if (this.selectedApp) {
        this.applications = this.applications.filter(app => app !== this.selectedApp);
        this.selectedApp = null;
      }
    }
  }
};
</script>

<style scoped >
.task-manager {
  font-family: "Microsoft Sans Serif", Tahoma, sans-serif;
  background-color: #c0c0c0;
  border: 2px solid;
  border-top-color: #dfdfdf;
  border-left-color: #dfdfdf;
  border-right-color: #808080;
  border-bottom-color: #808080;
  box-shadow: inset 1px 1px #ffffff, inset -1px -1px #0a0a0a;
}

.title-bar {
  background: linear-gradient(90deg, #000080, #1084d0);
  padding: 3px 2px 3px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-98 {
  background-color: #c0c0c0;
  border: 1px solid;
  border-top-color: #dfdfdf;
  border-left-color: #dfdfdf;
  border-right-color: #808080;
  border-bottom-color: #808080;
  box-shadow: inset 1px 1px #ffffff, inset -1px -1px #0a0a0a;
  padding: 4px 10px;
  margin: 2px;
}

.button-98:disabled {
  color: #808080;
  text-shadow: 1px 1px #ffffff;
}

.button-98:active {
  border-top-color: #808080;
  border-left-color: #808080;
  border-right-color: #dfdfdf;
  border-bottom-color: #dfdfdf;
  box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a;
}

.table-header {
  cursor: pointer;
  user-select: none;
}

.table-header:hover {
  background-color: #dfdfdf;
}

.selected-row {
  background-color: #000080 !important;
  color: white;
}
</style>

<template>
  <div class="task-manager w-[500px]">
    <div class="title-bar">
      <div class="flex items-center">
        <img src="/task_manager.png" alt="Task Manager" class="w-4 h-4 mr-2" />
        <span class="text-white">Windows Task Manager</span>
      </div>
      <div class="flex">
        <button class="text-white px-2 hover:bg-red-600">✕</button>
      </div>
    </div>

    <div class="p-4">
      <div class="text-sm mb-4">Applications</div>
      
      <div class="bg-white border border-gray-400 mb-4">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-400">
              <th @click="sortApps('name')" class="table-header text-left p-1 border-r border-gray-400">Task</th>
              <th @click="sortApps('status')" class="table-header text-left p-1 border-r border-gray-400">Status</th>
              <th @click="sortApps('memory')" class="table-header text-right p-1 border-r border-gray-400">Mem Usage</th>
              <th @click="sortApps('cpu')" class="table-header text-right p-1">CPU</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in sortedApplications" 
                :key="app.name"
                :class="{'selected-row': selectedApp === app}"
                @click="selectApp(app)"
                class="hover:bg-gray-100 cursor-pointer">
              <td class="p-1 border-r border-gray-400">{{ app.name }}</td>
              <td class="p-1 border-r border-gray-400">{{ app.status }}</td>
              <td class="p-1 border-r border-gray-400 text-right">{{ app.memory }}</td>
              <td class="p-1 text-right">{{ app.cpu }}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end space-x-2">
        <button class="button-98" :disabled="!selectedApp" @click="endTask">End Task</button>
      </div>
    </div>
  </div>
</template>