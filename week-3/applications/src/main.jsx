import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import CoinFlip from "./components/coin-flip/index.jsx";
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import StateTextComponent from "./components/state-text/state-text-component.jsx";
import Counter from "./components/counter/counter.jsx";
import BurgerApplication from "./components/burger-application/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/coin-flip" element={<CoinFlip />} />
                <Route path="/use-state-text" element={<StateTextComponent placeholder="Type something.."/>} />
                <Route path="/counter" element={<Counter/>} />
                <Route path="/burger-application" element={<BurgerApplication/>} />
            </Routes>
        </Router>
    </React.StrictMode>
)
