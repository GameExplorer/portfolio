<template>
  <div class="justify-center items-center z-1">
    <menu role="tablist" class="bg-[#c7c9c8] text-2xl z-10 flex justify-center items-center">
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
      <div class="window-body h-screen">
        <component
          :is="tabs[currentTab].component"
          :key="refreshKey"
          v-if="isContentVisible"
          class=""
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "./Projects.vue";
import About from "./About.vue";
import Contact from "./Contact.vue";

export default {
  name: "Portfolio",
  components: {
    Projects,
    About,
    Contact,
  },
  
  data() {
    return {
      currentTab: 0,
      refreshKey: 0,
      isContentVisible: true,
      tabs: [
        { name: "About", component: "About" },
        { name: "Projects", component: "Projects" },
        { name: "Contact", component: "Contact" },
      ],
    };
  },
  methods: {
    setCurrentTab(index) {
      this.currentTab = index;
    },
    moveForward() {
      this.currentTab = (this.currentTab + 1) % this.tabs.length;
    },
    moveBackward() {
      this.currentTab =
        (this.currentTab - 1 + this.tabs.length) % this.tabs.length;
    },
    refreshContent() {
      this.isContentVisible = false;
      this.refreshKey += 1;
      
      setTimeout(() => {
        this.isContentVisible = true;
      }, 1000);
    },
  },
  expose: ["moveForward", "moveBackward", "refreshContent"],
};
</script>

