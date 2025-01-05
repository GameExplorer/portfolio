<script>
import WindowMenuItems from "./WindowMenuItems.vue";
import Applications from "./SystemInformation/Applications.vue";
import SysInfo from "./SystemInformation/SysInfo.vue";
import Processes from "./SystemInformation/Process.vue";
import Performance from "./SystemInformation/Performance.vue";
import Networking from "./SystemInformation/Networking.vue";

export default {
  name: "SystemInformationWindow",
  components: {
    WindowMenuItems,
    Applications,
    SysInfo,
    Processes,
    Performance,
    Networking,
  },
  data() {
    return {
      currentTab: 0,
      isContentVisible: true,
      tabs: [
        { name: "Applications", component: "Applications" },
        { name: "Processes", component: "Processes" },
        { name: "Performance", component: "Performance" },
        { name: "Networking", component: "Networking" },
        { name: "System Information", component: "SysInfo" },
      ],
    };
  },

  props: {
    openApps: {
      type: Array,
      required: true,
    },
    endTask: {
      type: Function,
      required: true,
    },
  },

  methods: {
    setCurrentTab(index) {
      this.currentTab = index;
    },
    handleEndTask(appName) {
      this.$emit("end-task", appName);
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
  background-color: #4caf50;
  transition: width 0.3s ease-in-out;
}
</style>

<template>
  <div class="menu-bar cursor-default">
    <WindowMenuItems />
  </div>
  <div class="window-content">
    <div class="content text-lg">
      <menu
        role="tablist"
        class="text-base z-10 flex justify-center items-center"
      >
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
        <div
          class="window-body p-2 border-2 border-l-white border-t-white border-r-black border-b-black"
        >
          <component
            :is="tabs[currentTab].component"
            :key="refreshKey"
            :openApps="openApps"
            @end-task="$emit('end-task', $event)"
            v-if="isContentVisible"
            class=""
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>
