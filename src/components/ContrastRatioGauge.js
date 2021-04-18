import { useEffect, useRef } from 'react';
import Gauge from "svg-gauge";

const gaugeOptions = {
  animDuration: 1,
  showValue: true,
  initialValue: 1,
  max: 21,
  min: 1,
  label: function(value) {
    return value;
  },
}

function ContrastRatioGauge(props) {

  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);

  useEffect(() => {
    if(!gaugeRef.current) {
      const options = { ...gaugeOptions, ...props };
      gaugeRef.current = Gauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValue(props.value, gaugeOptions.animDuration);
  }, [props]);

  return (
    <div className="gauge-container" ref={gaugeEl}></div>
  );
}

export default ContrastRatioGauge;
