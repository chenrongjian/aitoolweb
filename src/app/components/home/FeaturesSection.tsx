'use client';

import { motion } from 'framer-motion';
import {
  SparklesIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Assistance',
    description: 'Get intelligent code suggestions and autocompletions powered by state-of-the-art AI models.',
    icon: SparklesIcon,
  },
  {
    name: 'Boost Productivity',
    description: 'Write code faster and more efficiently with AI-assisted development tools and shortcuts.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Smart Code Analysis',
    description: 'Detect potential issues and get recommendations for code improvements in real-time.',
    icon: CommandLineIcon,
  },
  {
    name: 'Advanced Integration',
    description: 'Seamlessly integrate with your favorite IDEs and development environments.',
    icon: CpuChipIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="container">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to master AI tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover the powerful features that will help you become more productive in your development workflow.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={item}
                className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <feature.icon
                    className="h-12 w-12 text-primary-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
