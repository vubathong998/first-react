import { FC, FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
import Layout from './Layout';
import { routes } from '../../routes/routeConfig';

interface IProps {}

const Page: FC<IProps> = (props) => {
    return (
        // <Routes>
        //     <Route index element={<Home />} />
        //     <Route path="/blogs" element={<Blogs />} />
        //     <Route path="contact" element={<Contact />} />
        //     <Route path="*" element={<NoPage />} />
        // </Routes>
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

export default Page;
