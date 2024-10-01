<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";

export default {
  components: {
    HelloWorld,
    Header,
    Projects,
  },
};
</script>

<template>
  <div class="container">
    <Header class="text-center" />
    <main>
      <section id="about">
        <h2>About me</h2>
        <!-- Add your about content here -->
      </section>
      <section id="hello">
        <HelloWorld msg="Vite + Vue" />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="another-hello">
        <HelloWorld msg="Another Vite + Vue Section" />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
