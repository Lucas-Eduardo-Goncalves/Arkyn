import { SliderProps } from "@arkyn/types";
import { useEffect, useRef, useState } from "react";

import "./styles.css";

function Slider(props: SliderProps) {
  const { onChange, value, disableDrag = false, onDragging } = props;
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (disableDrag) return;
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newValue = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);

    onChange(newValue);
  };

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newValue = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);

    onChange(newValue);
  };

  useEffect(() => {
    if (isDragging) {
      onDragging && onDragging(true);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      onDragging && onDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const isDraggingClass = isDragging ? "isDragging" : "isNotDragging";
  const sliderClassname = `arkynSliderTrack ${isDraggingClass}`;

  return (
    <div
      className={sliderClassname}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onClick={handleSliderClick}
    >
      <div className="arkynSliderFill" style={{ width: `${value}%` }} />
      <div className="arkynSliderThumb" style={{ left: `${value}%` }} />
    </div>
  );
}

export { Slider };
