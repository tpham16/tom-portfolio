"use client" // this is a client component

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
  // any props that come into the component
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current; // Copy ref.current to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    if (element) {
      observer.observe(element);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [offset]); // Include `offset` in the dependency array

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}


