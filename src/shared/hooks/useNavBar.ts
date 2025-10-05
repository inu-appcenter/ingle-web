import { useRef, useState } from 'react';

export const useNavBar = (timeout = 2200) => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<number | null>(null);

  const showNavBar = () => {
    setVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setVisible(false);
    }, timeout);
  };

  return { visible, showNavBar };
};
