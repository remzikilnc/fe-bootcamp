import './coin-styles.css';
import CoinTail from '../../../assets/img/tail.png';
import CoinHead from '../../../assets/img/head.png';

const Coin = ({currentStatus,prepareStatus, rotate}) => {
    return (
        <div className="coin-container h-[260px]">
            <div className={`coin ${rotate && 'coin-rotate'}`}>
               <div className="coin-tails">
                   <img
                       src={CoinTail}
                       alt=""
                       className={currentStatus === 'yazi' ? 'coin-back' : 'coin-front'}
                   ></img>
               </div>
                <div className="coin-heads ">
                    <img
                        src={CoinHead}
                        alt=""
                        className={currentStatus === 'yazi' ? 'coin-front' : 'coin-back'}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Coin;
