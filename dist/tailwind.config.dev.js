"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs",, "./public/**/*.css", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 6px 8px rgba(0, 0, 0, 0.1)',
        'xl': '0 8px 10px rgba(0, 0, 0, 0.1)',
        '2xl': '0 10px 12px rgba(0, 0, 0, 0.1)',
        'shadowText': '0 4px 4px rgb(107 114 128)'
      }
    }
  },
  plugins: [require("tailwindcss-textshadow")]
};