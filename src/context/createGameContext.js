const createGameContext = ({
  cubeLength,
  setCubeLength,
  userPlayer,
  setUserPlayer,
  cpu,
  setCpu,
}) => ({
  cubeLength,
  userPlayer,
  cpu,
  changeCubeLength(length) {
    setCubeLength(Number(length));
  },
  changeUserPlayer(player) {
    setUserPlayer(player);
  },
  changeCpu(status) {
    setCpu(status);
  },
});

export default createGameContext;
