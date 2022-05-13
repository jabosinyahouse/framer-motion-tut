import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Box1() {
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <div className="box-container">
      {/* define which html element that you want to animate */}
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        transition={{
          type: "spring", // default: "tween" when initiate transition props
          stiffness: 60,
          damping: 5,
          //   duration: 0.5,
        }}
        animate={{ x: isAnimate ? "50vw" : 0, opacity: isAnimate ? 1 : 0.25 }}
        onClick={() => setIsAnimate(!isAnimate)}
      ></motion.div>
    </div>
  );
}
