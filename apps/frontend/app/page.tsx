export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">PropEase</div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Property Management Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The all-in-one platform for landlords in Africa. Screen tenants, manage leases, collect rent, and track maintenance — all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-semibold">
              Get Started Free
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 font-semibold">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tenant Screening",
                description: "Automated background checks and credit verification for reliable tenants",
                icon: "👥"
              },
              {
                title: "Digital Leases",
                description: "Create, sign, and store leases digitally with automatic renewal reminders",
                icon: "📝"
              },
              {
                title: "Rent Collection",
                description: "Track payments, M-Pesa integration, and automated payment reminders",
                icon: "💰"
              },
              {
                title: "Maintenance Tracking",
                description: "Tenant-submitted requests, technician assignment, and repair history",
                icon: "🔧"
              },
              {
                title: "Dashboard & Reports",
                description: "Real-time overview of occupancy, income, and property performance",
                icon: "📊"
              },
              {
                title: "Multi-Property Support",
                description: "Manage multiple properties and tenants from a single dashboard",
                icon: "🏢"
              },
            ].map((feature, i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", units: "1-5 units", price: "1,500", features: ["Tenant Screening", "Digital Leases", "Reminders"] },
              { name: "Growth", units: "6-20 units", price: "3,500", features: ["Everything in Starter", "M-Pesa Integration", "Maintenance Tracking"] },
              { name: "Pro", units: "20+ units", price: "7,000+", features: ["Everything in Growth", "Advanced Reports", "Priority Support"] },
            ].map((plan, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-indigo-600 transition">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.units}</p>
                <div className="text-3xl font-bold text-indigo-600 mb-6">KES {plan.price}/mo</div>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-700">✓ {feature}</li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 PropEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
