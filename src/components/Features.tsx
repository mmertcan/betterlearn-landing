import { Beaker, GraduationCap, BarChart } from 'lucide-react'

export default function Features() {
  // Define your features in an array for easy maintenance
  const features = [
    {
      name: 'Science-Based Approach',
      description: 'Learning methods backed by cognitive science and educational research.',
      icon: Beaker,
    },
    {
      name: 'Personalized Learning',
      description: 'AI-powered system adapts to your unique learning style and pace.',
      icon: GraduationCap,
    },
    {
      name: 'Track Progress',
      description: 'Detailed analytics to monitor your learning journey and improvements.',
      icon: BarChart,
    },
  ]

  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to excel in your learning journey
          </p>
        </div>
        
        {/* Feature grid */}
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}