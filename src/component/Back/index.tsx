import styles from './index.module.scss'
import back from './back.svg'

const Back = () => {
  return (
    <div className={styles.content}>
      <img src={back} className={styles.back}></img>
      <div className={styles.text}>Back</div>
    </div>
  )
}

export default Back
