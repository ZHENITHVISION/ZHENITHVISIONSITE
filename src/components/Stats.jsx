import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Stats.css';

const stats = [
  { value: 50,  suffix: '+', label: 'Clients Satisfaits',   icon: '🤝' },
  { value: 200, suffix: '+', label: 'Projets Réalisés',     icon: '🎨' },
  { value: 3,   suffix: ' ans', label: "D'Expérience",      icon: '⭐' },
  { value: 24,  suffix: 'h',  label: 'Délai Moyen',         icon: '⚡' },
];

const AnimatedCounter = ({ value, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="stat-count">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="stats-section">
      <div className="stats-inner" ref={ref}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="stat-icon">{stat.icon}</span>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
