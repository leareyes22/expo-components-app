import WaveformVisualizer from "@/components/audio-notes/WaveformVisualizer";
import ThemedButton from "@/components/ThemedButton";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioPlayer,
  useAudioRecorder,
  useAudioRecorderState,
} from "expo-audio";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

const formatSeconds = (seconds: number = 0) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
};

const AudioNotesScreen = () => {
  const [audioUri, setAudioUri] = useState<string | null>(null);
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(audioRecorder);
  const player = useAudioPlayer(audioUri ?? undefined);

  const record = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
  };

  const stopRecording = async () => {
    // The recording will be available on `audioRecorder.uri`.
    await audioRecorder.stop();
    setAudioUri(audioRecorder.uri);
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert(
          "Permission to access microphone was denied. Please enable it manually into application permissions."
        );
      }

      setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    })();
  }, []);

  return (
    <ThemedView className="flex-1 items-center justify-center">
      <ThemedButton
        className="w-[200px]"
        onPress={recorderState.isRecording ? stopRecording : record}
      >
        {recorderState.isRecording ? "Stop Recording" : "Start Recording"}
      </ThemedButton>

      {audioUri && (
        <View className="mt-5">
          <ThemedButton
            className="w-[200px] bg-light-secondary dark:bg-dark-secondary"
            onPress={() => player.play()}
          >
            ▶ Play
          </ThemedButton>
          <ThemedButton
            className="mt-2 mb-2 w-[200px] bg-light-secondary dark:bg-dark-secondary"
            onPress={() => {
              player.pause();
            }}
          >
            ⏸ Pause
          </ThemedButton>
          <ThemedButton
            className="mb-2 w-[200px] bg-light-secondary dark:bg-dark-secondary"
            onPress={() => {
              player.pause();
              player.seekTo(0);
            }}
          >
            ⏹ Stop
          </ThemedButton>
          <ThemedText className="mt-2">
            {formatSeconds(player.currentTime)} /{" "}
            {formatSeconds(player.duration)}
          </ThemedText>
          <WaveformVisualizer playing={player.playing} />
        </View>
      )}
    </ThemedView>
  );
};

export default AudioNotesScreen;
