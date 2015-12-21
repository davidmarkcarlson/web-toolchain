import 'lib/doc_ready';
import 'lib/sample.js'
// import App from './App.jsx!';

console.log("hi there");
// use an anonymous function
docReady(function() {
  console.log("loaded");
});

