<template>
  <button
    :class="[$style.button, collapse && $style.collapsed]"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" module src="./ButtonAdd.module.scss" />

<script setup lang="ts">
import { collapseMode } from "@/components/layout/collapse";

interface Props {
  label: string;
  onClick?: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  label: "button label",
  onClick: () => console.log("click"),
});

const { collapse } = collapseMode();
</script>
