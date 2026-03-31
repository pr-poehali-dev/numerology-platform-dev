import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { numberDescriptions } from '@/lib/numerology';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

interface HistoryItem {
  id: number;
  name: string;
  birthDate: string;
  result: {
    lifePath: number;
    destiny: number;
    soul: number;
    personality: number;
  };
  date: string;
}

const Profile = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [selected, setSelected] = useState<HistoryItem | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('numerology_history') || '[]');
    setHistory(stored);
  }, []);

  const handleDelete = (id: number) => {
    const updated = history.filter(h => h.id !== id);
    localStorage.setItem('numerology_history', JSON.stringify(updated));
    setHistory(updated);
    if (selected?.id === id) setSelected(null);
  };

  const handleClearAll = () => {
    localStorage.removeItem('numerology_history');
    setHistory([]);
    setSelected(null);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Ваши расчёты</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">Личный профиль</h1>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/70 mt-4 max-w-xl mx-auto">
            Здесь хранятся все ваши нумерологические расчёты.
          </p>
        </div>

        {history.length === 0 ? (
          <div className="mystic-card p-12 text-center">
            <div className="text-5xl mb-4 text-purple-600">◉</div>
            <h3 className="font-cinzel text-purple-300 text-lg mb-3">Пока нет сохранённых расчётов</h3>
            <p className="text-purple-500 text-sm mb-6">Рассчитайте своё число и сохраните результат</p>
            <Link to="/calculator" className="cosmic-btn inline-block">
              ✦ Перейти к калькулятору
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-purple-400 text-sm">{history.length} расчётов сохранено</p>
              <button
                onClick={handleClearAll}
                className="text-xs text-purple-500 hover:text-red-400 transition-colors flex items-center gap-1"
              >
                <Icon name="Trash2" size={12} /> Очистить всё
              </button>
            </div>

            {history.map(item => (
              <div
                key={item.id}
                className={`mystic-card p-5 cursor-pointer transition-all duration-300 ${
                  selected?.id === item.id ? 'border-yellow-400/40' : 'hover:border-purple-600/50'
                }`}
                onClick={() => setSelected(selected?.id === item.id ? null : item)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="number-badge text-yellow-300 w-12 h-12 text-xl flex-shrink-0">
                      {item.result.lifePath}
                    </div>
                    <div>
                      <p className="font-cinzel text-white font-semibold">{item.name}</p>
                      <p className="text-purple-400 text-xs mt-0.5">
                        {new Date(item.birthDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                        {' · '}Сохранено {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name={selected?.id === item.id ? 'ChevronUp' : 'ChevronDown'}
                      size={16}
                      className="text-purple-400"
                    />
                    <button
                      onClick={e => { e.stopPropagation(); handleDelete(item.id); }}
                      className="text-purple-600 hover:text-red-400 transition-colors p-1"
                    >
                      <Icon name="X" size={14} />
                    </button>
                  </div>
                </div>

                {selected?.id === item.id && (
                  <div className="mt-5 pt-4 border-t border-purple-800/40">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: 'Жизненный путь', value: item.result.lifePath },
                        { label: 'Судьба', value: item.result.destiny },
                        { label: 'Душа', value: item.result.soul },
                        { label: 'Личность', value: item.result.personality },
                      ].map(n => (
                        <div key={n.label} className="bg-purple-900/40 rounded-lg p-3 text-center">
                          <div className="text-xl font-bold text-yellow-300 font-cinzel mb-1">{n.value || '—'}</div>
                          <p className="text-xs text-purple-400 font-cinzel">{n.label}</p>
                        </div>
                      ))}
                    </div>

                    {numberDescriptions[item.result.lifePath] && (
                      <div className="bg-purple-900/30 rounded-lg p-4">
                        <p className="font-cinzel text-yellow-300 text-sm mb-2">
                          {numberDescriptions[item.result.lifePath].title}
                        </p>
                        <p className="text-purple-200/70 text-xs leading-relaxed">
                          {numberDescriptions[item.result.lifePath].description.slice(0, 200)}...
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
