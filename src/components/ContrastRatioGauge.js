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
      // gaugeClass has to be set here to make classList.replace line below work
      const options = {...gaugeOptions, gaugeClass: "gauge " + props.contrastColor};
      gaugeRef.current = Gauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValue(props.value);

    // hacky way to update color class on the Gauge
    // because gaugeRef does not provide setOptions function after it is created
    gaugeEl.current.childNodes[0].classList.replace("light", props.contrastColor);
  }, [props]);

  return (
    <div className="gauge-container" ref={gaugeEl}></div>
  );
}

export default ContrastRatioGauge;
