import ColorRow from './ColorRow';

function ColorSection({theme}) {

  const getContrastRatio = (color1, color2) => {

    // If a leading # is provided, remove it
    if (color1.slice(0, 1) === '#') {
      color1 = color1.slice(1);
    }

    // If a leading # is provided, remove it
    if (color2.slice(0, 1) === '#') {
      color2 = color2.slice(1);
    }

    // Convert color1 from hex to RGB value
    let r1 = parseInt(color1.substr(0,2),16);
    let g1 = parseInt(color1.substr(2,2),16);
    let b1 = parseInt(color1.substr(4,2),16);

    // Convert color2 from hex to RGB value
    let r2 = parseInt(color2.substr(0,2),16);
    let g2 = parseInt(color2.substr(2,2),16);
    let b2 = parseInt(color2.substr(4,2),16);

    // Convert color1 to SRGB
    let SRGB_r1 = r1 / 255;
    let SRGB_g1 = g1 / 255;
    let SRGB_b1 = b1 / 255;

    // calculate final color1 values for comparison
    let c1_r = SRGB_r1 <= 0.03928 ? SRGB_r1 / 12.92 : Math.pow(((SRGB_r1 + 0.055) / 1.055), 2.4);
    let c1_g = SRGB_g1 <= 0.03928 ? SRGB_g1 / 12.92 : Math.pow(((SRGB_g1 + 0.055) / 1.055), 2.4);
    let c1_b = SRGB_b1 <= 0.03928 ? SRGB_b1 / 12.92 : Math.pow(((SRGB_b1 + 0.055) / 1.055), 2.4);

    // Convert color2 to SRGB
    let SRGB_r2 = r2 / 255;
    let SRGB_g2 = g2 / 255;
    let SRGB_b2 = b2 / 255;

    // calculate final color1 values for comparison
    let c2_r = SRGB_r2 <= 0.03928 ? SRGB_r2 / 12.92 : Math.pow(((SRGB_r2 + 0.055) / 1.055), 2.4);
    let c2_g = SRGB_g2 <= 0.03928 ? SRGB_g2 / 12.92 : Math.pow(((SRGB_g2 + 0.055) / 1.055), 2.4);
    let c2_b = SRGB_b2 <= 0.03928 ? SRGB_b2 / 12.92 : Math.pow(((SRGB_b2 + 0.055) / 1.055), 2.4);

    // calculate luminance value for both colors
    let l1 = 0.2126 * c1_r + 0.7152 * c1_g + 0.0722 * c1_b;
    let l2 = 0.2126 * c2_r + 0.7152 * c2_g + 0.0722 * c2_b;

    // Calculate contrast ratio of the two colors
    let cr = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

    return cr;
  }

  getContrastRatio(theme.colors.primary.hex, theme.colors.secondary.hex);

  return (
    <div className="section-container">
      {Object.keys(theme.colors).map((colorKey, index) =>  
        <ColorRow color={theme.colors[colorKey]} theme={theme} key={index}/>
      )}
    </div>
  );
}

export default ColorSection;
