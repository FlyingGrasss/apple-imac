"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)"})
  

  useGSAP(() => {

    if(!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        }
      })

      timeline.to(".mask img", {
        transform: "scale(1.1)"
      }).to(".content", {opacity: 1, y: 0, ease: "power1.in"} )
    }



  }, [isTablet])

  return (
    <section id="showcase">
      <div className="media">
        <video src={"/videos/game.mp4"} loop muted autoPlay playsInline />
        <div className="mask">
          <img src={"/mask-logo.svg"} />
        </div>
      </div>


      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>
            
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing {" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that’s unbelievably thin, light, and powerful.  
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
              </p>
              <p className="text-primary flex items-center gap-1">Learn more about Apple Intelligence <svg className="mt-1" width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.3833 10.4487C8.3833 10.7837 8.24658 11.0845 7.97314 11.3511L3.50244 15.7705C3.29736 15.9756 3.04443 16.0781 2.74365 16.0781C2.44287 16.0781 2.18481 15.9705 1.96948 15.7551C1.75415 15.5398 1.64648 15.2852 1.64648 14.9912C1.64648 14.6836 1.76611 14.4136 2.00537 14.1812L5.81982 10.4385L2.00537 6.71631C1.76611 6.48389 1.64648 6.21387 1.64648 5.90625C1.64648 5.6123 1.75415 5.35767 1.96948 5.14233C2.18481 4.927 2.44287 4.81934 2.74365 4.81934C3.04443 4.81934 3.29736 4.92188 3.50244 5.12695L7.97314 9.54639C8.23975 9.80615 8.37646 10.1069 8.3833 10.4487Z" fill="#2997FF"/></svg></p>

            
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
export default Showcase