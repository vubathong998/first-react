import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/Body/Layout';
import { routes } from './routeConfig';
import { FunctionComponent } from 'react';
import Home from '../pages/Body/Home';

const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" index element={<Home />} />
                {routes.map((route) => {
                    const Component = route.component as FunctionComponent;

                    return <Route path={route.path} element={<Component />} />;
                })}
                {/* <Route index element={<Home />} /> */}
            </Route>
        </Routes>
    );
};

export default Root;
