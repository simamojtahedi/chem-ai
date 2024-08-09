import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToTop() {
  const root = document.getElementById("root");
  root?.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export const RoutesWrapper: React.FC<any> = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    scrollToTop();
  }, [location.pathname]);
  return children;
};
