<script>
export default {
  name: "About",
};
</script>

<template>
  <div class="border-2 border-gray-400 max-w-5xl mx-auto mb-24">
    <div class="title-bar px-2 py-1 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="text-white">👤</span>
        <span class="text-white font-bold text-base">About Me</span>
      </div>
      <div class="flex space-x-1 title-bar-controls">
        <button
          aria-label="Minimize"
          class="w-5 h-5 text-black bg-gray-200 flex items-center justify-center"
        ></button>
        <button
          aria-label="Maximize"
          class="w-5 h-5 text-black bg-gray-200 flex items-center justify-center"
        ></button>
        <button
          aria-label="Close"
          class="w-5 h-5 text-black bg-gray-200 flex items-center justify-center"
        ></button>
      </div>
    </div>
    <div class="window-content p-4 bg-gray-200 h-[600px] overflow-y-auto">
      <div class="p-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            class="bg-gray-100 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-600 border-b-gray-600 p-4"
          >
            <div
              class="mb-4 border-2 border-inset border-gray-400 p-2 bg-white"
            >
              <img src="/portfolio_icon.png" alt="Profile Picture" class="w-full h-auto" />
            </div>
            <div>
              <h2 class="font-bold mb-2 text-sm">Quick Info</h2>
              <div class="space-y-2 text-sm">
                <div class="flex items-center text-sm">
                  <span class="mr-2">📍</span>
                  <span>Location: Kranj</span>
                </div>
                <div class="flex items-center">
                  <span class="mr-2">💼</span>
                  <span>Role: Developer</span>
                </div>
                <div class="flex items-center">
                  <span class="mr-2">📧</span>
                  <span>Email: email@email.com</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div
              class="bg-gray-100 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-600 border-b-gray-600 p-4 mb-4"
            >
              <div class="title-bar p-2 text-white mb-3">
                <h2 class="font-bold text-base">About Me</h2>
              </div>
              <p class="text-sm mb-4">
                Tekst tekst tekst Nevem kaj bi napisal tukaj
              </p>
            </div>
            <div
              class="bg-gray-100 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-600 border-b-gray-600 p-4"
            >
              <div class="title-bar p-2 text-white mb-3">
                <h2 class="font-bold text-base">Skills & Technologies</h2>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <h3 class="font-bold text-sm mb-2">Frontend</h3>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <ul class="list-disc">
                        <li class="ml-4 text-sm">Vue.js</li>
                        <li class="ml-4 text-sm">PHP</li>
                        <li class="ml-4 text-sm">HTML/CSS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="skill-category">
                  <h3 class="font-bold text-sm mb-2">Backend</h3>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <ul class="list-disc">
                        <li class="ml-4 text-sm">C#</li>
                        <li class="ml-4 text-sm">SQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 mt-4"
        >
          <div class="title-bar p-2 text-white mb-3">
            <h2 class="font-bold text-base">Hobbies</h2>
          </div>
          <div class="space-y-4">
            <div>
              <ul class="list-disc">
                <li class="ml-4 text-sm">Hiking</li>
                <li class="ml-4 text-sm">Reading</li>
                <li class="ml-4 text-sm">Running</li>
                <li class="ml-4 text-sm">Fitness</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 mt-4"
        >
          <div class="title-bar p-2 text-white mb-3">
            <h2 class="font-bold text-base">Other</h2>
          </div>
          <div class="space-y-4">
            <div>
              <ul class="list-disc">
                <li class="ml-4 text-sm underline"><a href="https://wakatime.com/@47roninhunter" target="_blank" class="text-blue-500">Wakatime</a></li>
                <li class="ml-4 text-sm underline"><a href="https://codestats.net/users/GameExplorer" target="_blank" class="text-blue-500">Code:Stats</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 mt-4 hidden"
        >
          <div class="window p-2 text-white mb-3">
            <h2 class="font-bold">Education & Certifications</h2>
          </div>
          <div class="space-y-4">
            <div>
              <h3 class="font-bold text-sm"></h3>
              <p class="text-sm text-gray-600"></p>
            </div>
            <div>
              <h3 class="font-bold text-sm"></h3>
              <p class="text-sm text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="status-bar border-t-2 border-gray-400 p-2 bg-gray-200 text-sm mb-32 lg:mb-0"
      >
        Last updated: December 2024
      </div>
    </div>
  </div>
</template>
