'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white" />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="container px-4 mx-auto mt-16 sm:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>
                <span className="block text-base font-semibold tracking-wide text-primary-600 uppercase">
                  Welcome to AI Tools
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Explore the Infinite</span>
                  <span className="block text-primary-600">Possibilities of AI</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Discover and master cutting-edge AI programming assistants to boost your development efficiency
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
                <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                  <Link
                    href="/tools"
                    className="btn btn-primary w-full sm:w-auto flex items-center justify-center"
                  >
                    Start Exploring
                  </Link>
                  <Link
                    href="/blog"
                    className="btn btn-secondary w-full sm:w-auto flex items-center justify-center"
                  >
                    Browse Tools
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="w-full h-96 bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-white text-9xl">
                    AI
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
