function router() {
  const routes = [
    {
      path: "/",
      view: () => console.log("dashboard Page"),
    },
    {
      path: "/products",
      view: () => console.log("products Page"),
    },
    {
      path: "/blog",
      view: () => console.log("blog Page"),
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
        view: () => console.log("not-found Page"),
      },
      isMatched: true,
    };
  }
  console.log(match.route.view());
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});
