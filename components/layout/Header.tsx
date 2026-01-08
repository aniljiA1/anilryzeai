// components/layout/Header.tsx
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Ryze.ai
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>

        <Button>Book a Demo</Button>
      </div>
    </header>
  );
}
