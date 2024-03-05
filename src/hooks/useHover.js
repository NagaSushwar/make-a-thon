import { useRef, useState, useEffect } from "react";

function useHover() {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const enter = () => setIsHovered(true);
  const leave = () => setIsHovered(false);

  useEffect(() => {
    const refCopy = ref.current;
    refCopy.addEventListener("mouseenter", enter);
    refCopy.addEventListener("mouseleave", leave);

    return () => {
      refCopy.removeEventListener("mouseenter", enter);
      refCopy.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [ref, isHovered];
}

export default useHover;
