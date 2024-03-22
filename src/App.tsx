import Header from './pages/Header';
import Body from './pages/Body/index';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App flex flex-col gap-3 container m-auto">
                <Header />
                <Body />
            </div>
        </BrowserRouter>
    );
}

export default App;
