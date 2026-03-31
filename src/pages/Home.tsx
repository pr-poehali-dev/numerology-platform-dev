import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const features = [
  { icon: '◉', title: 'Калькулятор', desc: 'Узнайте своё число жизненного пути, число судьбы и другие ключевые вибрации', path: '/calculator' },
  { icon: '◈', title: 'Совместимость', desc: 'Рассчитайте нумерологическую совместимость с партнёром, другом или коллегой', path: '/compatibility' },
  { icon: '✦', title: 'Справочник чисел', desc: 'Глубокое описание каждого числа: планеты, стихии, сильные и слабые стороны', path: '/guide' },
  { icon: '◆', title: 'Статьи', desc: 'Материалы о нумерологии, её истории, методах и практическом применении', path: '/articles' },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/8739d576-cdd0-4a54-89a5-81874a665a50/files/171d6a82-e772-4796-9c2e-17d5c59fc5f0.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,5,40,0.3) 0%, rgba(15,5,40,0.85) 100%)' }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="text-5xl mb-6 animate-float">✦</div>
          <h1 className="font-cinzel-deco text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="gold-text">НУМЕРОС</span>
          </h1>
          <p className="font-cinzel text-purple-200 text-lg md:text-xl tracking-widest mb-3 uppercase">
            Искусство познания через числа
          </p>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/80 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Нумерология — древняя мудрость, раскрывающая тайны вашей личности, судьбы и предназначения.
            Каждое число несёт космическую вибрацию, которая влияет на ваш жизненный путь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="cosmic-btn inline-block">
              ✦ Рассчитать своё число
            </Link>
            <Link to="/compatibility" className="inline-block px-6 py-3 rounded-lg font-cinzel font-semibold border border-purple-600/50 text-purple-200 hover:border-yellow-400/50 hover:text-yellow-300 transition-all duration-300">
              ◈ Совместимость пар
            </Link>
          </div>
        </div>
      </section>

      {/* Mandala section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <img
                src="https://cdn.poehali.dev/projects/8739d576-cdd0-4a54-89a5-81874a665a50/files/f4ab06b6-ab4b-49a0-a87d-fcaffd68f087.jpg"
                alt="Мандала нумерологии"
                className="rounded-2xl w-full max-w-sm mx-auto mandala-glow animate-float"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Древняя наука</p>
              <h2 className="font-cinzel text-3xl text-white font-bold mb-4">Что такое нумерология?</h2>
              <div className="section-divider mb-4" />
              <p className="text-purple-200/80 leading-relaxed mb-4">
                Нумерология — это мистическая система, уходящая корнями в учения Пифагора, каббалу и ведические знания.
                Она основана на убеждении, что числа — это не просто математические символы, а живые вибрации Вселенной.
              </p>
              <p className="text-purple-200/80 leading-relaxed mb-6">
                Каждое число от 1 до 9 (и Мастер-числа 11, 22, 33) несёт уникальную космическую энергию,
                которая отражается в вашей дате рождения, имени и жизненном пути.
              </p>
              <Link to="/articles" className="cosmic-btn inline-block">
                Узнать больше →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Возможности платформы</p>
            <h2 className="font-cinzel text-3xl text-white font-bold">Что вас ждёт на Нумерос</h2>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(f => (
              <Link key={f.path} to={f.path} className="mystic-card p-6 block group hover:border-yellow-400/30 transition-all duration-300">
                <div className="text-3xl mb-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="font-cinzel text-yellow-300 text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-purple-200/70 text-sm leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mystic-card p-10 text-center">
            <div className="text-4xl mb-4">✦</div>
            <h2 className="font-cinzel text-2xl md:text-3xl text-yellow-300 font-bold mb-4">
              Начните своё путешествие
            </h2>
            <p className="text-purple-200/80 leading-relaxed mb-8 max-w-xl mx-auto">
              Узнайте, что числа говорят о вашем характере, талантах, предназначении и самых благоприятных периодах жизни.
            </p>
            <Link to="/calculator" className="cosmic-btn inline-block text-base">
              ✦ Рассчитать бесплатно
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
