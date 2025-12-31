"use client"

import { PresentationControls } from "@react-three/drei"
import { useRef } from "react"
import MacbookModel16 from "../models/Macbook-16"
import MacbookModel14 from "../models/Macbook-14"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const ModelSwitcher = ({scale, isMobile}: {scale: number, isMobile: boolean}) => {

  
  const ANIMATION_DURATION = isMobile ? 1 : 1.2
  const OFFSET_DISTANCE = isMobile ? 5 : 12

  
  const fadeMeshes = (group: any, opacity: any) => {
    if (!group) return;

    group.traverse((child: any) => {
      if(child.isMesh) {
        child.material.transparent = true;
        gsap.to(child.material, {opacity, duration: ANIMATION_DURATION})
      }
    })
  }

  const moveGroup = (group: any, x: any) => {
    if(!group) return;

    gsap.to(group.position, {x, duration: ANIMATION_DURATION})
  }

  
  const smallMacbookRef = useRef(null)
  const largeMacbookRef = useRef(null)

  const showLargeMacbook = scale === 0.1 || scale === 0.07


  useGSAP(() => {
    if(showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
      moveGroup(largeMacbookRef.current, 0)

      fadeMeshes(smallMacbookRef.current, 0)
      fadeMeshes(largeMacbookRef.current, 1)
    } else {
      moveGroup(smallMacbookRef.current, 0)
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)

      fadeMeshes(smallMacbookRef.current, 1)
      fadeMeshes(largeMacbookRef.current, 0)
    }

  }, [scale])

  const controlsConfig = {
    snap: true,
    speed: 1.5,
    zoom: 1,
    azimut: [-Infinity, Infinity],
    config: {mass: 1, tension: 0, friction: 26}
  }

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
           <MacbookModel16 scale={isMobile ? 0.07 : 0.1}/>
        </group>
      </PresentationControls>


      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
           <MacbookModel14 scale={isMobile ? 0.05 : 0.08}/>
        </group>
      </PresentationControls>
    </>
  )
}
export default ModelSwitcher