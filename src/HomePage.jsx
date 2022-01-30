import React from 'react'
import styles from './styles/HomePage.module.css'
import { useHistory } from 'react-router-dom'
import { LinkButton } from './components/LinkButton'


import colouredCartooon from './images/coloured_cartoon/1.jpg'
import colouredFaces from './images/coloured_faces/7.jpg'
import editedAds from './images/edited_ads/1.jpg'
import funny from './images/funny/1.jpg'
import workIsHell from './images/work_is_hell/1.jpg'

const HomePage = () => {
  const history = useHistory()
  return (
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
            <img
              onClick={() => history.push('shop?category=coloured_faces')}
              className={styles.image}
              src={colouredFaces}
            />
            <LinkButton label="COLOURED_FACES" url={'shop?category=coloured_faces'} active={false} icon={false} />
          </div>
   
          <div>
            <img onClick={() => history.push('shop?category=work_is_hell')} className={styles.image} src={workIsHell} />
            <LinkButton label="WORK_IS_HELL" url={'shop?category=work_is_hell'} active={false} icon={false} />
          </div>

          <div>
            <img onClick={() => history.push('shop?category=edited_ads')} className={styles.image} src={editedAds} />
            <LinkButton label="EDITED_ADS" url={'shop?category=edited_ads'} active={false} icon={false} />
          </div>

          <div>
            <img onClick={() => history.push('shop?category=funny')} className={styles.image} src={funny} />
            <LinkButton label="FUNNY" url={'shop?category=funny'} active={false} icon={false} />

          </div>
    </div>
  )
}

export default HomePage
