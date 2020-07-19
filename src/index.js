import React from 'react';
import ReactDOM from 'react-dom';
import Website from './website'
import './index.css';
import * as serviceWorker from './serviceWorker';


class WebsitePage extends React.Component {

  render(){
    return(
        <Website />
    );
  }
}


ReactDOM.render(
  <WebsitePage />,
  document.getElementById('root')
);


serviceWorker.unregister();
