<template>
  <div class="relative h-screen">
    <!-- Always show desktop background and taskbar -->
    <div class="desktop-background absolute inset-0">
      <DesktopIcons @open-app="handleOpenApp" />
      <Taskbar :openApps="openApps" @close="closeApp" @focus="focusApp" />
    </div>

    <!-- Router content overlays on top -->
    <div class="router-content">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Desktop from "./components/Desktop.vue";
import "./style.css";

export default {
  components: {
    Desktop,
  },
};
</script>