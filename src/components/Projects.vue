<script>
export default {
  name: "Projects",
  data() {
    return {
      currentTab: "all",
      tabs: [
        { id: "all", name: "All Projects" },
        { id: "web", name: "Web Apps" },
        { id: "other", name: "Other" },
      ],
      projects: [
        {
          id: 1,
          title: "petar.fun",
          type: "web",
          description: "A website with a mixtures of random things that I like and do.",
          image: "/ProjectImages/petar_fun.png",
          technologies: ["Vue.js", "JS", "Tailwind CSS"],
          github: "https://github.com/GameExplorer/petar_fun",
          demo: "https://www.petar.fun/",
        },
        {
          id: 2,
          title: "Ticket Management System",
          type: "other",
          description:
            "A ticket management system enables users to create, view, manage, and close incident tickets, with features like department-based access, communication tools, file attachments, and frontend visibility control for closed tickets.",
          image: "/ProjectImages/tms.png",
          technologies: ["PHP", "JS", "CSS/Bootstrap"],
          github: "https://github.com/GameExplorer/gestion_tickets",
        },
        {
          id: 3,
          title: "Room Reservation",
          type: "other",
          description: "Room Reservation Web App",
          image: "/ProjectImages/room_reservation.png",
          technologies: ["PHP", "JS", "CSS/Bootstrap"],
          github: "https://github.com/GameExplorer/RoomReservation",
        },
        {
          id: 4,
          title: "Comerciales",
          type: "other",
          description: "Users are able to login and check their pat orders and download the data as csv. WebApp created for Central Uniformes",
          image: "/ProjectImages/comerciales.png",
          technologies: ["PHP", "JS", "CSS/Bootstrap"],
          github: "https://github.com/GameExplorer/Comerciales",
        },
        {
          id: 5,
          title: "Kanati",
          type: "web",
          description: "Website for Kanati",
          image: "/ProjectImages/kanati.png",
          technologies: ["Svelte", "JS", "Tailwind CSS"],
          github: "https://github.com/GameExplorer/kanati",
          demo: "https://kanati.si/",
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.currentTab === "all") return this.projects;
      return this.projects.filter(
        (project) => project.type === this.currentTab
      );
    },
  },
};
</script>

<template>
  <div class="border-2 border-gray-500 max-w-6xl mx-auto">
    <div class="title-bar px-2 py-1 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="text-white">💾</span>
        <span class="text-white font-bold text-base">My Projects</span>
      </div>
      <div class="flex space-x-1 title-bar-controls">
        <button
          aria-label="Minimize"
          class="bg-gray-200 w-5 h-5 flex items-center justify-center"
        ></button>
        <button
          aria-label="Maximize"
          class="w-5 h-5 bg-gray-200 flex items-center justify-center"
        ></button>
        <button
          aria-label="Close"
          class="w-5 h-5 bg-gray-200 flex items-center justify-center"
        ></button>
      </div>
    </div>
    <div class="bg-gray-300 h-[600px] overflow-y-auto">
      <div class="p-4">
        <div class="border-b-2 border-gray-400 mb-4 text-base">
          <div class="flex">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="currentTab = tab.id"
              :class="[
                'tab-button px-4 py-2 mr-1 border-2',
                currentTab === tab.id ? 'active-tab bg-gray-200' : '',
              ]"
            >
              {{ tab.name }}
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600"
          >
            <div
              class="title-bar p-2 text-white flex items-center justify-between"
            >
              <div class="flex items-center">
                <span class="mr-2">💾</span>
                <span class="font-bold title-bar-text text-base">{{
                  project.title
                }}</span>
              </div>
              <div class="flex space-x-1 title-bar-controls">
                <button
                  aria-label="Minimize"
                  class="w-4 h-4 bg-gray-200"
                ></button>
                <button
                  aria-label="Maximize"
                  class="w-4 h-4 bg-gray-200"
                ></button>
                <button aria-label="Close" class="w-4 h-4 bg-gray-200"></button>
              </div>
            </div>
            <div class="p-4">
              <div class="mb-4 border-2 border-inset border-gray-400 p-2">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-auto lg:h-32 object-cover"
                />
              </div>
              <div>
                <p class="mb-2 text-base">{{ project.description }}</p>
                <div class="mb-4">
                  <div class="mb-1 font-bold text-base">Tech Stack:</div>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="tech-tag px-2 py-1 text-sm font-bold bg-white border-2 border-gray-400"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div class="flex space-x-2 mb-4">
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    class="px-4 py-1 bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 hover:bg-gray-300 hover:cursor-pointer text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    class="px-4 py-1 bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 hover:bg-gray-300 hover:cursor-pointer text-sm"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border-t-2 border-gray-400 p-2 bg-gray-200 text-sm mb-32 lg:mb-0"
      >
        {{ filteredProjects.length }} project(s) | {{ currentTab }} view
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech-tag {
  text-shadow: 1px 1px #fff;
}
</style>
