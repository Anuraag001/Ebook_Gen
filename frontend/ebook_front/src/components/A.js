import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

function PdfViewer() {
  const view = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        enableOfficeEditing:true,
      },
      view.current
    ).then((instance) => {
      // WebViewer instance is ready
    });

    // Clean-up function to destroy the instance when the component unmounts
  }, []);

  return (
    <div id="view" style={{ height: '100vh' }} ref={view} />
  );
}

export default PdfViewer;
