// import { Dialog, Toast } from 'antd-mobile'
import { useState } from 'react'
import background from './background.svg'
import { LuckyDrawConstant } from './constants'
import styles from './index.module.scss'
import './index.scss'
import point from './point.svg'
import group from './group.svg'

const FortuneWheel = () => {
  const [startRotateDeg, setStartRotateDeg] = useState(0)
  const [isRotate, setIsRotate] = useState(false)

  function getTargetDegree() {
    // 随机获取中奖区域
    const prizeIndex = Math.floor(Math.random() * 6)
    // 判断中奖与否
    const blankPrize = LuckyDrawConstant.prizeList[prizeIndex].blankPrize
    // 奖品名
    const name = LuckyDrawConstant.prizeList[prizeIndex].name
    // 计算角度（标号从0到5）
    const targetDegree = 360 - 60 * (prizeIndex - 0)

    return { blankPrize, name, targetDegree }
  }

  function handleClick() {
    // if (isRotate) {
    //   Toast.show({
    //     content: '我正在转啦～不要急嘛',
    //   })
    //   return
    // }
    setIsRotate(true)

    // 获取目标角度
    const response = getTargetDegree()
    if (response?.targetDegree !== undefined) {
      let rotateDeg = response?.targetDegree
      // 和上次记录的角度作比较，只要小于它，就不断加上360
      while (rotateDeg <= startRotateDeg) {
        rotateDeg = rotateDeg + 360
      }
      // 获取转盘实例
      const ele = document.getElementById('turntable') as HTMLElement
      // 增加旋转动画
      ele.style.transition = 'all 3000ms'
      // 乘以10是为了转盘转动的效果
      ele.style.transform = `rotate(${rotateDeg + 360}deg)`
      // 记录上一次旋转到的角度
      setStartRotateDeg(rotateDeg + 360)
    }

    // setTimeout(() => {
    //   if (!response?.blankPrize) {
    //     Dialog.show({
    //       image: LuckyDrawConstant.prizeImg,
    //       title: 'Congratulations',
    //       content: 'You have win ' + response?.name + '.',
    //       actions: [{ key: 'online', text: 'Got it!' }],
    //       closeOnAction: true,
    //     })
    //   } else {
    //     Toast.show({
    //       content: LuckyDrawConstant.sorryText,
    //     })
    //   }
    //   setIsRotate(false)
    // }, 6500)
  }

  return (
    <div className={styles.content}>
      <div className={'lucky-back-content'} id='turntable'>
        <img src={background} className={styles.background} alt='background'></img>
        <ul>
          {LuckyDrawConstant.prizeList &&
            LuckyDrawConstant.prizeList.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    src={item?.imgSrc}
                    className='lucky-prize-list'
                    alt='prize list'
                  ></img>
                </li>
              )
            })}
        </ul>
      </div>
      <img
        src={point}
        className={styles.point}
        onClick={() => {
          handleClick()
        }}
        alt='play button'
      ></img>
    </div>
  )
}

export default FortuneWheel
