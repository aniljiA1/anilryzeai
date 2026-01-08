import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Ryze.ai</h3>
          <p className="text-gray-600">
            AI-powered growth platform for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} Ryze.ai. All rights reserved.
      </div>
    </footer>
  );
}
