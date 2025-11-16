<template>
  <nav>
    <ul :class="$style.menu">
      <li
        v-for="item in menu"
        :key="item.id"
        :class="[$style.link, isActive(item.id) && $style.active]"
      >
        <NuxtLink
          :to="item.to"
          :class="[$style.router, isCollapsed && $style.collapsed]"
          @click="setActive(item.id)"
        >
          <span :class="$style.left">
            <Icon :icon="item.icon" :height="sizeIcon" :width="sizeIcon" />

            <span :class="$style.label">{{ item.label }}</span>
          </span>
          <span v-if="item.badge" :class="$style.badge">{{ item.badge }}</span>
        </NuxtLink>
        <div v-if="item.badge && isCollapsed" :class="$style.badgeMarker"></div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useMenuSelection } from "@/composables/useMenuSelection";
import type { Item } from "~/types/item";
import { useCollapse } from "@/composables/useCollapse";

const { setActive, isActive } = useMenuSelection();
const { isCollapsed } = useCollapse();

defineProps<{
  menu: Item[];
}>();

const sizeIcon = 20;
</script>

<style module lang="scss" src="./Menu.module.scss" />
