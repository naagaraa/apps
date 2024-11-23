module.exports = {
  apps: [
    {
      name: "apps-health",
      port: "3000",
      exec_mode: "fork_mode",
      //   exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
