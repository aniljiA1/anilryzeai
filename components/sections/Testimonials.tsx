import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    quote:
      "Ryze helped us automate our workflows and gain insights we never had before.",
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    quote:
      "Clean UI, powerful AI, and real results. Ryze became part of our daily stack.",
  },
  {
    name: "Emily Chen",
    role: "Growth Lead",
    quote:
      "The AI-driven recommendations boosted our team productivity significantly.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <p className="text-gray-600 mb-4">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
