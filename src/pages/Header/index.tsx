import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header className="text-center p-5 bg-orange-200 flex flex-row justify-between">
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
        </header>
    );
};

export default header;
