var callbacks = [];
var readyFired = false;
var readyEventHandlersInstalled = false;

function ready() {
  if (!readyFired) {
    // this must be set to true before we start calling callbacks
    readyFired = true;
    callbacks.forEach((c) => c.fn.call(window, c.ctx));
    // allow any closures held by these functions to free
    callbacks = [];
  }
}

function readyStateChange() {
  if ( document.readyState === "complete" ) {
    ready();
  }
}

export default function doc_ready(callback, context) {
  // if ready has already fired, then just schedule the callback
  // to fire asynchronously, but right away
  if (readyFired) {
    setTimeout(function() {callback(context);}, 1);
    return;
  } else {
    // add the function and context to the list
    callbacks.push({fn: callback, ctx: context});
  }
  // if document already ready to go, schedule the ready function to run
  if (document.readyState === "complete") {
    setTimeout(ready, 1);
  } else if (!readyEventHandlersInstalled) {
    readyEventHandlersInstalled = true;
    document.addEventListener("DOMContentLoaded", ready, false);
  }
}
