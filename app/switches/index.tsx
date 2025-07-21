import ThemedCard from "@/components/ThemedCard";
import ThemedSwitch from "@/components/ThemedSwitch";
import ThemedView from "@/components/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        <ThemedSwitch
          className="mb-2"
          text="Active"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        />

        <ThemedSwitch
          className="mb-2"
          text="Hungry"
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          value={state.isHungry}
        />

        <ThemedSwitch
          className="mb-2"
          text="Happy"
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          value={state.isHappy}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
