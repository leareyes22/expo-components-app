import ThemedCard from "@/components/ThemedCard";
import ThemedText from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import ThemedView from "@/components/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
              placeholder="Complete Name"
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
              placeholder="Email Address"
            />
          </ThemedCard>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
              placeholder="Phone Number"
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard
            className="my-2"
            style={{
              marginBottom: isIOS ? 100 : 10,
            }}
          >
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
