module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
    {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      env: {
        development: {
          plugins: ["react-refresh/babel"],
        },
      },
    },
  ],
};
