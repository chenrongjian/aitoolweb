'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
  {
    title: 'Getting Started with GitHub Copilot',
    description: 'Learn how to set up and make the most of GitHub Copilot in your development workflow.',
    date: '2024-03-01',
    readTime: '5 min read',
    slug: '/blog/getting-started-with-github-copilot',
  },
  {
    title: 'AI Code Completion Tools Comparison',
    description: 'A detailed comparison of popular AI code completion tools to help you choose the right one.',
    date: '2024-02-28',
    readTime: '8 min read',
    slug: '/blog/ai-code-completion-tools-comparison',
  },
  {
    title: 'Boost Your Productivity with AI Tools',
    description: 'Discover how AI programming tools can significantly improve your coding efficiency.',
    date: '2024-02-25',
    readTime: '6 min read',
    slug: '/blog/boost-productivity-with-ai-tools',
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

export default function BlogPreview() {
  return (
    <div className="py-16 bg-gray-50 lg:py-24">
      <div className="container">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Latest Articles
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Stay Updated with Our Blog
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Read our latest articles about AI programming tools and best practices.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <motion.article
                key={post.title}
                variants={item}
                className="relative flex flex-col bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span className="mx-1">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <Link href={post.slug} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={post.slug}
                    className="text-base font-semibold text-primary-600 hover:text-primary-500"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              View All Articles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
