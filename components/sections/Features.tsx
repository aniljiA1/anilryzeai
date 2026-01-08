// components/sections/Features.tsx
const features = [
  { title: "AI Insights", desc: "Data-driven decisions in real-time" },
  { title: "Automation", desc: "Reduce manual work with smart workflows" },
  { title: "Scalability", desc: "Built to grow with your business" },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Ryze?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
