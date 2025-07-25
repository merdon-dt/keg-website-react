import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const refScroll = (scrollRef, stopper = true) => {
  if (!stopper) return;
  else {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const customScroll = (
  targetRef,
  options = { behavior: "smooth", block: "start" }
) => {
  if (targetRef?.current) {
    // Use scrollIntoView for the target element

    targetRef.current.scrollIntoView(options);
  } else {

  }
};
