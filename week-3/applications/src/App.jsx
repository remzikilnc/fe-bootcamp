import {BrowserRouter} from "react-router-dom";
import ChooseComponent from "./components/choose-component/index.jsx";
import CoinFlip from './components/coin-flip';
import Counter from './components/counter.jsx';
import StateTextComponent from './components/state-text-component.jsx';


const App = () => {
    return (
        <>
            <div className="wrapper">
                <ChooseComponent />
            </div>
        </>
/*        <div>
            <Counter initialCount={0} minCount={0} maxCount={10} />
            <Text placeholder="Type something.." />
            <CoinFlip />
        </div>*/
    );
};

export default App;