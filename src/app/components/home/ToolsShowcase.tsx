'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const tools = [
  {
    name: 'GitHub Copilot',
    description: 'Your AI pair programmer that helps you write code faster and with fewer bugs.',
    image: '/images/placeholder.png',
    link: '/tools/github-copilot',
  },
  {
    name: 'Codeium',
    description: 'Enterprise-ready AI code completion and chat for modern development.',
    image: '/images/placeholder.png',
    link: '/tools/codeium',
  },
  {
    name: 'Tabnine',
    description: 'AI assistant that makes you a better developer by suggesting code completions.',
    image: '/images/placeholder.png',
    link: '/tools/tabnine',
  },
  {
    name: 'Amazon CodeWhisperer',
    description: 'AI-powered code companion that generates code suggestions in real-time.',
    image: '/images/placeholder.png',
    link: '/tools/codewhisperer',
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function ToolsShowcase() {
  return (
    <div className="py-16 bg-white lg:py-24">
      <div className="container">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Popular Tools
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Discover Top AI Programming Tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore the most popular AI-powered development tools that are revolutionizing how we write code.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={item}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="h-48 w-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 text-xl font-bold">{tool.name}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <Link href={tool.link} className="hover:underline">
                        {tool.name}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base text-gray-500">{tool.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={tool.link}
                      className="text-base font-semibold text-primary-600 hover:text-primary-500"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
