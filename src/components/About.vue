<script>
export default {
  name: "About",
};
</script>

<template>

  <div class="title-bar px-2 py-1 flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <span class="text-white">👤</span>
      <span class="text-white font-bold text-lg">About Me</span>
    </div>
  </div>
  <div class="window-content p-4 bg-gray-200">
    <div class="p-0">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-gray-100 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-600 border-b-gray-600 p-4">
          <div class="mb-4 border-2 border-inset border-gray-400 p-2 bg-white hidden">
            <img src="/portfolio_icon.png" alt="Profile Picture" class="w-full h-auto hidden" />
          </div>
          <div>
            <h2 class="font-bold mb-2 text-sm">Quick Info</h2>
            <div class="space-y-2 text-base lg:text-xl">
              <div class="flex items-center text-base">
                <span class="mr-2">📍</span>
                <span class="lg:text-xl">Location: Kranj</span>
              </div>
              <div class="flex items-center">
                <span class="mr-2">💼</span>
                <span>Role: Student</span>
              </div>
              <div class="flex items-center">
                <span class="mr-2">📧</span>
                <span class="text-[0.95rem] lg:text-xl">Email: petar.petrovic.developer@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div
            class="bg-gray-100 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-600 border-b-gray-600 p-4 mb-4">
            <div class="title-bar p-2 text-white mb-3">
              <h2 class="ml-2 font-bold text-base">About Me</h2>
            </div>
            <p class="text-xl mb-2">
              Hi, I'm Petar. I'm a developer that loves to develop
              applications and websites. I have a passion for learning new
              technologies and improving my skills. I like to work on projects
              that challenge me and expand my horizon. In my free time I like
              to develop projects that I find interesting and/or help me with
              my hobbies.
            </p>
          </div>
          <div class="bg-gray-100 border-2 border-t-gray-200 border-l-gray-200 border-r-gray-600 border-b-gray-600 p-4">
            <div class="title-bar p-2 text-white mb-3">
              <h2 class="font-bold"><span class="ml-2 text-[1.55rem] lg:text-4xl">Skills & Technologies</span></h2>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="font-bold text-sm mb-2"></h3>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <ul class="list-disc text-xl">
                      <li class="ml-4">HTML</li>
                      <li class="ml-4">CSS (TailwindCSS)</li>
                      <li class="ml-4">JS (Vue.js)</li>
                      <li class="ml-4">Linux</li>
                      <li class="ml-4">Docker</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="skill-category">
                <h3 class="font-bold text-sm mb-2"></h3>
                <div class="space-y-2">
                  <div class="flex items-center">
                    <ul class="list-disc text-xl">
                      <li class="ml-4">C#</li>
                      <li class="ml-4">SQL</li>
                      <li class="ml-4">PHP</li>
                      <li class="ml-4">Bash</li>
                      <li class="ml-4">XML</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 mt-4 hidden">
            <div class="window p-2 text-white mb-3">
              <h2 class="font-bold ml-2">Education & Certifications</h2>
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
      </div>
      <div
        class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 mt-4">
        <div class="title-bar p-2 text-white mb-3">
          <h2 class="ml-2 font-bold text-base">Hobbies</h2>
        </div>
        <div class="space-y-4">
          <div>
            <ul class="list-disc text-xl">
              <li class="ml-4">Hiking</li>
              <li class="ml-4">Reading</li>
              <li class="ml-4">Running</li>
              <li class="ml-4">Fitness</li>
              <li class="ml-4">3D Printing</li>
              <li class="ml-4">Motorsport</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 p-4 mt-4">
        <div class="title-bar p-2 text-white mb-3">
          <h2 class="ml-2 font-bold text-base">Other</h2>
        </div>
        <div class="space-y-4">
          <div>
            <ul class="list-disc text-xl">
              <li class="ml-4 underline">
                <a href="https://github.com/GameExplorer" target="_blank" class="text-blue-500">Github</a>
              </li>
              <li class="ml-4 underline">
                <a href="https://gitlab.com/GameExplorer1" target="_blank" class="text-blue-500">Gitlab</a>
              </li>
              <li class="ml-4 underline">
                <a href="https://wakatime.com/@47roninhunter" target="_blank" class="text-blue-500">Wakatime</a>
              </li>
              <li class="ml-4 underline">
                <a href="https://codestats.net/users/GameExplorer" target="_blank" class="text-blue-500">Code:Stats</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
