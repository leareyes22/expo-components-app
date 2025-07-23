import ThemedCard from "@/components/ThemedCard";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { SectionList } from "react-native";
import { houses } from "./data";

const SectionListScreen = () => {
  return (
    <ThemedView margin>
      <ThemedCard>
        <SectionList
          sections={houses}
          renderItem={({ item }) => (
            <ThemedText type="normal">{item}</ThemedText>
          )}
          ListHeaderComponent={() => (
            <ThemedText type="h1" className="mb-3 font-bold">
              Personajes
            </ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedText
              type="h1"
              className="bg-light-background dark:bg-dark-background rounded p-2"
            >
              {section.title}
            </ThemedText>
          )}
          stickySectionHeadersEnabled
          ListFooterComponent={() => (
            <ThemedText
              type="h1"
              className="bg-light-background dark:bg-dark-background p-2 mb-10 rounded"
            >
              Secciones: {houses.length}
            </ThemedText>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default SectionListScreen;
