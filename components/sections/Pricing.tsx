import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Plan {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const plans: Plan[] = [
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`p-6 rounded-xl border ${
                plan.highlighted
                  ? "border-indigo-600 bg-indigo-50 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>

              <ul className="space-y-2 mb-6 text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 text-indigo-600">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
