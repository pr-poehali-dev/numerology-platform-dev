import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';

const articles = [
  {
    id: 1,
    title: 'История нумерологии: от Пифагора до наших дней',
    category: 'История',
    date: '15 марта 2024',
    readTime: '8 мин',
    preview: 'Нумерология уходит корнями в глубокую древность. Пифагор, живший в VI веке до н.э., создал систему, в которой числа были основой всего сущего...',
    content: `Нумерология уходит корнями в глубокую древность. Пифагор, живший в VI веке до н.э., создал математическую систему, в которой числа были не просто инструментами счёта, но живыми сущностями, управляющими реальностью.

Согласно пифагорейской традиции, каждое число от 1 до 9 несёт особую вибрацию и символическое значение. Единица олицетворяет единство и первопричину, двойка — дуальность и противоположности, тройка — синтез и творчество, и так далее.

Параллельно развивалась еврейская Каббала с её системой Гематрии — методом нахождения числового значения слов и имён. В Средние века нумерология проникла в арабский и индийский мир, обогатившись новыми методами и интерпретациями.

В современную эпоху нумерология была систематизирована такими исследователями, как Линда Гудман и Ганс Декоз, которые создали доступные системы расчёта и интерпретации нумерологических чисел.`,
    icon: '◉'
  },
  {
    id: 2,
    title: 'Число жизненного пути: ваша главная нумерологическая вибрация',
    category: 'Основы',
    date: '10 марта 2024',
    readTime: '6 мин',
    preview: 'Число жизненного пути — самое важное число в нумерологии. Оно рассчитывается из даты рождения и показывает ваше истинное предназначение...',
    content: `Число жизненного пути — самое важное число в нумерологии. Оно рассчитывается из полной даты рождения путём сложения всех цифр и сведения результата к однозначному числу (или к Мастер-числу: 11, 22, 33).

Например, человек рождённый 15 июля 1990 года: 1+5+0+7+1+9+9+0 = 32, 3+2 = 5. Число жизненного пути — 5.

Это число отвечает на вопрос: "Для чего я пришёл в этот мир?" Оно раскрывает ваши природные таланты, главные жизненные уроки и путь к самореализации.

В отличие от числа судьбы (рассчитанного из имени), число жизненного пути является неизменным и показывает вашу глубинную сущность, которая остаётся постоянной на протяжении всей жизни.`,
    icon: '✦'
  },
  {
    id: 3,
    title: 'Мастер-числа 11, 22 и 33: избранные вибрации',
    category: 'Углублённо',
    date: '5 марта 2024',
    readTime: '10 мин',
    preview: 'Мастер-числа занимают особое место в нумерологии. Они несут усиленные вибрации и указывают на особую миссию в этом воплощении...',
    content: `Мастер-числа — 11, 22 и 33 — занимают особое место в нумерологии. В отличие от обычных чисел, их не сводят к однозначным, потому что они несут усиленные, двойные вибрации.

Число 11 — Мастер-интуит. Это число духовного откровения и просветления. Одиннадцатые обладают мощной интуицией, граничащей с ясновидением. Их миссия — нести духовный свет в этот мир через творчество и вдохновение.

Число 22 — Мастер-строитель. Самое мощное из всех чисел. Носители этой вибрации способны воплощать грандиозные замыслы, работающие на благо всего человечества. Им дано объединять духовное видение с практическими достижениями.

Число 33 — Мастер-учитель. Редчайшее и наиболее духовно возвышенное число. Тридцать третьи — воплощение безусловной любви и мудрости. Их путь — это священное служение людям.`,
    icon: '◈'
  },
  {
    id: 4,
    title: 'Нумерология и выбор партнёра: числа в отношениях',
    category: 'Отношения',
    date: '28 февраля 2024',
    readTime: '7 мин',
    preview: 'Числа жизненного пути двух людей взаимодействуют особым образом. Некоторые сочетания создают идеальную гармонию, другие — требуют работы...',
    content: `Числа жизненного пути двух людей взаимодействуют особым образом, создавая уникальную энергетику отношений. Это не означает, что определённые пары "обречены" — нумерология показывает потенциал и возможные вызовы.

Наиболее гармоничными традиционно считаются сочетания: 2 и 6 (забота и любовь), 3 и 9 (радость и мудрость), 4 и 8 (строительство и достижения).

Сложными, но глубокими бывают союзы: 1 и 4 (лидер и строитель), 5 и 2 (свобода и привязанность).

Важно понимать, что нумерологическая совместимость — это не приговор. Любой союз требует осознанной работы, уважения и желания понять друг друга. Числа лишь указывают на природные тенденции и зоны роста.`,
    icon: '◆'
  },
  {
    id: 5,
    title: 'Личный год в нумерологии: циклы и благоприятные периоды',
    category: 'Практика',
    date: '20 февраля 2024',
    readTime: '5 мин',
    preview: 'Нумерология описывает жизнь как серию 9-летних циклов. Каждый год имеет свою вибрацию, которая влияет на все сферы жизни...',
    content: `Нумерология описывает жизнь как серию 9-летних циклов. Каждый год имеет свою вибрацию — Личный год, — которая создаёт особый фон для событий и решений.

Для расчёта Личного года: сложите число и месяц рождения с текущим годом. Например, если вы родились 15 июля, и сейчас 2024 год: 1+5+0+7+2+0+2+4 = 21, 2+1 = 3. Ваш Личный год — 3.

Личный год 1 — время новых начинаний и смелых решений. Год 4 — труд и построение основ. Год 7 — духовный поиск и уединение. Год 9 — завершение, итоги и прощание.

Знание своего Личного года помогает принимать решения в резонансе с космическими ритмами, что увеличивает эффективность любых действий.`,
    icon: '✧'
  },
  {
    id: 6,
    title: 'Числовые коды в именах: как имя влияет на судьбу',
    category: 'Имена',
    date: '12 февраля 2024',
    readTime: '9 мин',
    preview: 'В нумерологии каждой букве соответствует определённое число. Имя человека несёт особую вибрацию, которая влияет на его жизнь с самого рождения...',
    content: `В нумерологии каждой букве алфавита соответствует определённое число от 1 до 9. Полное имя человека несёт уникальную числовую вибрацию, которая дополняет и расширяет информацию, заложенную в дате рождения.

Число Судьбы (или Выражения) рассчитывается из всех букв полного имени при рождении. Оно показывает таланты, способности и то, как вы реализуете себя в мире.

Число Души рассчитывается только из гласных букв имени и отражает ваши тайные желания, внутреннюю мотивацию и то, что приносит вам глубокое удовлетворение.

Число Личности — из согласных. Оно показывает, каким вас видят окружающие, вашу "публичную маску".`,
    icon: '⟡'
  }
];

const categories = ['Все', 'История', 'Основы', 'Углублённо', 'Отношения', 'Практика', 'Имена'];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [openArticle, setOpenArticle] = useState<number | null>(null);

  const filtered = activeCategory === 'Все' ? articles : articles.filter(a => a.category === activeCategory);

  if (openArticle !== null) {
    const article = articles.find(a => a.id === openArticle);
    if (!article) return null;
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <button
            onClick={() => setOpenArticle(null)}
            className="flex items-center gap-2 text-purple-300 hover:text-yellow-300 transition-colors mb-8 font-cinzel text-sm tracking-wide"
          >
            <Icon name="ArrowLeft" size={16} /> Назад к статьям
          </button>
          <div className="mystic-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/40 font-cinzel">{article.category}</span>
              <span className="text-purple-500 text-xs">{article.date} · {article.readTime} чтения</span>
            </div>
            <div className="text-4xl text-yellow-400 mb-4">{article.icon}</div>
            <h1 className="font-cinzel text-2xl md:text-3xl text-white font-bold mb-6 leading-tight">{article.title}</h1>
            <div className="section-divider mb-6" />
            {article.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-purple-100/80 leading-relaxed mb-4">{para}</p>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Знания и мудрость</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">Статьи о нумерологии</h1>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/70 mt-4 max-w-xl mx-auto">
            Глубокие материалы о нумерологии, её истории, методах и практическом применении в жизни.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-cinzel tracking-wide transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-purple-700/60 border-yellow-400/50 text-yellow-300'
                  : 'bg-transparent border-purple-700/40 text-purple-300 hover:border-purple-500/60 hover:text-purple-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(article => (
            <button
              key={article.id}
              onClick={() => setOpenArticle(article.id)}
              className="mystic-card p-6 text-left hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/40 font-cinzel">
                  {article.category}
                </span>
                <span className="text-purple-500 text-xs flex items-center gap-1">
                  <Icon name="Clock" size={12} /> {article.readTime}
                </span>
              </div>
              <div className="text-3xl text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                {article.icon}
              </div>
              <h3 className="font-cinzel text-white font-semibold text-base mb-3 leading-tight group-hover:text-yellow-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-purple-300/70 text-sm leading-relaxed mb-4">{article.preview}</p>
              <div className="flex items-center justify-between">
                <span className="text-purple-500 text-xs">{article.date}</span>
                <span className="text-yellow-400 text-xs font-cinzel flex items-center gap-1 group-hover:gap-2 transition-all">
                  Читать <Icon name="ArrowRight" size={12} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Articles;
