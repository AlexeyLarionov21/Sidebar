<template>
  <aside :class="[$style.sidebar, isCollapsed && $style.collapsed]">
    <div :class="$style.container">
      <div :class="$style.logoContainer">
        <p :class="$style.logo">Logo</p>
        <button @click="handleCollapse" :class="$style.buttonCollapse">
          <Icon
            :height="iconSize"
            :width="iconSize"
            :icon="
              isCollapsed ? 'lucide:sidebar-open' : 'iconoir:sidebar-collapse'
            "
          />
        </button>
      </div>
      <div>
        <div :class="$style.createNewContainer">
          <Button label="Create new" icon="ic:round-plus" />
        </div>
      </div>
      <div :class="$style.listMenu">
        <Menu :menu="menuItems" />
      </div>
      <div :class="$style.upgradeBlock">
        <TariffPlan
          :title="title"
          :text="text"
          :component="Button"
          :componentProps="{
            label: textButton,
            onClick: () => console.log('clicK button'),
          }"
        />
      </div>
      <div :class="$style.footer">
        <Menu :menu="footerMenu" />
      </div>
    </div>
  </aside>
</template>

<style module lang="scss" src="./Sidebar.module.scss" />

<script setup lang="ts">
import { useCollapse } from "@/composables/useCollapse";
import { Icon } from "@iconify/vue";
import Menu from "../features/Menu.vue";
import Button from "../features/UI/Buttons/Button.vue";
import TariffPlan from "../features/UI/Notice/TariffPlan.vue";
import { TariffData } from "~/models/Tariff";
import { menuItems, footerMenu } from "~/models/MenuItems";

import { closeCard } from "@/components/features/UI/Notice/ShowCard";

const { toggleClose, toggleOpen } = closeCard();

const { isCollapsed, toggleCollapse } = useCollapse();
const { title, text, textButton } = TariffData();

const iconSize = 20;
const delay = 400;

const handleCollapse = () => {
  if (isCollapsed.value) {
    setTimeout(() => {
      toggleOpen();
    }, delay);
  } else {
    toggleClose();
  }
  toggleCollapse();
};
</script>
