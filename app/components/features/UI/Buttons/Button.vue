<template>
  <button
    :class="[$style.button, isCollapsed && $style.collapsed]"
    @click="onClick"
  >
    <span> {{ label }}</span>
    <Icon v-if="icon" :icon="icon" :height="iconSize" :width="iconSize" />
  </button>
</template>

<style lang="scss" module src="./Button.module.scss" />

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useCollapse } from "@/composables/useCollapse";

interface Props {
  label: string;
  icon?: string;
  iconSize?: number;
  onClick?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  label: "button label",
  onClick: () => console.log("click"),
  iconSize: 14,
});

const { isCollapsed } = useCollapse();
</script>
