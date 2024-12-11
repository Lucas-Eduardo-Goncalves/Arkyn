import { Button, Divider, IconButton, Tooltip } from "@arkyn/components";
import { AudioUploadHasFileContentProps } from "@arkyn/types";
import { Pause, Play, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Slider } from "../../Slider";

import {
  AudioPlayer,
  ButtonsContainer,
  HasFileContentContainer,
} from "./styles";

function HasFileContent(props: AudioUploadHasFileContentProps) {
  const {
    filePath,
    disabled,
    acceptAudio,
    handleSelectFile,
    isLoading,
    reSendAudio,
    changeAudioButtonText,
  } = props;

  const [sliderValue, setSliderValue] = useState(0);
  const audioReference = useRef<HTMLAudioElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioReference.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => {
      const totalTime = audioElement.duration;
      const currentTime = audioElement.currentTime;

      const value = (currentTime / totalTime) * 100;
      setSliderValue(value);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  function handleSliderChange(value: number) {
    const audioElement = audioReference.current;
    if (!audioElement) return;

    const totalTime = audioElement.duration;
    const currentTime = (value / 100) * totalTime;

    audioElement.currentTime = currentTime;
  }

  function handlePlayAudio() {
    audioReference.current?.play();
    setIsPlaying(true);
  }

  function handlePauseAudio() {
    audioReference.current?.pause();
    setIsPlaying(false);
  }

  function handleToggleAudio() {
    if (isPlaying) handlePauseAudio();
    else handlePlayAudio();
  }

  const currentTime = audioReference.current?.currentTime;
  const totalTime = audioReference.current?.duration;

  function formatTime(time?: number) {
    if (!time) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  if (isDragging || !isPlaying) {
    audioReference.current?.pause();
  } else if (isPlaying) {
    audioReference.current?.play();
  }

  function handleClick() {
    if (disabled) return;

    const input = document.createElement("input");

    input.type = "file";
    input.accept = acceptAudio;

    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) handleSelectFile(file);
    };

    input.click();
  }

  return (
    <HasFileContentContainer>
      <audio ref={audioReference} src={filePath} onEnded={handlePauseAudio} />

      <AudioPlayer>
        <button type="button" onClick={handleToggleAudio}>
          {isPlaying && <Pause />}
          {!isPlaying && <Play />}
        </button>

        <p>{formatTime(currentTime)}</p>

        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          onDragging={setIsDragging}
        />

        <p>{formatTime(totalTime)}</p>
      </AudioPlayer>

      <Divider />

      <ButtonsContainer>
        {!!reSendAudio && (
          <Tooltip orientation="bottom" text="Reenviar imagem">
            <IconButton
              type="button"
              aria-label="resend image"
              variant="outline"
              scheme="danger"
              size="sm"
              isLoading={isLoading}
              onClick={reSendAudio}
              icon={RefreshCw}
              disabled={disabled}
            />
          </Tooltip>
        )}

        <Button
          isLoading={isLoading}
          onClick={handleClick}
          variant="outline"
          size="sm"
          type="button"
          disabled={disabled}
        >
          {changeAudioButtonText}
        </Button>
      </ButtonsContainer>
    </HasFileContentContainer>
  );
}

export { HasFileContent };
