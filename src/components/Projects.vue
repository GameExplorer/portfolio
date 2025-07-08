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
          description: "A website with a mixtures of random things that I like and do and to explore the possibilities of Vue.js",
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
            "A ticket management system enables users to create, view, manage, and close incident tickets, with features like department-based access, communication tools, file attachments, and frontend visibility control for closed tickets. Website created as part of the internship",
          image: "/ProjectImages/tms.png",
          technologies: ["PHP", "JS", "CSS/Bootstrap"],
          github: "https://github.com/GameExplorer/gestion_tickets",
        },
        {
          id: 3,
          title: "Room Reservation",
          type: "other",
          description: "Room Reservation Web App. Website created as part of the internship",
          image: "/ProjectImages/room_reservation.png",
          technologies: ["PHP", "JS", "CSS/Bootstrap"],
          github: "https://github.com/GameExplorer/RoomReservation",
        },
        {
          id: 4,
          title: "Comerciales",
          type: "other",
          description: "Users are able to login and check their pat orders and download the data as csv. WebApp created for Central Uniformes as part of the internship",
          image: "/ProjectImages/comerciales.png",
          technologies: ["PHP", "JS", "CSS/Bootstrap"],
          github: "https://github.com/GameExplorer/Comerciales",
        },
        {
          id: 5,
          title: "Kanati",
          type: "web",
          description: "Website for Kanati. Co-created the website with colleague",
          image: "/ProjectImages/kanati.png",
          technologies: ["Svelte", "JS", "Tailwind CSS"],
          github: "https://github.com/GameExplorer/kanati",
          demo: "https://kanati.si/",
        },
        {
          id: 6,
          title: "Droughtwatch",
          type: "web",
          description: "Droughtwatch is web based drought monitoring application. The main purpose of the project is to overcome the problems of drought monitoring, management and to contribute to increasing the resilience of society to drought in the Danube region, namely by using the latest technology in drought monitoring. My contribution was improving the frontend and backend of the application.",
          image: "/ProjectImages/droughtwatch.png",
          technologies: ["ReactJS", "Python", "MapServer"],
          demo: "https://droughtwatch.geocodis.com/home",
        },
        {
          id: 7,
          title: "RateGP",
          type: "web",
          description: "RateGP is a web application that allows users to rate and review Grand Prix events. It provides a platform for motorsport enthusiasts to share their opinions and experiences.",
          image: "/ProjectImages/RateGP_icon.png",
          technologies: ["Vue.js", "JS", "Tailwind CSS", "Pinia"],
          demo: "https://www.rategp.app/"
        }
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
  <div class="title-bar px-2 py-1 flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <span class="text-white">💾</span>
      <span class="text-white font-bold text-lg">My Projects</span>
    </div>
  </div>
  <div class="bg-gray-300">
    <div class="p-4">
      <div class="border-b-2 border-gray-400 mb-4">
        <div class="flex">
          <button v-for="tab in tabs" :key="tab.id" @click="currentTab = tab.id" :class="[
            'px-4 py-2 mr-1 border-2',
            currentTab === tab.id ? 'active-tab bg-gray-200' : '',
          ]">
            {{ tab.name }}
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 text-lg">
        <div v-for="project in filteredProjects" :key="project.id"
          class="bg-gray-100 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600">
          <div class="title-bar p-2 text-white flex items-center justify-between">
            <div class="flex items-center">
              <span class="mr-2">💾</span>
              <span class="font-bold text-2xl">{{
                project.title
                }}</span>
            </div>
          </div>
          <div class="p-4">
            <div class="mb-4 border-2 border-inset border-gray-400 p-2">
              <img :src="project.image" :alt="project.title" class="w-full h-auto lg:h-32 object-cover" />
            </div>
            <div>
              <p class="mb-2 text-xl">{{ project.description }}</p>
              <div class="mb-4">
                <div class="mb-1 font-bold text-base">Tech Stack:</div>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="tech-tag px-2 py-1 text-base font-bold bg-white border-2 border-gray-400">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div class="flex space-x-2 mb-4">
                <a v-if="project.github" :href="project.github" target="_blank"
                  class="px-4 py-1 bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 hover:bg-gray-300 hover:cursor-pointer text-base">
                  GitHub
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank"
                  class="px-4 py-1 bg-gray-200 border-2 border-t-gray-100 border-l-gray-100 border-r-gray-600 border-b-gray-600 hover:bg-gray-300 hover:cursor-pointer text-base">
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-2 border-gray-400 p-2 bg-gray-200 text-sm mb-32 lg:mb-0">
      {{ filteredProjects.length }} project(s) | {{ currentTab }} view
    </div>
  </div>
</template>

<style scoped>
.tech-tag {
  text-shadow: 1px 1px #fff;
}

button {
  font-size: 1.2rem;
}
</style>
