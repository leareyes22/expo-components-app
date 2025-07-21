import MenuItem from "@/components/MenuItem";
import ThemedView from "@/components/ThemedView";
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import { View } from "react-native";

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isLast={index === animationMenuRoutes.length - 1}
          isFirst={index === 0}
        />
      ))}

      <View className="my-5" />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isLast={index === uiMenuRoutes.length - 1}
          isFirst={index === 0}
        />
      ))}

      <View className="my-5" />

      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isLast={index === menuRoutes.length - 1}
          isFirst={index === 0}
        />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
