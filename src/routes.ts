import { RouteConfig } from "react-router-config";
import AllPosts from "./pages/AllPosts";
import PostsBySpecifiedUser from "./pages/PostsBySpecifiedUser";
import Root from "./pages/Root";

const routes: RouteConfig[] = [
  {
    component: Root,
    path: "/",
    routes: [
      {
        exact: true,
        path: "/",
        component: AllPosts,
      },
      {
        exact: true,
        path: "/global-timeline",
        component: AllPosts,
      },
      {
        exact: true,
        path: "/:userId",
        component: PostsBySpecifiedUser,
      },
    ],
  },
];

export default routes;
