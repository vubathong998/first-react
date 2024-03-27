import Home from '../pages/Body/Home';
import Contact from '../pages/Body/Contact';

import { RouteItemInterface } from '../rmodels/routeConfigModel';

export const paths = {
    Home: '/home',
    Contact: '/contact'
};

export const routes: Array<RouteItemInterface> = [
    {
        component: Home,
        name: 'Trang chủ',
        path: paths.Home
    },
    {
        component: Contact,
        name: 'Liên hệ',
        path: paths.Contact
    }
];
