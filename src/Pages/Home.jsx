import React from 'react'
//Components
const Description = React.lazy(() => import("../Components/Description"));
const Apropos = React.lazy(() => import("../Components/Apropos"));
const Education = React.lazy(() => import("../Components/Education"));
const Compétences = React.lazy(() => import("../Components/Compétences"))
const Certifications = React.lazy(() => import("../Components/Certifications"))
const Projects = React.lazy(() => import("../Components/Projects"))

const Home = () => {
  return (
    <section>
    <div id='empty'></div>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Description/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Apropos/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Education/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Compétences/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
 <Certifications/>
 </React.Suspense>
 <React.Suspense fallback={<div>...Loading</div>}>
  <Projects/>
 </React.Suspense>

 




    </section>
  )
}

export default Home