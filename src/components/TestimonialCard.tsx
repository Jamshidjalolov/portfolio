import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      className="panel h-full p-6"
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08]">
        <Quote className="h-5 w-5 text-cyan-200" />
      </div>
      <p className="mt-5 text-base leading-8 text-slate-200">{testimonial.quote}</p>
      <div className="mt-6 soft-divider" />
      <div className="mt-5">
        <div className="text-lg font-semibold text-white">{testimonial.name}</div>
        <div className="mt-1 text-sm text-slate-400">{testimonial.role}</div>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;

