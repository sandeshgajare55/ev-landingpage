import './Background.css'
import video1 from '../../assets/video1.mp4'// imported video from asset folder which we are going to play
import image1 from '../../assets/image1.png'//imported the image
import image2 from '../../assets/image2.png'//imported the image
import image3 from '../../assets/image3.png'//imported the image

const Background = ({playStatus,heroCount}) => {
  
  if(playStatus)
  {
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>  
      </video> //render the video, gave the source of video 
    )
  }
  else if(heroCount === 0) // if hc count is 0 return image 1
  {
    return(
      <img src={image1} className='background fade-in 'alt="" />
    )
  }
  else if(heroCount === 1) // if hc count is 1 return image 2
  {
    return(
      <img src={image2} className='background fade-in 'alt="" />
    )
  }
  else if(heroCount === 2) // if hc count is 2 return image 3
  {
    return(
      <img src={image3} className='background fade-in 'alt="" />
    )
  }
  else
  {
    return null;
  }
}

export default Background;