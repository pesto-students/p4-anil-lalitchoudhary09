const initalstate = 1;
const onOff = (state = initalstate, action) => {
  switch (action.type) {
    case "FLIP":
      return (state = state ? 0 : 1);
    default:
      return state;
  }
};

export default onOff;
