import React, { useState } from "react";
import { motion } from "framer-motion";

const Model = ({selectedImg, setSelectedImg}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop') || e.target.classList.contains('innerBackdrop')){
            setSelectedImg(null);
        }
    }

    const [zoomInPercent, setZoomInPercent] = useState(1);

    function resizeImg(img, e, per) {
      var resize = per;            
      var origH = img.clientHeight;
      var origW = img.clientWidth; 
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      var c = document.querySelector('.backdrop .innerInnerBackdrop');
      let left = mouseX * (resize / 100) - (origW * (resize / 100)) / 2 / 2;
      let top = mouseY * (resize / 100) - (origH * (resize / 100)) / 2 / 2;
      c.scrollLeft = left;
      c.scrollTop = top;
      console.log(left, top)
    }


    const zoomIn = (e) => {
        setZoomInPercent(zoomInPercent + 0.2)
        resizeImg(document.querySelector('.backdrop .innerInnerBackdrop img'), e, zoomInPercent * 100)
        document.querySelector('.backdrop .innerInnerBackdrop').style.overflow = 'auto';
    }   

    return (
        <motion.div className="backdrop" onClick={handleClick} initial={{opacity: 0}} animate={{opacity: 1}}>
            <div className="innerBackdrop">
                <button className="resize" onClick={() => setZoomInPercent(1)}>Reset Size</button>
                <div className="innerInnerBackdrop">
                    <img src={selectedImg} alt="enlarged pic" style={{transform: `scale(${zoomInPercent})`}} onClick={zoomIn}/>
                </div>
                <span className="info">Click to zoom in</span>
            </div>
        </motion.div>
    )
}

export default Model;