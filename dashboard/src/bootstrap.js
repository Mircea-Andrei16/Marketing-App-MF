import { createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function that start up the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el); 
};

// if we are in developement and in insolation,
// call mount immediately
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if(devRoot){
        mount(devRoot)
    }
}

// we are running throungh container
// and we should export the mount function
export { mount }