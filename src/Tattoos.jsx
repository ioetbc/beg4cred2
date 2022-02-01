import React, { useState, useRef } from 'react'
import styles from './styles/Tattoos.module.css'
import { GlassMagnifier } from 'react-image-magnifiers'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { PrimaryButton } from './components/PrimaryButton'
import VideoFile from './videos/tattoo_description.mp4'
import { flashSheets, tattoos } from './content/TattooImages'

const Tattoos = ({ isMobile }) => {
  const [expandMoreInfo, setExpandMoreInfo] = useState(false)
  const readMoreButton = useRef(null)
  
  const handleExpandMoreInfo = () => {
    if (expandMoreInfo) {
      readMoreButton.current?.scrollIntoView({ inline: 'center' })
    }

    setExpandMoreInfo(!expandMoreInfo)
  }
  return (
    <div className='page-wrapper-padding'>
      <div className={styles.tattooWrapper}>
        <div className={styles.left}>
          <div className={styles.videoTransWrapper}>
            <video
              className={styles.video}
              controls
              muted
              autoPlay={!isMobile}
              loop={!isMobile}
              src={`${VideoFile}#t=0.5`}
            ></video>
            <div className={styles.buttonWrapper}>
              <PrimaryButton
                text="INSTA"
                handleOnClick={() => window.open('https://www.instagram.com/beg4cred/?hl=en', '_blank')}

              />
              <PrimaryButton
                text="EMAIL"
                handleOnClick={() => window.open('mailto:beg4cred@gmail.com')}
              />
            </div>
            <div className={styles.transcript}>
              <div className={`${styles.textContainer} ${expandMoreInfo ? styles.expand : ''}`}>
              <h2>
                All You Need to Know to Book a Tattoo with me
                </h2>
                <p>
                I tattoo between the hours of 9:00 - 16.30 on Tuesdays, Wednesdays and Fridays, I also tattoo during the same hours on the last Saturday of every month. My rate is £100 per hour and I have a one hour minimum appointment. I require a £30 deposit to confirm any appointment, you must be ready to transfer this deposit at the moment when you contact me to book. Appointments cannot be confirmed without a deposit in place. My preferred method of payment for deposits is via bank transfer. If you are unable to make bank transfer I can also PayPal or CashApp. The deposit comes off the overall cost of the tattoo which you pay on the day of the appointment, at the end of the session.
                </p>
                <p>
                Deposits are refundable with a minimum 7 days notice of cancellation or rescheduling. If you cancel or reschedule your appointment with 7 days or less notice, you are liable to lose your deposit.
                </p>
                <p>
                When it comes to what tattoos you can get with me, they fall into four main categories:
                </p>
                <ol>
                <li>                You can choose a design from one of my flash sheets. Many of these can be viewed here on the website and additional flash sheets as well as video of my flash book, can be viewed in my story highlights on Instagram.
                Not all designs that you will see on the flash sheets/in the flash book are still available. If you see one that you’d like, just ask and i’ll let you know if it’s still available. Usually, if the design is no longer available, I will offer to make you a design that is similar to the one you like.
                </li>
                <li>You can get a custom tattoo with designs sent to you the day before the appointment. Custom designs are possible on the following two conditions:

                I am interested in working with the idea - I usually am, but on some occasions it’s just not for me, in which case I’ll usually try and think of someone who I think might be more suited to doing it for you.

                You are completely happy for the design to be an interpretation of your idea in my personal style. If you have not done so already, please make yourself familiar by having a good look through my work. I don’t directly copy any other designs - I only tattoo my own artwork.

                My rate is £100 an hour and custom pieces start at 2 hours

                This is to allow for an hour of drawing and correspondence time prior to the appointment, and then a minimum 1 hour appointment during which we will make the actual tattoo.

                I send multiple design ideas through on the day before the appointment, for you to look at and give feedback - the idea being that by the time you arrive for the tattoo we are both happy with the design.

                </li>
                <li>You can get a custom tattoo where I draw the design up on the day, at the appointment.

                This option is only possible in certain circumstances - when your idea is something that I will feel comfortable drawing up quickly, with multiple options, on the day.
                </li>

                <li>You can get a fully freehanded tattoo</li>
                </ol>

<p>
                This option is very straightforward. We simply arrange and appointment and then create an artwork on the day, directly on your skin. You define the approximate amount of time you would like me to work for, as well as the place on your body where you would like the tattoo to be. Other than that, we just see what happens!
                </p>
                <p>
                Additional Information and Things to Consider.
                </p>
                <p>
                Do not contact me about getting a tattoo if you are under 18.
                </p>
                <p>
                I never rush. Please do not book a tattoo with me unless you can absolutely afford it. I make no guarantees around how long a tattoo will take to complete as there are many variables. It is fine to ask how much I estimate the tattoo will cost, but if you would struggle to pay the high end of the estimate, it is not the right moment to get that particular tattoo - wait a while or get something smaller.
                </p>
                <p>
                I work in a fairly small space so prefer that you do not bring anybody with you to your appointment. If you really feel that you need somebody with you, please ask me about this in advance so that I can prepare.
                </p>
                <p>
                I don’t tattoo fingers, palms, soles of feet, ears or inside the mouth.
                </p>
                <p>
                I only tattoo with black ink.
                </p>
                <p>
                I tattoo using the hand-poke method - no machine.
                </p>
                <p>
                Please do not send me a message about getting a tattoo unless you are ready to place your deposit at that moment.
                </p>
                <p>

                Thank you.
                </p>
              </div>
              <p ref={readMoreButton} className={styles.readMore} onClick={handleExpandMoreInfo}>
                {expandMoreInfo ? 'READ LESS' : 'READ MORE'}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.hmm}>
          <div className={styles.right}>
          {/* <h1 className={styles.title}>Tattos</h1> */}

<ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 500: 2, 1400: 3 }}>
  <Masonry gutter="16px">
    {tattoos?.map(image =>
      isMobile ? (
        <img src={image?.url} alt={image?.alt} className={styles.image} />
      ) : (
        <GlassMagnifier
          className={styles.image}
          imageSrc={image.url}
          imageAlt={image.alt}
          square={true}
          magnifierSize={200}
          magnifierBorderSize={0}
        />
      ),
    )}
  </Masonry>
</ResponsiveMasonry>
         
            <div className={styles.marginTop}>
            <h1 className={styles.title}>Flash Sheet designs</h1>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 1400: 3 }}>
              <Masonry gutter="16px">
                {flashSheets?.map(image =>
                  isMobile ? (
                    <img src={image?.url} alt={image?.alt} className={styles.image} />
                  ) : (
                    <GlassMagnifier
                      className={styles.image}
                      imageSrc={image.url}
                      imageAlt={image.alt}
                      square={true}
                      magnifierSize={200}
                      magnifierBorderSize={0}
                    />
                  ),
                )}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tattoos
