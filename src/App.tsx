/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rocket, Layout, Sparkles, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 py-12 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Loyihangiz muvaffaqiyatli ishga tushdi!</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Salom, Sardor!
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Bu sizning yangi loyihangiz. Men sizga loyihani boshlashda va uni yanada mukammal qilishda yordam beraman. 
            Hozirda loyiha Vite, React va Tailwind CSS bilan sozlangan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Boshlash
            </button>
            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              Kodni o'zgartirish
            </button>
          </div>
        </motion.div>
      </header>

      {/* Features Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Layout className="w-6 h-6 text-blue-600" />}
            title="Zamonaviy Dizayn"
            description="Tailwind CSS yordamida juda tez va moslashuvchan interfeyslar yarating."
          />
          <FeatureCard 
            icon={<Rocket className="w-6 h-6 text-indigo-600" />}
            title="Tezkor Build"
            description="Vite yordamida loyihangiz bir zumda ishga tushadi va kod o'zgarishi darhol ko'rinadi."
          />
          <FeatureCard 
            icon={<Code2 className="w-6 h-6 text-purple-600" />}
            title="TypeScript"
            description="Xatolarni kamaytirish va yanada ishonchli kod yozish uchun TypeScript o'rnatilgan."
          />
        </div>
      </main>

      <footer className="border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mening Ilk Loyiham. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

