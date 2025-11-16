export const closeCard = () => {
  const isShow = useState("tariff-card-visible", () => true);

  const toggleClose = () => {
    isShow.value = false;
  };

  const toggleOpen = () => {
    isShow.value = true;
  };

  return {
    toggleClose,
    toggleOpen,
    isShow,
  };
};
