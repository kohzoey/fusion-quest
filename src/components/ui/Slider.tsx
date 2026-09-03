import { useId } from "react";
import type { SliderSpec } from "../../types/fusionLab";
import styles from "./Slider.module.css";

interface SliderProps {
  label: string;
  value: number;
  spec: SliderSpec;
  onChange: (value: number) => void;
  /** Formats the current value for display, e.g. "1.0 × 10^20 m⁻³". */
  formatValue: (value: number) => string;
}

/**
 * Wraps a native <input type="range"> (for built-in keyboard and
 * touch support — see accessibility strategy) and handles the
 * linear/log scale mapping declaratively from SliderSpec, so no
 * interaction component needs to re-derive the log-scale math.
 */
export function Slider({ label, value, spec, onChange, formatValue }: SliderProps) {
  const id = useId();
  const isLog = spec.scale === "log";

  const toSliderPosition = (v: number) =>
    isLog ? Math.log10(v) : v;
  const fromSliderPosition = (pos: number) =>
    isLog ? Math.pow(10, pos) : pos;

  const sliderMin = toSliderPosition(spec.min);
  const sliderMax = toSliderPosition(spec.max);
  const sliderValue = toSliderPosition(value);
  const step = (sliderMax - sliderMin) / 500;

  return (
    <div className={styles.wrapper}>
      <div className={styles.labelRow}>
        <label htmlFor={id}>{label}</label>
        <span className={styles.value}>{formatValue(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={sliderMin}
        max={sliderMax}
        step={step}
        value={sliderValue}
        onChange={(e) => onChange(fromSliderPosition(Number(e.target.value)))}
        className={styles.range}
        aria-valuetext={formatValue(value)}
      />
    </div>
  );
}
