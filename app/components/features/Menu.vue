<template>
  <nav>
    <ul :class="$style.menu">
      <li
        v-for="item in menuItems"
        :key="item.id"
        :class="[$style.link, isActive(item.id) && $style.active]"
      >
        <router-link
          :to="item.to"
          :class="$style.router"
          @click="setActive(item.id)"
        >
          <span :class="$style.left">
            <Icon :icon="item.icon" />
            <span>{{ item.label }}</span>
          </span>
          <span v-if="item.badge" :class="$style.badge">{{ item.badge }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { menuItems } from "~/models/MenuItems";
import { useMenuSelection } from "@/composables/useMenuSelection";

const { activeID, setActive, isActive } = useMenuSelection();

defineProps<{
  collapsed: boolean;
}>();
</script>

<style module lang="scss" src="./Menu.module.scss" />
