import {
    showScreen
} from "./utils";
import intro from "./screens/intro";
console.log(intro().render())

showScreen(intro().element);
