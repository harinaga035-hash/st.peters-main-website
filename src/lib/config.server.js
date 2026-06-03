function getServerConfig() {
  return {
    nodeEnv: import.meta.env.MODE,
  };
}
export { getServerConfig };
