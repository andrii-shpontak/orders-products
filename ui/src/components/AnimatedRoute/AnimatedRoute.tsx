import { AnimatePresence, motion } from 'framer-motion';

import { FC } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedRouteProps {
  children: React.ReactNode;
}

const AnimatedRoute: FC<AnimatedRouteProps> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname} // Use location.pathname for a unique key
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
