import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const team = [
  { name: 'Елена Светлова', role: 'Нумеролог-практик', exp: '15 лет опыта', icon: '✦' },
  { name: 'Виктор Арканов', role: 'Исследователь мистических систем', exp: '12 лет опыта', icon: '◉' },
  { name: 'Марина Звёздная', role: 'Специалист по Каббале', exp: '10 лет опыта', icon: '◈' },
];

const values = [
  { icon: '✦', title: 'Точность', desc: 'Все расчёты основаны на классических нумерологических системах Пифагора и современных методах.' },
  { icon: '◉', title: 'Глубина', desc: 'Мы даём не поверхностные описания, а детальный анализ вашей нумерологической матрицы.' },
  { icon: '◈', title: 'Духовность', desc: 'Нумерология для нас — не развлечение, а серьёзный инструмент самопознания и роста.' },
  { icon: '◆', title: 'Доступность', desc: 'Сложные знания мы делаем понятными и применимыми в реальной жизни каждого человека.' },
];

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Наша миссия</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">О проекте Нумерос</h1>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <img
              src="https://cdn.poehali.dev/projects/8739d576-cdd0-4a54-89a5-81874a665a50/files/f4ab06b6-ab4b-49a0-a87d-fcaffd68f087.jpg"
              alt="О нас"
              className="rounded-2xl w-full mandala-glow"
            />
          </div>
          <div>
            <h2 className="font-cinzel text-2xl text-white font-bold mb-4">Мы верим в силу чисел</h2>
            <div className="section-divider mb-4" />
            <p className="text-purple-200/80 leading-relaxed mb-4">
              Нумерос — это платформа, созданная с любовью к древним знаниям. Мы объединили классическую нумерологию
              Пифагора, каббалистические традиции и современные методы анализа в единую систему.
            </p>
            <p className="text-purple-200/80 leading-relaxed mb-4">
              Наша миссия — сделать глубокие нумерологические знания доступными для каждого. Мы верим, что
              понимание числовых вибраций помогает принимать более осознанные решения и строить счастливую жизнь.
            </p>
            <p className="text-purple-200/80 leading-relaxed">
              Каждый раздел платформы создан опытными нумерологами, которые вложили в него годы практики и исследований.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-cinzel text-2xl text-white font-bold">Наши ценности</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(v => (
              <div key={v.title} className="mystic-card p-6">
                <div className="text-3xl text-yellow-400 mb-3">{v.icon}</div>
                <h3 className="font-cinzel text-yellow-300 font-semibold mb-2">{v.title}</h3>
                <p className="text-purple-200/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-cinzel text-2xl text-white font-bold">Команда</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {team.map(member => (
              <div key={member.name} className="mystic-card p-6 text-center">
                <div className="text-4xl text-yellow-400 mb-3">{member.icon}</div>
                <h3 className="font-cinzel text-white font-semibold mb-1">{member.name}</h3>
                <p className="text-purple-300 text-sm mb-2">{member.role}</p>
                <p className="text-purple-500 text-xs">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mystic-card p-8 text-center">
          <div className="text-4xl mb-4">✦</div>
          <h2 className="font-cinzel text-xl text-yellow-300 font-bold mb-4">Начните своё исследование</h2>
          <p className="text-purple-200/70 text-sm mb-6 max-w-md mx-auto">
            Откройте тайны своей нумерологической матрицы прямо сейчас — это займёт меньше минуты.
          </p>
          <Link to="/calculator" className="cosmic-btn inline-block">
            ✦ Рассчитать бесплатно
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
