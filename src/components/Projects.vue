<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
  >
    <div
      class="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
    >
      <h2 class="text-xl font-bold text-white mb-2">Project 1</h2>
      <p class="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        purus et nunc.
      </p>
    </div>
    <div
      class="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
    >
      <h2 class="text-xl font-bold text-white mb-2">Project 2</h2>
      <p class="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        purus et nunc.
      </p>
    </div>
    <div
      class="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
    >
      <h2 class="text-xl font-bold text-white mb-2">Project 3</h2>
      <p class="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        purus et nunc.
      </p>
    </div>
    <div
      class="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform hover:scale-105"
    >
      <h2 class="text-xl font-bold text-white mb-2">Project 4</h2>
      <p class="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        purus et nunc.
      </p>
      <div class="mt-4 grid grid-cols-2">
        <a
          href="#"
          class="mx-4 text-purple-500 hover:text-purple-400 transition-colors "
          ><img src="../assets/vue.svg" ></a
        >
        <a
          href="#"
          class="text-purple-500 hover:text-purple-400 transition-colors"
          ><img src="../assets/vue.svg" ></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
