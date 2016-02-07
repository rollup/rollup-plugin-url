import babel from "rollup-plugin-babel";

const external = [
  "rollup-pluginutils",
  "mime",
  "crypto",
  "path",
  "fs",
];

export default {
  entry: "src/index.js",
  external,
  plugins: [babel({
    babelrc: false,
    presets: ["es2015-rollup"],
  })],
  format: "cjs",
  dest: "dist/index.js",
};
