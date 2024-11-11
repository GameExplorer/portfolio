<script>
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contact.vue";

export default {
  components: {
    Header,
    Projects,
    Contacts,
  },
  data() {
    return {
      icons: [
        "fas fa-brands fa-html5",
        "fab fa-css3-alt text-blue-300 shadow-lg drop-shadow-yellow-300",
        "fas fa-brands fa-vuejs text-green-500",
        "fab fa-js-square text-yellow-400",
        "fab fa-node-js text-green-600",
        "fab fa-react text-blue-500",
        "fab fa-sass text-pink-400",
        "fab fa-bootstrap text-purple-500 drop-shadow-lg shadow-white",
        "fab fa-github text-gray-500",
        "fab fa-csharp text-purple-600",
        "fas fa-mysql text-blue-500 shadow-lg shadow-blue-500",
      ],
    };
  },
  mounted() {
    this.randomizeIcons();
  },
  methods: {
    randomizeIcons() {
      this.$refs.floatingIcons.forEach((icon) => {
        const randomBounceHeight = Math.floor(Math.random() * -500) + 600;

        // Random animation duration between 7s and 15s
        const randomDuration = Math.floor(Math.random() * 10) + 80 + "s";

        // Random starting position (within the viewport)
        const randomTop = Math.floor(Math.random() * -60) + "vh"; // Random top between 0 and 90vh
        const randomLeft = Math.floor(Math.random() * 1) + "vw"; // Random left between 0 and 90vw

        // Set CSS variables for bounce height, duration, and starting positions
        icon.style.setProperty("--bounce-height", `${randomBounceHeight}px`);
        icon.style.setProperty("--duration", randomDuration);
        icon.style.top = randomTop;
        icon.style.left = randomLeft;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <Header class="text-center" />
    <main>
      <section id="projects">
        <Projects />
      </section>
    </main>
    <footer>
      <Contacts />
    </footer>
  </div>

  <div class="floating-icons">
    <!-- Dynamically render a list of icons (use FontAwesome, for example) -->
    <i
      v-for="(icon, index) in icons"
      :key="index"
      :class="icon"
      ref="floatingIcons"
    ></i>
  </div>
</template>

<style scoped>
.kek {
  text-shadow: orange;
}
</style>
