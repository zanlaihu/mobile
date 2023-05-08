import styles from './index.module.css'
import arrow from 'src/asset/img/right-arrow.svg'

interface ChoiceProps {
  title: string
}

const Choice = (props: ChoiceProps) => {
  const { title } = props
  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.dot}`}></div>
      <div className={`${styles.title}`}>{title}</div>
      <img src={arrow} alt={arrow} className={`${styles.arrow}`} />
    </div>
  )
}

export default Choice
