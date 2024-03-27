import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="container m-auto flex flex-col gap-4">
            <div className="App flex flex-row justify-between items-center bg-gray-200 px-3 py-5">
                <div className="font-bold text-3xl">Thông logo</div>
                <div className="">
                    <ul className="flex flex-row gap-3">
                        <li>
                            <Link to={'/'}>Trang chủ</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        <li>
                            <Link to={'/blogs'}>Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
