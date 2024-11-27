import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"

import Hero from "../../components/hero"
import Header from "../../components/header"
import Achivements from "../../components/Achivements"
import CourseCategory from "../../components/CourseCategory"
import Courses from "../../components/Courses"
import Team from "../../components/Team"
import Testimonial from "../../components/Testimonial"
import Footer from "../../components/Footer"


export default function Home() {
  return (
      <main>
        <div className="h-12 py-3 px-4 flex flex-wrap items-center justify-between sm:justify-center space-y-2 sm:space-y-0">
  <div className="flex items-center space-x-2">
    <h1 className="text-xs">
      <span>Phone Number: 956 742 455 678</span>
    </h1>
    <span className="hidden sm:block text-slate-600 text-4xl pb-2 mx-2">|</span>
    <h1 className="text-xs">
      <span>Email: info@ddsgnr.com</span>
    </h1>
  </div>
  <div className="flex space-x-5 text-2xl">
    <AiFillFacebook />
    <AiFillInstagram />
    <AiFillTwitterCircle />
    <AiFillLinkedin />
  </div>
</div>

<div>
  <Header />
  <Hero />
  <CourseCategory/>
  <Achivements />
  <Courses />
  <Team />
  <Testimonial />
  <Footer />

</div>
</main>
)
}
