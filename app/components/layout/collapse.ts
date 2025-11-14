import { ref } from "vue";

export const collapseMode = () => {
  const collapse = ref(false);

  const toggleCollapse = () => {
    collapse.value = !collapse.value;
  };

  return {
    collapse,
    toggleCollapse,
  };
};
