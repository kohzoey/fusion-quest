import { useMemo, useState } from "react";
import type { FusionLabConfig } from "../../types/fusionLab";
import { resolveFusionLabStatus } from "../../types/fusionLab";
import { temperatureKeV, tripleProduct, referenceRatio, formatScientific } from "../../utils/fusionLabMath";
import { Slider } from "../ui/Slider";
import { StatusBadge } from "../ui/StatusBadge";
import { Disclaimer } from "../ui/Disclaimer";
import { Card } from "../ui/Card";
import styles from "./FusionLab.module.css";

interface FusionLabProps {
  config: FusionLabConfig;
}

export function FusionLab({ config }: FusionLabProps) {
  const [temperatureMK, setTemperatureMK] = useState(config.temperature.default);
  const [density, setDensity] = useState(config.density.default);
  const [confinementTimeS, setConfinementTimeS] = useState(config.confinementTime.default);
  const [reachedOnce, setReachedOnce] = useState(false);

  const tKeV = useMemo(() => temperatureKeV(temperatureMK, config), [temperatureMK, config]);
  const tp = useMemo(
    () => tripleProduct(density, temperatureMK, confinementTimeS, config),
    [density, temperatureMK, confinementTimeS, config]
  );
  const ratio = useMemo(() => referenceRatio(tp, config), [tp, config]);
  const status = useMemo(
    () => resolveFusionLabStatus(ratio, config.statusThresholds),
    [ratio, config.statusThresholds]
  );

  // Tracks whether the student has ever reached "reached", across
  // slider changes. Deliberately not a useEffect: this is React's
  // documented "adjusting state during render" pattern for storing
  // information based on a value that changed since the last
  // render — an effect here would fire an extra, unnecessary
  // render on every status change instead of updating in the same
  // pass. See https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
  const [prevStatus, setPrevStatus] = useState(status);
  if (status !== prevStatus) {
    setPrevStatus(status);
    if (status === "reached") {
      setReachedOnce(true);
    }
  }

  const iterRatio = referenceRatio(config.iterMarker.tripleProduct, config);
  // Gauge is scaled logarithmically across a fixed display range so both
  // the educational reference and the (much larger) ITER marker fit on
  // one axis alongside typical student-reachable values.
  const gaugeMin = -3; // 10^-3 x reference
  const gaugeMax = 2; // 10^2 x reference
  const toGaugePercent = (r: number) => {
    const clamped = Math.max(gaugeMin, Math.min(gaugeMax, Math.log10(Math.max(r, 1e-9))));
    return ((clamped - gaugeMin) / (gaugeMax - gaugeMin)) * 100;
  };

  return (
    <div className={styles.lab}>
      <div className={styles.controls}>
        <Slider
          label="Temperature"
          value={temperatureMK}
          spec={config.temperature}
          onChange={setTemperatureMK}
          formatValue={(v) => `${v.toFixed(0)} MK`}
        />
        <Slider
          label="Density"
          value={density}
          spec={config.density}
          onChange={setDensity}
          formatValue={(v) => `${formatScientific(v, 1)} m⁻³`}
        />
        <Slider
          label="Energy confinement time"
          value={confinementTimeS}
          spec={config.confinementTime}
          onChange={setConfinementTimeS}
          formatValue={(v) => `${v.toFixed(2)} s`}
        />
      </div>

      <Card raised className={styles.readout}>
        <dl className={styles.readoutGrid}>
          <div>
            <dt>Temperature</dt>
            <dd className="numeric">{tKeV.toFixed(2)} keV</dd>
          </div>
          <div>
            <dt>Triple product</dt>
            <dd className="numeric">{formatScientific(tp)} m⁻³·keV·s</dd>
          </div>
                    <div>
            <dt>Ratio to educational reference</dt>
            <dd className="numeric">
              {ratio.toFixed(4)} <span className={styles.percentHint}>({(ratio * 100).toFixed(1)}%)</span>
            </dd>
          </div>
        </dl>
        <StatusBadge status={status} />
      </Card>

      <div className={styles.gauge} role="img" aria-label={`Your plasma is at ${ratio.toFixed(3)} times the educational reference level, compared with ITER's projected design point at ${iterRatio.toFixed(1)} times that level.`}>
        <div className={styles.gaugeTrack}>
          <div className={styles.gaugeFill} style={{ width: `${toGaugePercent(ratio)}%` }} />
          <div className={styles.markerReference} style={{ left: `${toGaugePercent(1)}%` }}>
            <span className={styles.markerLabel}>Educational reference</span>
          </div>
          <div className={styles.markerIter} style={{ left: `${toGaugePercent(iterRatio)}%` }}>
            <span className={styles.markerLabel}>ITER projected design point</span>
          </div>
        </div>
      </div>

      {reachedOnce ? (
        <Card className={styles.challenge}>
          <p>
            You reached the educational reference level. Can you do it again using a lower
            temperature than before? What has to change to compensate?
          </p>
        </Card>
      ) : null}

      <Disclaimer>{config.disclaimers.temperature}</Disclaimer>
      <Disclaimer>{config.disclaimers.general}</Disclaimer>
    </div>
  );
}
