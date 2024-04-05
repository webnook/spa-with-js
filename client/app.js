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

const sidebarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".nav");
const root = document.documentElement;
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("mini-sidebar");
  if (sidebar.classList.contains("mini-sidebar")) {
    root.style.setProperty("--nav-width", 70 + "px");
  } else {
    root.style.setProperty("--nav-width", 250 + "px");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
