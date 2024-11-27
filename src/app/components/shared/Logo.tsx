import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-primary-600">AI Tools</span>
    </Link>
  );
}
