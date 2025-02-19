// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "mycoinpoll",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: ".output/server/index.mjs",
      env_file: ".env",
    },
  ],
};
