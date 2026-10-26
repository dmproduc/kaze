import { useState } from 'react';

export default function Home() {
  const [mode, setMode] = useState('zen'); // 'zen' немесе 'pixel'
  const [lang, setLang] = useState('kz');   // Тілді таңдау

  const t = {
    kz: { title: "КАЗЕ – Өмірді басқару өнері", sub: "ZEN және PIXEL әлеміне қош келдіңіз!", zenBtn: "🌿 ZEN Режимі", pixelBtn: "🕹️ PIXEL Режимі", finance: "Қаржы", planner: "Планер", cinema: "Кинозал & Аниме", mentor: "ЖИ Ментор" },
    ru: { title: "КАЗЕ – Искусство управлять жизнью", sub: "Добро пожаловать в миры ZEN и PIXEL!", zenBtn: "🌿 ZEN Режим", pixelBtn: "🕹️ PIXEL Режим", finance: "Финансы", planner: "Планер", cinema: "Кинозал & Аниме", mentor: "ИИ Ментор" },
    en: { title: "KAZE – The Art of Life Control", sub: "Welcome to ZEN and PIXEL worlds!", zenBtn: "🌿 ZEN Mode", pixelBtn: "🕹️ PIXEL Mode", finance: "Finance", planner: "Planner", cinema: "Cinema & Anime", mentor: "AI Mentor" },
    uz: { title: "KAZE – Hayotni boshqarish san'ati", sub: "ZEN va PIXEL olamiga xush kelibsiz!", zenBtn: "🌿 ZEN Rejimi", pixelBtn: "🕹️ PIXEL Rejimi", finance: "Moliya", planner: "Reja", cinema: "Kino & Anime", mentor: "AI Mentor" },
    zh: { title: "KAZE – 生活管理的艺术", sub: "欢迎来到 ZEN 和 PIXEL 世界！", zenBtn: "🌿 ZEN 模式", pixelBtn: "🕹️ PIXEL 模式", finance: "财务", planner: "计划", cinema: "影院与动漫", mentor: "AI 导师" }
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: mode === 'zen' ? '#0f172a' : '#180529',
      color: '#fff',
      fontFamily: mode === 'pixel' ? "'Courier New', monospace" : 'sans-serif',
      padding: '30px',
      transition: 'all 0.3s ease'
    }}>
      {/* Жоғарғы панель: Тіл мен Режимді ауыстыру */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{t[lang].title}</h1>
          <p style={{ fontSize: '14px', color: '#94a3b8', margin: '5px 0 0 0' }}>{t[lang].sub}</p>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Тіл таңдау */}
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
            style={{ padding: '8px 12px', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '8px', cursor: 'pointer' }}
          >
            <option value="kz">🇰🇿 Қазақша</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="en">🇬🇧 English</option>
            <option value="uz">🇺🇿 O'zbekcha</option>
            <option value="zh">🇨🇳 中文</option>
          </select>

          {/* Режим ауыстыру */}
          <button 
            onClick={() => setMode(mode === 'zen' ? 'pixel' : 'zen')}
            style={{
              padding: '8px 16px',
              background: mode === 'zen' ? '#38bdf8' : '#ec4899',
              color: '#000',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {mode === 'zen' ? t[lang].pixelBtn : t[lang].zenBtn}
          </button>
        </div>
      </div>

      {/* Негізгі модульдер сеткасы */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3>💰 {t[lang].finance}</h3>
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>Кіріс пен шығысты қадағалау және Supabase базасы.</p>
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3>📅 {t[lang].planner}</h3>
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>Күнделікті мақсаттар мен міндеттер тізімі.</p>
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3>🎬 {t[lang].cinema}</h3>
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>Аналоте API арқылы аниме мен кинолар әлемі.</p>
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3>🤖 {t[lang].mentor}</h3>
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>Gemini және ChatGPT арқылы екі жақты ақылды көмекші.</p>
        </div>
      </div>
    </main>
  );
}
