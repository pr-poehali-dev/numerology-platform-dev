import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { calculateCompatibility } from '@/lib/numerology';
import Icon from '@/components/ui/icon';

interface Result {
  score: number;
  level: string;
  description: string;
  num1: number;
  num2: number;
}

const Compatibility = () => {
  const [name1, setName1] = useState('');
  const [date1, setDate1] = useState('');
  const [name2, setName2] = useState('');
  const [date2, setDate2] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const handleCalculate = () => {
    if (!date1 || !date2) return;
    setResult(calculateCompatibility(date1, date2));
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 85) return 'from-emerald-600 to-emerald-400';
    if (score >= 70) return 'from-yellow-600 to-yellow-400';
    return 'from-orange-600 to-orange-400';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Анализ союза</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">Совместимость пар</h1>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/70 mt-4 max-w-xl mx-auto">
            Нумерология раскрывает глубинную совместимость двух людей через взаимодействие их чисел жизненного пути.
          </p>
        </div>

        <div className="mystic-card p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-600/60 border border-purple-400/40 flex items-center justify-center text-yellow-300 text-sm">1</div>
                <h3 className="font-cinzel text-purple-200 tracking-wide">Первый человек</h3>
              </div>
              <input
                type="text"
                value={name1}
                onChange={e => setName1(e.target.value)}
                placeholder="Имя (необязательно)"
                className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-yellow-400/50 transition-colors mb-3"
              />
              <input
                type="date"
                value={date1}
                onChange={e => setDate1(e.target.value)}
                className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50 transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-violet-600/60 border border-violet-400/40 flex items-center justify-center text-yellow-300 text-sm">2</div>
                <h3 className="font-cinzel text-purple-200 tracking-wide">Второй человек</h3>
              </div>
              <input
                type="text"
                value={name2}
                onChange={e => setName2(e.target.value)}
                placeholder="Имя (необязательно)"
                className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-yellow-400/50 transition-colors mb-3"
              />
              <input
                type="date"
                value={date2}
                onChange={e => setDate2(e.target.value)}
                className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50 transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleCalculate}
              disabled={!date1 || !date2}
              className="cosmic-btn w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ◈ Рассчитать совместимость
            </button>
          </div>
        </div>

        {result && (
          <div className="space-y-6">
            <div className="mystic-card p-8 text-center">
              <img
                src="https://cdn.poehali.dev/projects/8739d576-cdd0-4a54-89a5-81874a665a50/files/999256f1-3314-4c4e-a438-392e14162781.jpg"
                alt="Совместимость"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6 mandala-glow"
              />
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="number-badge mx-auto mb-2 text-yellow-300">{result.num1}</div>
                  <p className="text-purple-300 text-xs font-cinzel">{name1 || 'Первый'}</p>
                </div>
                <div className="text-4xl text-purple-400">✦</div>
                <div className="text-center">
                  <div className="number-badge mx-auto mb-2 text-yellow-300">{result.num2}</div>
                  <p className="text-purple-300 text-xs font-cinzel">{name2 || 'Второй'}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className={`text-6xl font-bold font-cinzel mb-1 ${getScoreColor(result.score)}`}>
                  {result.score}%
                </div>
                <p className={`font-cinzel text-lg tracking-wide ${getScoreColor(result.score)}`}>
                  {result.level} совместимость
                </p>
              </div>

              <div className="w-full bg-purple-900/60 rounded-full h-3 mb-6 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getScoreGradient(result.score)} transition-all duration-1000`}
                  style={{ width: `${result.score}%` }}
                />
              </div>

              <div className="section-divider" />
              <p className="text-purple-100/80 leading-relaxed mt-4 text-base max-w-lg mx-auto">
                {result.description}
              </p>
            </div>

            <div className="mystic-card p-6">
              <h3 className="font-cinzel text-yellow-300 text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <Icon name="Info" size={14} /> Как интерпретировать результат
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {[
                  { range: '85–100%', label: 'Очень высокая', color: 'text-emerald-400', desc: 'Гармоничный союз с сильной естественной связью' },
                  { range: '70–84%', label: 'Высокая / Хорошая', color: 'text-yellow-400', desc: 'Хорошая основа, требует взаимопонимания' },
                  { range: 'до 70%', label: 'Средняя', color: 'text-orange-400', desc: 'Возможен союз, требует работы и уважения' },
                ].map(item => (
                  <div key={item.range} className="bg-purple-900/40 rounded-lg p-3">
                    <p className={`font-cinzel font-bold ${item.color} mb-1`}>{item.range}</p>
                    <p className="text-purple-200 text-xs font-semibold mb-1">{item.label}</p>
                    <p className="text-purple-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Compatibility;
