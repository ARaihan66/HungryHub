//export default {
//  content: [
//    "./index.html",
//    "./src/**/*.{js,ts,jsx,tsx}",
//  ],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}


import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

const enhancedConfig = withMT(config);

export default enhancedConfig;

