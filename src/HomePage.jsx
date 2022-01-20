import React from 'react'
import styles from './styles/HomePage.module.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useHistory } from 'react-router-dom'

import colouredCartooon from './images/coloured_cartoon/1.jpg'
import colouredFaces from './images/coloured_faces/1.jpg'
import detailedPenAndInk from './images/detailed_pen_and_ink/1.jpg'
import editedAds from './images/edited_ads/1.jpg'
import funny from './images/funny/1.jpg'
import pastelSet from './images/pastel_set/1.jpg'
import workIsHell from './images/work_is_hell/1.jpg'

const HomePage = () => {
  const history = useHistory()
  return (
    <div className={styles.wrapper}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 1400: 3 }}>
        <Masonry gutter="32px 16px">
          <>
            <img
              onClick={() => history.push('shop?category=coloured_cartoon')}
              className={styles.image}
              src={colouredCartooon}
            />
            <p className={styles.title}>COLOURED_CARTOON_PRINTS</p>
          </>
          <>
            <img
              onClick={() => history.push('shop?category=coloured_faces')}
              className={styles.image}
              src={colouredFaces}
            />
            <p className={styles.title}>COLOURED_FACES_PRINTS</p>
          </>
          <>
            <img onClick={() => history.push('shop?category=work_is_hell')} className={styles.image} src={workIsHell} />
            <p className={styles.title}>WORK_IS_HELL_PRINTS</p>
          </>

          <>
            <img onClick={() => history.push('shop?category=edited_ads')} className={styles.image} src={editedAds} />
            <p className={styles.title}>EDITED_ADS_PRINTS</p>
          </>

          <>
            <img onClick={() => history.push('shop?category=funny')} className={styles.image} src={funny} />
            <p className={styles.title}>FUNNY_PRINTS</p>
          </>

          <>
            <img onClick={() => history.push('shop?category=pastel_set')} className={styles.image} src={pastelSet} />
            <p className={styles.title}>PASTEL_SET_PRINTS</p>
          </>
          <>
            <img
              onClick={() => history.push('shop?category=detailed_pen_and_ink')}
              className={styles.image}
              src={detailedPenAndInk}
            />
            <p className={styles.title}>DETAILED_PEN_AND_INK_PRINTS</p>
          </>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default HomePage
