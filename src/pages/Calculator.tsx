import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import NumberCard from '@/components/numerology/NumberCard';
import { calculateLifePath, calculateDestiny, calculateSoulNumber, calculatePersonality, calculatePersonalYear, numberDescriptions, personalYearDescriptions } from '@/lib/numerology';
import Icon from '@/components/ui/icon';

interface Result {
  lifePath: number;
  destiny: number;
  soul: number;
  personality: number;
  personalYear: number;
}

const Calculator = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [saved, setSaved] = useState(false);

  const handleCalculate = () => {
    if (!birthDate) return;
    const lifePath = calculateLifePath(birthDate);
    const destiny = name ? calculateDestiny(name) : 0;
    const soul = name ? calculateSoulNumber(name) : 0;
    const personality = name ? calculatePersonality(name) : 0;
    const personalYear = calculatePersonalYear(birthDate);
    setResult({ lifePath, destiny, soul, personality, personalYear });
    setSaved(false);
  };

  const handleSave = () => {
    if (!result) return;
    const existing = JSON.parse(localStorage.getItem('numerology_history') || '[]');
    existing.unshift({
      id: Date.now(),
      name: name || 'Без имени',
      birthDate,
      result,
      date: new Date().toLocaleDateString('ru-RU'),
    });
    localStorage.setItem('numerology_history', JSON.stringify(existing.slice(0, 20)));
    setSaved(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Нумерологический анализ</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">Калькулятор чисел</h1>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/70 mt-4 max-w-xl mx-auto">
            Введите ваше полное имя и дату рождения, чтобы раскрыть ключевые нумерологические вибрации вашей судьбы.
          </p>
        </div>

        <div className="mystic-card p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-2">
                Полное имя (необязательно)
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Иванов Иван Иванович"
                className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-2">
                Дата рождения *
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={e => setBirthDate(e.target.value)}
                className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50 transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>
          <button
            onClick={handleCalculate}
            disabled={!birthDate}
            className="cosmic-btn w-full disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ✦ Рассчитать нумерологические числа
          </button>
        </div>

        {result && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-cinzel text-yellow-300 text-xl">Ваши числа</h2>
              <button
                onClick={handleSave}
                disabled={saved}
                className="flex items-center gap-2 text-sm text-purple-300 hover:text-yellow-300 transition-colors disabled:text-green-400"
              >
                <Icon name={saved ? 'CheckCircle' : 'Bookmark'} size={16} />
                {saved ? 'Сохранено' : 'Сохранить в профиль'}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Число жизненного пути', value: result.lifePath, icon: '◉' },
                { label: `Личный год ${new Date().getFullYear()}`, value: result.personalYear, icon: '✧' },
                ...(name ? [
                  { label: 'Число судьбы', value: result.destiny, icon: '✦' },
                  { label: 'Число души', value: result.soul, icon: '◈' },
                  { label: 'Число личности', value: result.personality, icon: '◆' },
                ] : []),
              ].map(item => (
                <div key={item.label} className="mystic-card p-4 text-center">
                  <div className="text-xl text-yellow-400 mb-2">{item.icon}</div>
                  <div className="number-badge mx-auto mb-2 text-yellow-300">{item.value}</div>
                  <p className="text-xs text-purple-300 font-cinzel tracking-wide leading-tight">{item.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-cinzel text-purple-300 text-sm tracking-widest uppercase mb-4">
                ✦ Подробное описание числа жизненного пути — {result.lifePath}
              </h3>
              {numberDescriptions[result.lifePath] && (
                <NumberCard info={numberDescriptions[result.lifePath]} />
              )}
            </div>

            {name && result.destiny !== result.lifePath && numberDescriptions[result.destiny] && (
              <div>
                <h3 className="font-cinzel text-purple-300 text-sm tracking-widest uppercase mb-4">
                  ✦ Число судьбы — {result.destiny}
                </h3>
                <NumberCard info={numberDescriptions[result.destiny]} compact />
              </div>
            )}

            {personalYearDescriptions[result.personalYear] && (
              <div>
                <h3 className="font-cinzel text-purple-300 text-sm tracking-widest uppercase mb-4">
                  ✧ Личный год {new Date().getFullYear()} — вибрация {result.personalYear}
                </h3>
                <div className="mystic-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="number-badge text-yellow-300 flex-shrink-0">{result.personalYear}</div>
                    <div>
                      <h4 className="font-cinzel text-yellow-300 text-lg font-semibold">
                        {personalYearDescriptions[result.personalYear].title}
                      </h4>
                      <p className="text-purple-400 text-xs mt-1">
                        {personalYearDescriptions[result.personalYear].theme}
                      </p>
                    </div>
                  </div>
                  <p className="text-purple-100/80 text-sm leading-relaxed mb-4">
                    {personalYearDescriptions[result.personalYear].description}
                  </p>
                  <div className="bg-purple-900/40 rounded-lg p-4 border border-yellow-800/30">
                    <p className="text-xs text-yellow-400 font-cinzel tracking-wide mb-1">✦ Совет на год</p>
                    <p className="text-purple-200/80 text-sm">
                      {personalYearDescriptions[result.personalYear].advice}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Calculator;