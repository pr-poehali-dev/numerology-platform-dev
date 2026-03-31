import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import NumberCard from '@/components/numerology/NumberCard';
import { numberDescriptions } from '@/lib/numerology';

const Guide = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const numbers = [1,2,3,4,5,6,7,8,9,11,22,33];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Нумерологические вибрации</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">Справочник чисел</h1>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/70 mt-4 max-w-xl mx-auto">
            Каждое число несёт уникальную космическую вибрацию. Выберите число, чтобы узнать его полное описание.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {numbers.map(n => (
            <button
              key={n}
              onClick={() => setSelected(selected === n ? null : n)}
              className={`w-14 h-14 rounded-full font-cinzel font-bold text-lg transition-all duration-300 border ${
                selected === n
                  ? 'bg-purple-600 border-yellow-400/60 text-yellow-300 scale-110 violet-glow'
                  : 'bg-purple-950/60 border-purple-700/40 text-purple-300 hover:border-yellow-400/30 hover:text-yellow-300'
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        {selected && numberDescriptions[selected] ? (
          <div className="max-w-2xl mx-auto">
            <NumberCard info={numberDescriptions[selected]} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6,7,8,9].map(n => (
              <button
                key={n}
                onClick={() => setSelected(n)}
                className="mystic-card p-5 text-left hover:border-yellow-400/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="number-badge text-yellow-300 w-12 h-12 text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{n}</div>
                  <div>
                    <p className="font-cinzel text-yellow-300 text-sm font-semibold">{numberDescriptions[n]?.title}</p>
                    <p className="text-purple-400 text-xs">{numberDescriptions[n]?.planet}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {numberDescriptions[n]?.keywords.slice(0,3).map(kw => (
                    <span key={kw} className="text-xs px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/40">
                      {kw}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        )}

        {!selected && (
          <div className="mt-8">
            <h3 className="font-cinzel text-yellow-400 text-center text-sm tracking-widest uppercase mb-4">Мастер-числа</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[11,22,33].map(n => (
                <button
                  key={n}
                  onClick={() => setSelected(n)}
                  className="mystic-card p-5 text-left hover:border-yellow-400/30 transition-all duration-300 group border-yellow-800/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="number-badge text-yellow-300 w-12 h-12 text-xl flex-shrink-0 group-hover:scale-110 transition-transform" style={{borderColor: 'rgba(251,191,36,0.7)'}}>{n}</div>
                    <div>
                      <p className="font-cinzel text-yellow-300 text-sm font-semibold">{numberDescriptions[n]?.title}</p>
                      <p className="text-yellow-600 text-xs">Мастер-число</p>
                    </div>
                  </div>
                  <p className="text-purple-300 text-xs leading-relaxed line-clamp-2">{numberDescriptions[n]?.description.slice(0,100)}...</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Guide;
