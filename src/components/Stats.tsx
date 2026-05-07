import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '2500+', label: 'Students Enrolled' },
    { value: '150+', label: 'Expert Faculty' },
    { value: '25+', label: 'Years of Excellence' },
    { value: '100%', label: 'Pass Percentage' },
  ];

  return (
    <section className="py-12 border-y border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center md:items-start md:pl-10 first:pl-0 text-center md:text-left"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-ink mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-gray-500 uppercase tracking-widest text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
