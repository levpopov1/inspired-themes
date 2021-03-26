function MiniPalette({colors}) {
  return (
    <div className="minipallete">
      <div className="gradient-block" style={{ linearGradient: {from: colors.primary.hex, to: colors.secondary.hex} }}></div>
    </div>
  );
}

export default MiniPalette;
