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
      tabs: [
        { name: "About", component: "About" },
        { name: "Projects", component: "Projects" },
        { name: "Contact", component: "Contact" },
      ],
    };
  },
  methods: {

  },
  expose: ["moveForward", "moveBackward", "refreshContent"],
};
</script>


<template>
  <div class="border-2 border-gray-400 max-w-5xl lg:max-w-full mx-auto mb-24 h-[600px] lg:h-[700px] overflow-y-auto">
    <About />
    <Projects />
    <Contact />
    <div class="status-bar border-t-2 border-gray-400 p-2 bg-gray-200 text-sm mb-32 lg:mb-0">
      Last updated: July 2025
    </div>
  </div>

</template>