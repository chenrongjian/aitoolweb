'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Implement newsletter subscription
    // This is a mock implementation
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary-700 rounded-3xl px-6 py-10 overflow-hidden sm:px-12 lg:px-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
          
          {/* Decorative elements */}
          <div aria-hidden="true" className="absolute inset-0 bg-grid-white/10 bg-grid" />
          <div
            aria-hidden="true"
            className="absolute -top-96 left-1/2 transform -translate-x-1/2 w-[1440px] h-[678px] bg-gradient-to-br from-primary-500 to-primary-300 blur-3xl opacity-20"
          />
          
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated with AI Tools
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Get the latest updates about AI programming tools, tips, and best practices delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 focus:outline-none rounded-md sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 disabled:opacity-75"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-primary-100"
              >
                Thanks for subscribing! We'll be in touch soon.
              </motion.p>
            )}
            
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-red-200"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
