import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import ToolsShowcase from './components/home/ToolsShowcase';
import BlogPreview from './components/home/BlogPreview';
import NewsletterSection from './components/home/NewsletterSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ToolsShowcase />
      <BlogPreview />
      <NewsletterSection />
    </div>
  );
}