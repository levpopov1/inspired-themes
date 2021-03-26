function MiniPalette({colors}) {
  return (
    <div className="minipalette">
      <div className="palette-block me-1" style={{ backgroundColor: colors.primary.hex }}></div>
      <div className="palette-block me-1" style={{ backgroundColor: colors.secondary.hex }}></div>
      <div className="palette-block me-1" style={{ backgroundColor: colors.highlight.hex }}></div>
      <div className="palette-block me-1" style={{ backgroundColor: colors.shadow.hex }}></div>
      <div className="palette-block me-1" style={{ backgroundColor: colors.light.hex }}></div>
    </div>
  );
}

export default MiniPalette;
