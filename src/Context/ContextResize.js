import { createContext, useContext, useState, useEffect } from "react";

const ContextResize = createContext(undefined);

export const ResizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Define a function that updates the windowWidth state with the current inner width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Add an event listener to the 'resize' event and attach the handleResize function
    window.addEventListener("resize", handleResize);
    // Cleanup function: Remove the 'resize' event listener when the component unmounts or the effect changes
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependencies array means this effect runs only once after initial render

  const values = {
    windowWidth,
    setWindowWidth,
  };

  return (
    <ContextResize.Provider value={values}>{children}</ContextResize.Provider>
  );
};

export const useResize = () => useContext(ContextResize);
