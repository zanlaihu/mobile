import { Navigate, useNavigate } from 'react-router-dom'
import arrow from 'src/asset/img/right-arrow.svg'
import styles from './index.module.css'

interface ChoiceProps {
  title: string
  link: string
}

const Choice = (props: ChoiceProps) => {
  const { title, link } = props
  const Navigate = useNavigate()
  return (
    <div
      className={`${styles.content}`}
      onClick={() => {
        Navigate(link)
      }}
    >
      <div className={`${styles.dot}`}></div>
      <div className={`${styles.title}`}>{title}</div>
      <img src={arrow} alt={arrow} className={`${styles.arrow}`} />
    </div>
  )
}

export default Choice
