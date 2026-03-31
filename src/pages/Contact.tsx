import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-yellow-400 text-sm font-cinzel tracking-widest uppercase mb-3">Связаться с нами</p>
          <h1 className="font-cinzel text-3xl md:text-4xl text-white font-bold mb-3">Контакты</h1>
          <div className="section-divider max-w-xs mx-auto" />
          <p className="text-purple-200/70 mt-4 max-w-xl mx-auto">
            Есть вопросы о нумерологии или хотите получить персональную консультацию? Напишите нам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: 'Mail', title: 'Email', value: 'hello@numeros.ru', subtitle: 'Ответим в течение 24 часов' },
            { icon: 'MessageCircle', title: 'Telegram', value: '@numeros_ru', subtitle: 'Быстрые ответы онлайн' },
            { icon: 'MapPin', title: 'Москва', value: 'Россия', subtitle: 'Работаем по всему миру' },
          ].map(item => (
            <div key={item.title} className="mystic-card p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-purple-700/40 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
                <Icon name={item.icon as 'Mail'} size={18} className="text-yellow-300" />
              </div>
              <h3 className="font-cinzel text-yellow-300 text-sm font-semibold mb-1">{item.title}</h3>
              <p className="text-white text-sm mb-1">{item.value}</p>
              <p className="text-purple-400 text-xs">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="mystic-card p-12 text-center">
            <div className="text-5xl mb-4">✦</div>
            <h3 className="font-cinzel text-yellow-300 text-2xl mb-3">Сообщение отправлено!</h3>
            <p className="text-purple-200/70 text-sm mb-6 max-w-sm mx-auto">
              Мы получили ваше сообщение и ответим в ближайшее время. Звёзды благосклонны к вам!
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
              className="cosmic-btn"
            >
              Написать ещё раз
            </button>
          </div>
        ) : (
          <div className="mystic-card p-8">
            <h2 className="font-cinzel text-purple-200 text-lg mb-6">Форма обратной связи</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="ivan@example.com"
                    className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-2">Тема</label>
                <select
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50 transition-colors"
                  style={{ colorScheme: 'dark' }}
                >
                  <option value="">Выберите тему</option>
                  <option>Личная консультация</option>
                  <option>Вопрос о нумерологии</option>
                  <option>Совместимость пар</option>
                  <option>Техническая поддержка</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-purple-300 text-xs font-cinzel tracking-widest uppercase mb-2">Сообщение *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Расскажите, чем мы можем помочь..."
                  className="w-full bg-purple-950/60 border border-purple-700/40 rounded-lg px-4 py-3 text-white placeholder-purple-500 focus:outline-none focus:border-yellow-400/50 transition-colors resize-none"
                />
              </div>
              <button type="submit" className="cosmic-btn w-full">
                ✦ Отправить сообщение
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Contact;
