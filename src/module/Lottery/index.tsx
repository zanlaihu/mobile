import FortuneWheel from 'src/component/FortuneWheel'
import styles from './index.module.scss'

const Lottery = () => {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.title}`}>Win a Prize</div>
      <div className={styles.date}>2023/05/09 - 2023/06/01</div>
      <div className={styles.wheelContent}><FortuneWheel /></div>
      
    </div>
  )
}

export default Lottery
