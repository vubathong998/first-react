import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';

interface IProps {}

const Page: FC<IProps> = (props) => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />  
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
};

export default Page;
 