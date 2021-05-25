import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { iColor, iTheme } from '../interfaces';
import exportConfig from '../lib/ExportThemeConfig';
import Prism from 'prismjs';
import '../styles/syntaxHighlighter.scss';

interface Props {
  theme: iTheme
}

const ExportTheme: React.FC<Props> = ({theme}) => {

  const [colorType, setColorType] = useState<keyof iColor>("hex");
  const [cssCode, setCssCode] = useState("");
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setCssCode(exportConfig(theme, colorType));
  }, [colorType, theme]);

  useEffect(() => {
    if (codeRef && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  });

  return (
    <div className="modal fade" id="exportThemeModal" tabIndex={-1} aria-labelledby="exportThemeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-muted" id="exportThemeModalLabel">Export Theme</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center mb-3">
              <h3 className="title">
                { theme.name }
              </h3>
              <div className="settings d-flex flex-row align-items-center">
                <p className="modal-text me-3 mb-0">Color values:</p>
                <div className="btn-group d-block" role="group">
                <button type="button" className={`btn btn-outline ${colorType === "hex" ? "active" : ""}`} onClick={() => setColorType("hex")}>
                  Hex
                </button>
                <button type="button" className={`btn btn-outline ${colorType === "rgb" ? "active" : ""}`} onClick={() => setColorType("rgb")}>
                  RGB
                </button>
                <button type="button" className={`btn btn-outline ${colorType === "hsl" ? "active" : ""}`} onClick={() => setColorType("hsl")}>
                  HSL
                </button>
              </div>
              </div>
            </div>
            <pre>
              <code className="language-css" ref={codeRef}>
                { cssCode }
              </code>
            </pre>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline">Export .css file</button>
            <button type="button" className="btn btn-primary">Copy to clipboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportTheme;
