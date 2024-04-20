import React from 'react'
import Styles from '../componets/Video.module.css'
import Cow from '../video/Cow.mp4'

const Video = ({sendVideo}) => {
  return (
    <div className={Styles.container}>
        <video className={Styles.videoPlayer} src={sendVideo} autoPlay muted loop controls></video>
    </div>
  )
}

export default Video