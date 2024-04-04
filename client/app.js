import Dashboard from "./pages/Dashboard.js";
import Products from "./pages/Products.js";
import Blog from "./pages/Blog.js";
import NotFound from "./pages/NotFound.js";
function router() {
  const routes = [
    {
      path: "/",
      view: Dashboard,
    },
    {
      path: "/products",
      view: Products,
    },
    {
      path: "/blog",
      view: Blog,
    },
  ];
  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatched: location.pathname === item.path,
    };
  });
  let match = potentialRoutes.find((route) => route.isMatched);
  if (!match) {
    match = {
      route: {
        path: "/not-found",
        view: NotFound,
      },
      isMatched: true,
    };
  }
  document.querySelector("#app").innerHTML = match.route.view();
}
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
