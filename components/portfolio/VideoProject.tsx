import React, { useState, useEffect, useRef } from 'react';
const VideoProject = ({video}:any) => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef(null);
    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
          const isVisible = entries[0].isIntersecting;
          setIsVisible(isVisible);
          
          if (isVisible) {
            console.log('El video está visible en la pantalla');
          }
        }, options);
        
        if (videoRef.current) {
          observer.observe(videoRef.current);
        }
        
        return () => {
          if (videoRef.current) {
            observer.unobserve(videoRef.current);
          }
        };
      }, []);
  return (
    <section>
    <iframe ref={videoRef} className='w-full h-[200px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]' src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </section>
  )
}

export default VideoProject