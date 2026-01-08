import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const plans = [
  {
    title: "Starter",
    price: "Free",
    features: ["Basic AI Insights", "Limited Automation", "Email Support"],
  },
  {
    title: "Pro",
    price: "$29/month",
    features: ["Advanced AI Insights", "Full Automation", "Priority Support"],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: ["Custom AI Models", "Dedicated Manager", "24/7 Support"],
  },
];

export default function Pricing() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={plan.highlighted ? "border-indigo-600 shadow-lg" : ""}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>

              <ul className="space-y-2 mb-6 text-gray-600">
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <Button className="w-full">Get Started</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
