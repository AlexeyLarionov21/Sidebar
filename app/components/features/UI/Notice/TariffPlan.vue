<template>
  <Transition name="fade">
    <div :class="$style.container" v-if="isShow">
      <div :class="$style.closeSector">
        <button :class="$style.buttonClose" @click="toggleClose">
          <Icon
            icon="material-symbols:close-rounded"
            :height="iconSize"
            :width="iconSize"
          />
        </button>
      </div>
      <div :class="$style.textBlock">
        <span :class="$style.title">{{ title }}</span>
        <span :class="$style.text">{{ text }}</span>
      </div>
      <component v-if="component" :is="component" v-bind="componentProps" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { closeCard } from "./ShowCard";
import { Icon } from "@iconify/vue";
import type { Component } from "vue";

interface Props {
  title: string;
  text: string;
  component?: Component;
  componentProps?: Record<string, any>;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Some Text",
});

const { toggleClose, isShow } = closeCard();

const iconSize = 10;
</script>

<style module lang="scss" src="./TariffPlan.module.scss" />
