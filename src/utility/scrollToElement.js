import { scroller } from 'react-scroll'

export default element => {
   scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
   })
}
