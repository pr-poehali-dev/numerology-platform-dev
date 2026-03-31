import { NumberInfo } from '@/lib/numerology';

interface NumberCardProps {
  info: NumberInfo;
  compact?: boolean;
}

const NumberCard = ({ info, compact = false }: NumberCardProps) => {
  return (
    <div className="mystic-card p-6 animate-pulse-glow">
      <div className="flex items-start gap-4 mb-4">
        <div className="number-badge text-yellow-300 flex-shrink-0">
          {info.number}
        </div>
        <div>
          <h3 className="font-cinzel text-yellow-300 text-lg font-semibold">{info.title}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {info.keywords.map(kw => (
              <span key={kw} className="text-xs px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/40">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-purple-100/80 text-sm leading-relaxed mb-4">{info.description}</p>

      {!compact && (
        <>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-purple-900/40 rounded-lg p-3">
              <p className="text-xs text-purple-400 mb-1 font-cinzel tracking-wide">Планета</p>
              <p className="text-yellow-300 text-sm font-semibold">✦ {info.planet}</p>
            </div>
            <div className="bg-purple-900/40 rounded-lg p-3">
              <p className="text-xs text-purple-400 mb-1 font-cinzel tracking-wide">Стихия</p>
              <p className="text-yellow-300 text-sm font-semibold">◈ {info.element}</p>
            </div>
            <div className="bg-purple-900/40 rounded-lg p-3">
              <p className="text-xs text-purple-400 mb-1 font-cinzel tracking-wide">Цвет</p>
              <p className="text-yellow-300 text-sm font-semibold">◉ {info.color}</p>
            </div>
            <div className="bg-purple-900/40 rounded-lg p-3">
              <p className="text-xs text-purple-400 mb-1 font-cinzel tracking-wide">Камень</p>
              <p className="text-yellow-300 text-sm font-semibold">◈ {info.gemstone}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-emerald-400 mb-2 font-cinzel tracking-wide">✦ Сильные стороны</p>
              <ul className="space-y-1">
                {info.strengths.map(s => (
                  <li key={s} className="text-xs text-purple-200 flex items-start gap-1">
                    <span className="text-emerald-400 mt-0.5">·</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-red-400 mb-2 font-cinzel tracking-wide">✦ Слабые стороны</p>
              <ul className="space-y-1">
                {info.weaknesses.map(w => (
                  <li key={w} className="text-xs text-purple-200 flex items-start gap-1">
                    <span className="text-red-400 mt-0.5">·</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NumberCard;
