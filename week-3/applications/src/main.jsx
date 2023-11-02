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
import StateTextComponent from "./components/state-text-component.jsx";
import Counter from "./components/counter.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/coin-flip" element={<CoinFlip />} />
                <Route path="/use-state-text" element={<StateTextComponent placeholder="Type something.."/>} />
                <Route path="/counter" element={<Counter/>} />
            </Routes>
        </Router>
    </React.StrictMode>
)
