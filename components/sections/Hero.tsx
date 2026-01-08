// components/sections/Hero.tsx
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI That Helps Your Business{" "}
          <span className="text-indigo-600">Grow Smarter</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Ryze uses AI-driven insights to automate decisions, boost
          productivity, and accelerate growth.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Book a Demo</Button>
        </div>
      </div>
    </section>
  );
}
