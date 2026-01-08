import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Scale with AI?
        </h2>
        <p className="text-indigo-100 mb-8">
          Join teams using Ryze to automate decisions and grow faster.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Book a Demo</Button>
        </div>
      </div>
    </section>
  );
}
