import PromptInjectionSimulator from '@/components/PromptInjectionSimulator'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Prompt Injection & Jailbreak Defense Simulator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Test and analyze prompt injections and jailbreak attempts against AI systems. 
            Build stronger defenses by understanding attack vectors.
          </p>
        </div>
        <PromptInjectionSimulator />
      </div>
    </main>
  )
}
