import { useEffect, useState } from 'react';

function useOnScreen(ref, options, isElementStartVisible = false) {
  const [visible, setVisible] = useState(isElementStartVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return visible;
}

export default useOnScreen;
