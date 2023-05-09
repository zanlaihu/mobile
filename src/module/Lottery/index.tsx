import styles from './index.module.scss'

const Lottery = () => {
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.title}`}>Win a Prize</div>
      <div className={styles.date}></div>
    </div>
  )
}

export default Lottery
