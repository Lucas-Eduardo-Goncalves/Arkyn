import { View } from "./_View";
import { action } from "./_action";
import { loader } from "./_loader";

const LayoutServer = { action, loader };
const LayoutClient = { View };

export { LayoutClient, LayoutServer };
