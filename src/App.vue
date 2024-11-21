<script>
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contact.vue";
import Desktop from "./components/Desktop.vue";

export default {
  components: {
    Projects,
    Contacts,
    Desktop,
  },
  data() {
    return {
      
    };
  },
  mounted() {
      
  },
  methods: {
   
  },
};
</script>

<template>
 <!-- <div class="window">
    <Header class="text-center" />
    <main>
      <section id="projects">
        <Projects />
      </section>
    </main>
    <footer>
      <Contacts />
    </footer>
  </div>-->

  <Desktop></Desktop>
</template>

<style scoped>
.kek {
  text-shadow: orange;
}
</style>
