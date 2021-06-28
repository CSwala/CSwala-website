import React, { useEffect, useState } from 'react';

import styles from './LinkPreview.css';
import blank from '../../assets/linkpreview/blank.png';

function LinkPreview(props) {
    const [APIdata, setAPIdata] = useState({});

  useEffect(async () => {
    let URI = "https://api.5tupidbrain.in/v1/url-meta?url=" + props.url;
    const response = await fetch(URI);
    let res = await response.json();
    setAPIdata(res.urlMeta);
  }, []);
  // console.log(APIdata)
  if (APIdata) {
    return (
      <a target="_blank" href={APIdata.url} className="LinkPreview">
        {APIdata.image ? (
          <img src={APIdata.image} alt="Thumbnail" />
        ) : (
          <img src={blank} alt="Thumbnail" />
        )}
        <div className="info">
          <h2>{APIdata.title}</h2>
          <p>{APIdata.description}</p>
          <span>{APIdata.source}</span>
        </div>
      </a>
    );
  } else {
    return null;
  }
}

export default LinkPreview;
