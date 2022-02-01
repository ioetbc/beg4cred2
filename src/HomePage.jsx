import React from 'react'
import styles from './styles/HomePage.module.css'
import { useHistory } from 'react-router-dom'
import { LinkButton } from './components/LinkButton'


import colouredCartooon from './images/coloured_cartoon/5.jpg'
import colouredFaces from './images/coloured_faces/5.jpg'
import editedAds from './images/edited_ads/7.jpg'
import funny from './images/funny/2.jpg'
import A6Drawings from './images/a6_drawings/3.jpg'
import workIsHell from './images/work_is_hell/6.jpg'
import asemicWriting from './images/asemic_writing/1.jpg'
import joy from './images/joy/15.jpg'
import multiPen from './images/multi_pen/5.jpg'
import nightBus from './images/night_bus/0.jpg'
import squaresAndCircles from './images/squares_and_circles/0.jpg'
import detailedPenAndInk from './images/detailed_pen_and_ink/5.jpg'

const HomePage = () => {
  const history = useHistory()
  return (
    <div className='page-wrapper-padding'>
      <div className={styles.wrapper}>
        <div>
          <img
            onClick={() => history.push('shop?category=coloured_cartoon')}
            className={styles.image}
            src={colouredCartooon}
          />
          <LinkButton label="COLOURED_CARTOON" url={'shop?category=coloured_cartoon'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=edited_ads')} className={styles.image} src={editedAds} />
          <LinkButton label="EDITED_ADS" url={'shop?category=edited_ads'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=work_is_hell')} className={styles.image} src={workIsHell} />
          <LinkButton label="WORK_IS_HELL" url={'shop?category=work_is_hell'} active={false} icon={false} />
        </div>
        <div>
          <img
            onClick={() => history.push('shop?category=coloured_faces')}
            className={styles.image}
            src={colouredFaces}
          />
          <LinkButton label="COLOURED_FACES" url={'shop?category=coloured_faces'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=funny')} className={styles.image} src={funny} />
          <LinkButton label="FUNNY" url={'shop?category=funny'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=a6_drawings')} className={styles.image} src={A6Drawings} />
          <LinkButton label="A6_DRAWINGS" url={'shop?category=a6_drawings'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=asemic_writing')} className={styles.image} src={asemicWriting} />
          <LinkButton label="ASEMIC_WRITING" url={'shop?category=asemic_writing'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=joy')} className={styles.image} src={joy} />
          <LinkButton label="JOY" url={'shop?category=joy'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=multi_pen')} className={styles.image} src={multiPen} />
          <LinkButton label="MULTI_PEN" url={'shop?category=multi_pen'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=night_bus')} className={styles.image} src={nightBus} />
          <LinkButton label="NIGHT_BUS" url={'shop?category=night_bus'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=squares_and_circles')} className={styles.image} src={squaresAndCircles} />
          <LinkButton label="SQUARES_AND_CIRCLES" url={'shop?category=squares_and_circles'} active={false} icon={false} />
        </div>
        <div>
          <img onClick={() => history.push('shop?category=detailed_pen_and_ink')} className={styles.image} src={detailedPenAndInk} />
          <LinkButton label="DETAILED_PEN_AND_INK" url={'shop?category=detailed_pen_and_ink'} active={false} icon={false} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
