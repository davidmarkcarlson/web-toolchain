import doc_ready from 'lib/doc_ready';
import 'lib/sample.js'

console.log("hi there");
// use an anonymous function
doc_ready(function() {
  console.log("loaded");
});

