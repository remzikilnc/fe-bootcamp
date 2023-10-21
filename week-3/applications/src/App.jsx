import CoinFlip from './components/coin-flip';
import Counter from './components/Counter';
import Text from './components/Text';

const App = () => {
    return (
        <div>
            <Counter initialCount={0} minCount={0} maxCount={10} />
            <Text placeholder="Type something.." />
            <CoinFlip />
        </div>
    );
};

export default App;