import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 620 ? smallHeroVideo : heroVideo);
    
    function handleVideoSrcSet() {
        window.innerWidth < 620 ? setVideoSrc(smallHeroVideo) : setVideoSrc(heroVideo)
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    })
    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2,
        }),
        gsap.to('#cta', {
            y: -50,
            opacity: 1,
            delay: 2,
        })
        
    }, [])

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero"className="hero-title">iPhone 15 Pro</p>
                <div className="w-9/12 md:w-10/12">
                    <video className="pointer-events-none"autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc}/>
                    </video>
                </div>
            </div>

            <div 
                id="cta"
                className="flex flex-col items-center opacity-0
                translate-y-20"
            >
                <a href="#highlights" className="btn">Buy</a>
                <p className="font-normal text-xl">
                    From $199/mo. or $999
                </p>
            </div>
        </section>
    );
};

export default Hero;