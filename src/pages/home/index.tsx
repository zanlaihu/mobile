import { useLayoutEffect, useState } from 'react'
import Choice from '../../component/List'
import github from './github.svg'
import styles from './index.module.css'
import arrow from 'src/asset/img/right-arrow.svg'

const MobileHome = () => {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    function updateIsMobile() {
      const width = window.innerWidth
      setIsMobile(width <= 768) // 根据实际情况修改阈值，这里以768px为例
    }
    window.addEventListener('resize', updateIsMobile)
    updateIsMobile() // 初始化
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  return (
    <>
      {isMobile ? (
        <div className={`${styles.mobile}`}>
          <div className={`${styles.inner}`}>
            <div className={`${styles.title} ${styles.name}`}>Zanlai's Mobile App</div>
            <Choice title={'Lottery Wheel / Lucky Draw / 大转盘'} />
            <div className={`${styles.line}`}></div>
            <div className={`${styles.githubContent}`}>
              <img src={github} alt='github' className={`${styles.github}`} />
              <div className={`${styles.view}`}>View Code on GitHub </div>
              <img src={arrow} alt={arrow} className={`${styles.arrow}`}/>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.desktop}`}>
          <div className={`${styles.bar} ${styles.title}`}>
            <div className={`${styles.thank}`}>
              Thank you for exploring my application.
            </div>
            <div className={`${styles.help}`}>
              Please use your mobile phone or adjust your browser to mobile size
              for a better experience. Translation.
            </div>
            <div className={`${styles.help}`}>
              请用手机或调整浏览器至手机尺寸以获得更好的体验。
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileHome
