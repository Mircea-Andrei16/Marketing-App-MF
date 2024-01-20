import React from 'react';
import ReactDOM  from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './app'
// Mount function that start up the app
const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    if(onNavigate){
        history.listen(onNavigate);
    }
    
    ReactDOM.render(<App onSignIn= {onSignIn} history={history}/>, el);

    return {
        onParentNavigate({pathname: nextPathName}) {

            const { pathname } = history.location;
            if(pathname !== nextPathName){
                history.push(nextPathName);
            }
            
        }
    };
};

// if we are in developement and in insolation,
// call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if(devRoot){
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

// we are running throungh container
// and we should export the mount function
export { mount }