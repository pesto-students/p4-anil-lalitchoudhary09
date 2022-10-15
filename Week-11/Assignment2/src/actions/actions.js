const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const reset = () => {
  return {
    type: "RESET"
  };
};

export { increment, reset };
