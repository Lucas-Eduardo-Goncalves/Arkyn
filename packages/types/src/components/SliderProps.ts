type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  disableDrag?: boolean;
  onDragging?: (value: boolean) => void;
};

export type { SliderProps };
