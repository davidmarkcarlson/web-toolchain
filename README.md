Web Toolchain project
=====================

This code uses JSPM. To install:

- Make sure you have JSPM installed globally. "npm install -g jspm". You may need sudo or admin console.
- cd to the directory and "npm install" then "jspm install".
- By default, everything is loaded individually. To make it faster: "jspm bundle-sfx lib/main.js dist/app.js --minify"
