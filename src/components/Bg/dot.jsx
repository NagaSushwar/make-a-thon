import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

const Example = () => {
  const sectionStyle = {
    display: "grid",
    placeContent: "center",
    background: "transparent", // Replace with the actual color code for neutral-900
    height:"100%"
  };

  return (
    <section style={sectionStyle}>
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  const phoneStyle = {
    transformStyle: "preserve-3d",
    transform: "rotateY(-30deg) rotateX(15deg)",
    borderRadius: "24px",
    background: "orange", // Replace with the actual color code for violet-500
  };

  return (
    <div style={phoneStyle}>
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          position: "relative",
          height: "24rem",
          width: "14rem",
          borderRadius: "24px",
          border: "2px solid #ffffff",
          borderBottom: "4px solid #ffffff",
          borderRight: "4px solid #ffffff",
          borderLeft: "2px solid #C7D2FE", // Replace with the actual color code for neutral-200
          borderTop: "2px solid #C7D2FE", // Replace with the actual color code for neutral-200
          background: "#2D3748", // Replace with the actual color code for neutral-900
          padding: "1px", // Adjust as needed
          paddingLeft: "3px", // Adjust as needed
          paddingTop: "3px", // Adjust as needed
        }}
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "2.5%",
          zIndex: "10",
          height: "2px",
          width: "16px",
          transform: "translateX(-50%)",
          borderRadius: "4px",
          background: "#2D3748", // Replace with the actual color code for neutral-900
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          right: "3%",
          top: "2%",
          zIndex: "10",
          display: "flex",
          gap: "2px",
        }}
      >
        <FiWifi style={{ color: "#718096" }} />
        <FiBatteryCharging style={{ color: "#718096" }} />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: "0",
        display: "grid",
        height: "100%",
        width: "100%",
        placeContent: "center",
        overflow: "hidden",
        borderRadius: "20px",
        background: "#ffffff", // Replace with the actual color code for white
      }}
    >
      {/* Example logo from logoispum */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "#8B5CF6" }} // Replace with the actual color code for violet-500
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>

      <button
        style={{
          position: "absolute",
          bottom: "4%",
          left: "4%",
          right: "4%",
          zIndex: "10",
          borderRadius: "8px",
          border: "1px solid #8B5CF6", // Replace with the actual color code for violet-500
          background: "orange", // Replace with the actual color code for white
          padding: "8px",
          fontSize: "14px", // Adjust as needed
          fontWeight: "600",
          color: "#8B5CF6", // Replace with the actual color code for violet-500
          backdropFilter: "blur(10px)",
        }}
      >
        Get Started
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "-72%",
          left: "50%",
          height: "96px",
          width: "96px",
          transform: "translateX(-50%)",
          borderRadius: "48px",
          background: "#8B5CF6", // Replace with the actual color code for violet-500
        }}
      />
    </div>
  );
};

export default Example;
