import React from 'react';
function ExportTheme({theme}) {
  return (
    <div className="modal fade" id="exportThemeModal" tabindex="-1" aria-labelledby="exportThemeModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exportThemeModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h3 className="title">
              Coming Soon
            </h3>
            <p className="text">
              This modal will allow users to export the current theme as CSS. 
              Providing them with rules for all the colors, their chosen font type etc...
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Export</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportTheme;
