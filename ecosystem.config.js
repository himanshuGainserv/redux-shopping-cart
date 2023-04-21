module.exports = {
  apps: [
    {
      name: "react-redux",
      script: "serve -s build",
      watch: true,
      ignore_watch: ["node_modules"],
    },
  ],
};
