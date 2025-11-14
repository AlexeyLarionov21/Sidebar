import { ref } from "vue";

const activeID = ref<string | number>("point_1");

export const useMenuSelection = () => {
  const setActive = (id: string | number) => {
    activeID.value = id;
  };

  const isActive = (id: string | number) => activeID.value === id;

  return {
    activeID,
    setActive,
    isActive,
  };
};
