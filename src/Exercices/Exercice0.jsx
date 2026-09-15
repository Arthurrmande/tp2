import {motion} from "motion/react";

// Utilisation de Variants pour définir les états de l'animation
// 'hidden' : état initial
// 'visible' : état final
// 'transition' : paramètres de l'animation
//  'delayChildren': déclenche l'animation de tous les enfants après un délai
//  'staggerChildren': déclenche les animations des enfants les unes après les autres

const containerVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -500 },
  visible: {opacity: 1, scale: 1, y: 0, transition: {duration: 0.5, type: "spring", delay: 1, delayChildren: 2, staggerChildren: 2},},
};

const SpanVariants = {
  hidden: { opacity: 0, scale: 0.5, y: -500 },
  visible: {opacity: 1, scale: 1, y: 0, transition: {duration: 0.5, type: "spring"},},
};

export default function Exercice0() {
  return (
      <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className = "text-5xl font-bold text-white">
          
        Hello <motion.span variants={SpanVariants} className="inline-block text-blue-500"> World </motion.span> !

      </motion.h1>
  );
}
