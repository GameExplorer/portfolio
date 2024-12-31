<script>
export default {
  name: "MenuItems",
  data() {
    return {
      menuItems: [
        {
          name: "File",
          submenu: [
            { name: "New... ", keybinds:"Ctrl+N", disabled: true },
            { name: "Open... ", keybinds:"Ctrl+O", disabled: false },
            { name: "Save... ", keybinds: "Ctrl+S", disabled: false },
            { name: "Save as... ", keybinds: "Ctrl+Shift+S", disabled: true },
            { name: "Print... ", keybinds:"Ctrl+P", disabled: true },
            { name: "Exit", keybinds:"Ctrl+Q", disabled: false },
          ],
        },
        {
          name: "Edit",
          submenu: [
            { name: "Copy... ", keybinds:"Ctrl+C", disabled: false },
            { name: "Paste... ", keybinds: "Ctrl+V", disabled: false },
            { name: "Undo... ", keybinds: "Ctrl+Z", disabled: true },
            { name: "Redo... ", keybinds: "Ctrl+Y", disabled: true },
            { name: "Cut...", keybinds:"Ctrl+X", disabled: false },
            { name: "Select All...", keybinds:"Ctrl+A", disabled: false },
          ],
        },
        {
          name: "View",
          submenu: [
            { name: "Zoom In", disabled: true },
            { name: "Zoom Out", disabled: true },
            
          ],
        },
        {
          name: "Insert",
          submenu: [
            { name: "Image", keybinds:"Ctrl+I", disabled: false },
            { name: "Link", keybinds:"Ctrl+L", disabled: false },
            { name: "Table", keybinds:"Ctrl+T", disabled: true },
          ],
        },
        {
          name: "Format",
          submenu: [
            { name: "Bold", keybinds:"Ctrl+B", disabled: false },
            { name: "Italic", keybinds:"Ctrl+I", disabled: false },
            { name: "Underline", keybinds:"Ctrl+U", disabled: false },
          ],
        },
        {
          name: "Help",
          submenu: [
            { name: "About", disabled: false },
            { name: "Contact", disabled: false },
            { name: "Documentation", disabled: false },
          ],
        },
      ],
      url: window.location.href || "https://ppetar.dev",
    };
  },
  methods: {
    moveForward() {
      this.$parent.$refs.portfolio.moveForward();
    },
    moveBackward() {
      this.$parent.$refs.portfolio.moveBackward();
    },
    refreshContent() {
      this.$parent.$refs.portfolio.refreshContent();
    },
  },
};
</script>

<style scoped>
.menu-bar ul {
  list-style: none;
  margin: 0.25rem;
  padding: 2px 4px;
  border-top: 3px solid #ffffff;
  border-left: 4px solid #ffffff;
  border-bottom: 2px solid #7a7a7a;
  border-right: 2px solid #7a7a7a;
}

.menu-bar li:hover {
  border-top-color: #7a7a7a;
  border-left-color: #7a7a7a;
  border-bottom-color: #ffffff;
  border-right-color: #ffffff;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #2a2a2a;
}

.menu-bar li {
  position: relative;
}

.menu-bar .submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 15;
}

.submenu {
  border-left: 1px solid white;
  border-top: 1px solid white;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
}

.menu-bar li:hover .submenu {
  display: block;
  background-color: #c7c9c8;
}

.submenu li {
  padding: 8px 24px;
  white-space: nowrap;
}

.submenu li:hover {
  background-color: #010081;
  color: #fff;
}

.address-bar {
  background-color: #c7c9c8;
  border-top: 3px solid #ffffff;
  border-left: 4px solid #ffffff;
  border-bottom: 2px solid #7a7a7a;
  border-right: 2px solid #7a7a7a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
  margin: 0 4px;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #7a7a7a;
}

.address-bar input {
  background-image: url("/internet.png");
  background-repeat: no-repeat;
  background-position: 5px center;
  padding-left: 2em;
}

.function-buttons {
  background-color: #c7c9c8;
  border-top: 3px solid #ffffff;
  border-left: 4px solid #ffffff;
  border-bottom: 2px solid #7a7a7a;
  border-right: 2px solid #7a7a7a;
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #7a7a7a;
  display: flex;
  margin: 0.25rem;
}

.divide-line {
  display: inline-block;
  height: full;
  width: 0.1rem;
  background: linear-gradient(to right, #808080 50%, #ffffff 50%);
  margin: 0 0.5rem;
  vertical-align: middle;
}
</style>

<template>
  <div class="menu-bar">
    <ul class="flex space-x-4 relative text-base">
      <li
        v-for="(menuItem, index) in menuItems"
        :key="index"
        class="group relative px-2 cursor-pointer"
      >
        {{ menuItem.name }}
        <ul
          v-if="menuItem.submenu && menuItem.submenu.length"
          class="submenu absolute left-0 mt-2 hidden group-hover:block"
        >
          <li
            v-for="(subItem, subIndex) in menuItem.submenu"
            :key="subIndex"
            :class="[
              'px-4 py-2 cursor-pointer hover:bg-gray-200',
              subItem.disabled
                ? 'text-gray-400 cursor-not-allowed hover:bg-transparent'
                : '',
            ]"
            @click="!subItem.disabled && handleClick(subItem.name)"
          >
            {{ subItem.name }}<span class="pl-2">{{ subItem.keybinds }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="function-buttons">
    <div>
      <button class="text-sm mr-2 grayscale text-black hover:grayscale-0" @click="moveBackward">
        <img src="/back.png" alt="back button" class="m-auto w-6 h-6" />
        Back
      </button>
      <button
        class="text-sm mr-2 grayscale text-black hover:grayscale-0"
        @click="moveForward"
      >
        <img src="/forward.png" alt="back button" class="m-auto w-6 h-6" />
        Forward
      </button>
      <button class="text-sm mr-2 grayscale text-black hover:grayscale-0">
        <img src="/stop.png" alt="favorites" class="m-auto w-6 h-6" />
        Stop
      </button>
      <button class="text-sm mr-2 grayscale text-black hover:grayscale-0" @click="refreshContent">
        <img src="/refresh.png" alt="back button" class="m-auto w-6 h-6" />
        Refresh
      </button>
    </div>
    <div class="divide-line"></div>
    <div>
      <button class="text-sm mx-2 grayscale text-black hover:grayscale-0">
        <img src="/home.png" alt="home" class="m-auto w-6 h-6" />Home
      </button>
      <button
        class="text-sm mr-2 grayscale text-black hover:grayscale-0"
      >
        <img src="/search_web.png" alt="favorites" class="m-auto w-6 h-6" />
        Search
      </button>
      <button class="text-sm mr-2 grayscale text-black">
        <img
          src="/search_directory.png"
          alt="favorites"
          class="m-auto w-6 h-6"
        />
        Favorites
      </button>
      <button class="text-sm mr-2 grayscale text-black">
        <img src="/history.png" alt="history" class="m-auto w-6 h-6" />
        History
      </button>
    </div>
  </div>
  <div class="address-bar text-lg">
    Address
    <input
      v-model="url"
      type="text"
      class="w-full ml-2 text-base"
      placeholder="Enter URL"
      @keydown.enter="openURL"
    />
  </div>
</template>
