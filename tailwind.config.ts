import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFFDF5",
          "200": "#FFFBE5",
          "300": "#E8E3DA",
          DEFAULT: "#6E6B67",
        },
        accent: {
          "100": "#E0EFDE",
          "200": "#569573",
          "300": "#406C55",
        },
        neutral: {
          "100": "#F8F9FA",
          "200": "#DEE2E6",
          "300": "#ADB5BD",
          "400": "#6C757D",
          "500": "#343A40",
          "600": "#212529",
        },
        special: {
          info: "#4A72FF",
          success: "#2CC585",
          warning: "#FFB054",
          danger: "#D65F5F",
        },
      },
      fontSize: {
        h1: [
          "2.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        "h1-sm": [
          "1.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        h2: [
          "2rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        "h2-sm": [
          "1.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        h3: [
          "1.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        "h4-sm": [
          "1.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        h6: [
          "1rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.1em",
          },
        ],
        "fs-1": [
          "1rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.05em",
          },
        ],
      },
    },
  },
};
