import styles from './burger-lettuce.module.css';

const BurgerLettuce = () => {
    return (
        <div className={styles.burger__lettuce}>
            <div className={styles.lettuce1}/>
            <div className={styles.lettuce2}/>
            <div className={styles.lettuce3}/>
            <div className={styles.lettuce4}/>
            <div className={styles.lettuce5}/>
        </div>
    );
};

export default BurgerLettuce;
