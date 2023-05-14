import FortuneWheel from 'src/module/Lottery/component/FortuneWheel'
import styles from './index.module.scss'
import Back from 'src/component/Back'
import MyReward from './component/MyReward'

const Lottery = () => {
  return (
    <div className={`${styles.content}`}>
      <Back />
      <div className={`${styles.title}`}>Win a Prize</div>
      <div className={styles.date}>2023/05/09 - 2023/06/01</div>
      <MyReward />
      <div className={styles.wheelContent}>
        <FortuneWheel />
      </div>
      <div>You have 2 more Chance</div>
    </div>
  )
}

export default Lottery
