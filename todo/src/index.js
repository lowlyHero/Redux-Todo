import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import './index.css';


function App() {
    return (
      <div className='App'>
          <p>Hey there. This doesn't look so good right now but that's ok. Soon it will look cool and everyone will say, Wow, that looks cool. But not now though because it's just this. I haven't made anything else yet. I can't believe you're still even reading this. It's ridiculous. Why would anyone even take the time to write this out? I guess you could call it a test. Let's call it a test. Cool? Alright. Let's just both agree on that. Otherwise it would just seem like I'm wasting my time.</p>
      </div>
    );
  }

const rootElement = document.getElementById('root');  
ReactDOM.render(
        // <Provider store={store}>
            <App />,
        // </Provider>,
         rootElement
         );


