export const useCollapse = () => {
  const isCollapsed = useState("sidebar-collapse", () => false);

  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  return {
    isCollapsed,
    toggleCollapse,
  };
};
