<script>
import WindowMenuItems from "./WindowMenuItems.vue";
export default {
  name: "CreditsWindow",
  components: {
    WindowMenuItems,
  },
};
</script>

<style scoped></style>

<template>
  <div class="menu-bar cursor-default">
    <WindowMenuItems />
  </div>
  <div class="window-content">
    <div class="content p-4 text-base text-left bg-white h-max border-2 border-gray-400"
    >
      <div class="relative px-2">
        <ul class="list-disc">
          <li class="underline text-blue-800">
            <a href="https://win98icons.alexmeub.com/" target="_blank"
              >Win98 icons</a
            >
          </li>
          <li class="underline text-blue-800">
            <a href="https://www.reddit.com/r/wallpaper/comments/x6kojv/4k_upscaled_windows_98_clouds_wallpaper_4096x3072/" target="_blank"
              >Background image</a
            >
          </li>
          <li class="underline text-blue-800">
            <a href="https://copy.sh/v86/?profile=windows98" target="_blank"
              >Win98 Emulator</a
            >
          </li>
          <li class="underline text-blue-800">
            <a href="https://jdan.github.io/98.css/" target="_blank"
              >98.css</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
