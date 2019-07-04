import {
    showScreen
} from "./utils";
import intro from "./screens/intro";
console.log(intro())
console.log(intro().template)
console.log(intro().element)
console.log(intro().render())

showScreen(intro().element);
