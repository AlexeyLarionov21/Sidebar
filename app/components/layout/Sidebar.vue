<template>
  <aside :class="[$style.sidebar, collapse && $style.collapsed]">
    <div :class="$style.container">
      <div :class="$style.logoContainer">
        <p>Logo</p>
        <button @click="toggleCollapse" :class="$style.buttonCollapse">
          <Icon height="20" width="20" icon="iconoir:sidebar-collapse" />
        </button>
      </div>
      <div>
        <div :class="$style.createNewContainer">
          <ButtonAdd label="Create new +" />
        </div>
      </div>
      <div :class="$style.listMenu">
        <Menu :collapsed="collapse" />
      </div>
      <div :class="$style.footer">
        <span>footer</span>
      </div>
    </div>
  </aside>
</template>

<style module lang="scss" src="./Sidebar.module.scss" />

<script setup lang="ts">
import { collapseMode } from "./collapse";
import { Icon } from "@iconify/vue";
import Menu from "../features/Menu.vue";
import ButtonAdd from "../features/UI/Buttons/ButtonAdd.vue";

const { collapse, toggleCollapse } = collapseMode();
</script>
