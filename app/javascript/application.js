// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "trix"
import "@rails/actiontext"

// Turbo.StreamActions.redirect = function () {
//   Turbo.visit(this.target);
// };

document.addEventListener("turbo:render", function (e) {
  console.log(e.detail);
});
document.addEventListener("turbo:before-morph-element", function () {
  console.log("turbo:before-morph-element!!")
});
document.addEventListener("turbo:load", function () {
  console.log("turbo:load!!")
});
