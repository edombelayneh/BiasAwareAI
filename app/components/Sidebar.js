import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4 fixed">
      <h2 className="text-2xl font-bold mb-6">BiasAwareAI</h2>
      <nav className="flex flex-col space-y-4">
        <ul>
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Intro</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Race</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Gender</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Job Opportunities</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Solutions</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">References</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;