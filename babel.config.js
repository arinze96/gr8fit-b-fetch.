module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ts",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@": "./",
            "@src": "./src",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@mock": "./src/mock",
            "@navigation": "./src/navigation",
            "@screens": "./src/Screens",
            "@socket": "./src/socket",
            "@store": "./src/store",
            "@theme": "./src/theme",
            "@assets": "./assets",
            "@types": "./types",
            "@interface": "./interface",
            "@utils": "./src/utils",
          },
        },
      ],
    ]
  };
};
