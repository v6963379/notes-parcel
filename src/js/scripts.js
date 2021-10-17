import { HeaderComponent } from "../components/header.components";
import { NavigationComponent } from "../components/navigation.components";
import { CreateComponent } from "../components/create.components";
import { FavoriteComponent } from "../components/favorite.components";
import { PostsComponent } from "../components/posts.components";

new HeaderComponent("header");
const navigation = new NavigationComponent("navigation");
const create = new CreateComponent("create");
const favorite = new FavoriteComponent("fovorite");
const posts = new PostsComponent("posts");

navigation.registerTabs([
  { name: "create", component: create },
  { name: "posts", component: posts },
  { name: "favorite", component: favorite },
]);
