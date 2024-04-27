import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smoothly scroll to the top of the page when the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use smooth scrolling behavior
    });
  }, [pathname]); // Re-run this effect when pathname changes

  return null; // Since this component doesn't render anything, return null
}

export default ScrollToTop;
