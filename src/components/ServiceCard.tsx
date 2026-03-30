import { motion } from 'framer-motion';
import { LayoutDashboard, MonitorSmartphone, PenTool, Rocket } from 'lucide-react';
import { Service } from '../types';

type ServiceCardProps = {
  service: Service;
};

const iconMap = {
  'layout-dashboard': LayoutDashboard,
  'monitor-smartphone': MonitorSmartphone,
  'pen-tool': PenTool,
  rocket: Rocket,
};

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
      className="panel h-full p-6"
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
    >
      <div
        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10"
        style={{
          background: `linear-gradient(180deg, ${service.accent}2c, rgba(255,255,255,0.04))`,
          boxShadow: `0 18px 48px ${service.accent}20`,
        }}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[0.96rem]">{service.description}</p>
    </motion.article>
  );
}

export default ServiceCard;

