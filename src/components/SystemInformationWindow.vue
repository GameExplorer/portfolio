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

<template>
  <div class="w-auto px-4 menu-bar cursor-default">
    <WindowMenuItems />
  </div>
  <div class="max-h-[90vh] md:max-h-[600px]">
    <div class="content text-lg">
      <menu
        role="tablist"
        class="text-base z-10 flex flex-wrap justify-start items-center sticky top-0 left-2 bg-gray-300 w-auto"
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
          class="window-body w-full p-2 border-2 border-l-white border-t-white border-r-black border-b-black"
        >
          <component
            :is="tabs[currentTab].component"
            :key="refreshKey"
            :openApps="openApps"
            @end-task="$emit('end-task', $event)"
            v-if="isContentVisible"
            class="w-full"
          ></component>
        </div>
      </div>
    </div>
  </div>
</template>