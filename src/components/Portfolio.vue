<template>
  <header>
    <menu role="tablist" class="bg-[#c7c9c8] text-2xl">
      <li role="tab" aria-selected="true"><a href="#tabs">About</a></li>
      <li role="tab"><a href="#tabs">Projects</a></li>
      <li role="tab"><a href="#tabs">Contact</a></li>
    </menu>
    <div class="window" role="tabpanel">
      <div class="window-body">
        <p>the tab content</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
