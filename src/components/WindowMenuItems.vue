<script>
export default {
  name: "WindowMenuItems",
  data() {
    return {
      menuItems: [
        {
          name: "File",
          submenu: [
            { name: "New... ", keybinds: "Ctrl+N", disabled: true },
            { name: "Open... ", keybinds: "Ctrl+O", disabled: false },
            { name: "Save... ", keybinds: "Ctrl+S", disabled: false },
            { name: "Save as... ", keybinds: "Ctrl+Shift+S", disabled: true },
            { name: "Exit ", keybinds: "Ctrl+Q", disabled: false },
          ],
        },
        {
          name: "Edit",
          submenu: [
            { name: "Copy... ", keybinds: "Ctrl+C", disabled: false },
            { name: "Paste... ", keybinds: "Ctrl+V", disabled: true },
            { name: "Cut...", keybinds: "Ctrl+X", disabled: false },
            { name: "Select All...", keybinds: "Ctrl+A", disabled: true },
          ],
        },
        {
          name: "Search",
          submenu: [
            { name: "Find... ", keybinds: "F3", disabled: true },
            { name: "Find Next...", keybinds: "F4", disabled: true },
          ],
        },
        {
          name: "Help",
          submenu: [
            { name: "About", disabled: true },
            { name: "Documentation", disabled: false },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.menu-bar ul {
  list-style: none;
  margin: 0.25rem;
  padding: 2px 4px;
  border-bottom: 2px solid #979797;
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
</style>

<template>
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
            'px-2 py-2 cursor-pointer hover:bg-gray-200 flex',
            subItem.disabled
              ? 'text-gray-400 cursor-not-allowed hover:bg-transparent'
              : '',
          ]"
          @click="!subItem.disabled && handleClick(subItem.name)"
        >
          <span class="">{{ subItem.name }}</span>
          <span class="pl-2">{{ subItem.keybinds }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
