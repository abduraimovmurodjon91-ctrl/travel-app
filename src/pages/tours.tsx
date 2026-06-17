import Discover from "../components/tours/discover"
import NewsLetter from "../components/tours/newsLetter"
import ToursFilter from "../components/tours/toursfilter"
import ToursTitle from "../components/tours/toursTitle"

const Tours = () => {
  return (
    <>
    <ToursTitle/>
    <ToursFilter/>
    <Discover/>
    <NewsLetter/>

    </>
  )
}

export default Tours