import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type FadeInProps = {
    children: ReactNode;
    delay?: number;
    y?: number;
    duration?: number;
    className?: string;
};

export default function FadeIn({ children, delay = 0, y = 16, duration = 0.4, className }: FadeInProps) {
    const reduced = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: reduced ? 0 : y,
                scale: reduced ? 1 : 1.03,
                filter: reduced ? 'blur(0px)' : 'blur(6px)',
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'transform, opacity, filter' }}
        >
            {children}
        </motion.div>
    );
}
