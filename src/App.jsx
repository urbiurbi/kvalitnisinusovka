import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Podcast, 
  ExternalLink, 
  Youtube, 
  Music, 
  CreditCard, 
  Sun, 
  Moon, 
  Zap, 
  Menu, 
  X,
  ChevronRight,
  TrendingUp,
  Radio,
  Share2,
  Globe,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Info
} from 'lucide-react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHost, setActiveHost] = useState('libor');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Výška fixního headeru
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const episodes = [
    {
      id: 1,
      title: "Budoucnost jaderné energetiky v ČR",
      guest: "Ing. Dana Drábová, Ph.D.",
      duration: "54:20",
      thumbnail: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=800",
      tag: "Jádro",
      youtube: "https://youtube.com"
    },
    {
      id: 2,
      title: "SMR: Revoluce nebo slepá ulička?",
      guest: "Jan Světlík",
      duration: "42:15",
      thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      tag: "Technologie",
      youtube: "https://youtube.com"
    },
    {
      id: 3,
      title: "Energetická bezpečnost a plyn",
      guest: "Václav Bartuška",
      duration: "1:05:10",
      thumbnail: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800",
      tag: "Geopolitika",
      youtube: "https://youtube.com"
    }
  ];

  const platforms = [
    { name: 'Spotify', icon: <Music className="w-6 h-6" />, color: 'bg-[#1DB954]', link: '#' },
    { name: 'Apple Podcasts', icon: <Podcast className="w-6 h-6" />, color: 'bg-[#9933FF]', link: '#' },
    { name: 'HeroHero', icon: <CreditCard className="w-6 h-6" />, color: 'bg-[#FF424D]', link: '#', label: 'Bonusový obsah' },
    { name: 'YouTube', icon: <Youtube className="w-6 h-6" />, color: 'bg-[#FF0000]', link: '#' },
  ];

  const themeClasses = isDarkMode 
    ? "bg-slate-950 text-slate-100 selection:bg-amber-500/30" 
    : "bg-slate-50 text-slate-900 selection:bg-blue-100";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 overflow-x-hidden ${themeClasses}`}>
      
      <style>
        {`
          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-wave {
            animation: waveMove 20s linear infinite;
          }
          .glass-effect {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
        `}
      </style>

      {/* Navigace */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? (isDarkMode ? 'bg-slate-950/80 glass-effect border-b border-white/10 py-3' : 'bg-white/80 glass-effect border-b border-slate-200 py-3') : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <Zap className={`w-8 h-8 ${isDarkMode ? 'text-amber-400' : 'text-blue-600'} transition-transform group-hover:scale-125`} />
              <div className={`absolute inset-0 blur-xl opacity-50 ${isDarkMode ? 'bg-amber-400' : 'bg-blue-600'} group-hover:opacity-100 transition-opacity`}></div>
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">Kvalitní <span className={isDarkMode ? 'text-amber-400' : 'text-blue-600'}>Sinusovka</span></span>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold text-xs tracking-[0.2em] uppercase">
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">O nás</button>
            <button onClick={() => scrollToSection('episodes')} className="hover:text-amber-400 transition-colors">Epizody</button>
            <button onClick={() => scrollToSection('listen')} className="hover:text-amber-400 transition-colors">Poslouchat</button>
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all active:scale-90 ${isDarkMode ? 'bg-slate-800 text-amber-300 hover:bg-slate-700' : 'bg-white text-blue-600 hover:bg-slate-100 shadow-md'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => scrollToSection('listen')}
              className={`px-7 py-2.5 rounded-full font-black transition-all transform hover:-translate-y-1 active:scale-95 ${isDarkMode ? 'bg-amber-400 text-slate-950 hover:bg-amber-300' : 'bg-blue-600 text-white hover:bg-blue-700'} shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]`}
            >
              Podpořit
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobilní Menu */}
        <div className={`fixed inset-0 z-[-1] transition-all duration-500 bg-black/60 glass-effect md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
          <div className={`absolute top-0 right-0 h-screen w-3/4 p-10 flex flex-col gap-6 shadow-2xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`} onClick={e => e.stopPropagation()}>
             <div className="mt-20 flex flex-col gap-8 text-xl font-black uppercase tracking-widest">
                <button onClick={() => scrollToSection('about')} className="text-left">O nás</button>
                <button onClick={() => scrollToSection('episodes')} className="text-left">Epizody</button>
                <button onClick={() => scrollToSection('listen')} className="text-left">Poslouchat</button>
             </div>
             <div className="mt-auto flex flex-col gap-4">
               <button onClick={toggleTheme} className="flex items-center gap-3 font-bold uppercase text-xs tracking-widest">
                  {isDarkMode ? <><Sun size={20} className="text-amber-400" /> Light Mode</> : <><Moon size={20} className="text-blue-600" /> Dark Mode</>}
               </button>
               <button 
                onClick={() => scrollToSection('listen')}
                className={`w-full py-4 rounded-xl text-center font-black uppercase tracking-widest ${isDarkMode ? 'bg-amber-400 text-slate-950' : 'bg-blue-600 text-white'}`}
               >
                 Podpořit projekt
               </button>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Sekce */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Energetické pozadí" 
            className="w-full h-full object-cover opacity-50 scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-slate-950/20 via-slate-950/80 to-slate-950' : 'from-transparent via-white/40 to-white'}`}></div>
          
          <div className="absolute bottom-0 left-0 w-[200%] h-48 opacity-20 pointer-events-none animate-wave">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60 C1150,110 1350,10 1500,60 C1650,110 1850,10 2000,60 C2150,110 2350,10 2500,60 L2500,120 L0,120 Z" 
                fill={isDarkMode ? "#fbbf24" : "#2563eb"}
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 backdrop-blur-xl mb-8 animate-bounce cursor-default shadow-xl`}>
            <Radio className={isDarkMode ? 'text-amber-400' : 'text-blue-600'} size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Vysíláme živě do vašich uší</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] uppercase">
            KVALITNÍ<br />
            <span className={`italic ${isDarkMode ? 'text-amber-400' : 'text-blue-600'}`}>SINUSOVKA</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl mb-12 opacity-80 font-medium leading-relaxed">
            Česko-slovenský pohled na tepnu naší civilizace. Bez cenzury, s vědou v zádech a vizí v očích.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-20">
            <button className={`group flex items-center gap-4 px-10 py-5 rounded-2xl text-lg font-black transition-all transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 ${isDarkMode ? 'bg-white text-slate-950 hover:bg-amber-50' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
              <Play className="fill-current w-6 h-6" /> Pustit Pilot
            </button>
            <button 
              onClick={() => scrollToSection('episodes')}
              className={`flex items-center gap-4 px-10 py-5 rounded-2xl text-lg font-black border-2 transition-all hover:bg-white/10 active:scale-95 ${isDarkMode ? 'border-white/20' : 'border-slate-950/20'}`}
            >
              Epizody <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Sekce Hodnot */}
      <section className={`py-20 relative z-30 border-y ${isDarkMode ? 'border-white/5 bg-slate-900/50' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { label: 'Odbornost', val: 'Žádný bulvár', icon: <ShieldCheck className="w-10 h-10 mb-6" /> },
            { label: 'Technologie', val: 'Pohled pod kapotu', icon: <Lightbulb className="w-10 h-10 mb-6" /> },
            { label: 'CZ/SK Kontext', val: 'Lokální vize', icon: <Globe className="w-10 h-10 mb-6" /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${isDarkMode ? 'text-amber-400' : 'text-blue-600'}`}>{stat.icon}</div>
              <div className={`text-2xl font-black mb-2 uppercase tracking-tight`}>{stat.val}</div>
              <div className="text-xs uppercase tracking-[0.4em] opacity-40 font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* O NÁS */}
      <section id="about" className={`py-32 relative overflow-hidden z-10`}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black tracking-[0.5em] uppercase opacity-30 mb-6">Architektura Týmu</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Kdo drží napětí?</h3>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className={`absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed -translate-y-1/2 hidden md:block opacity-10 ${isDarkMode ? 'border-amber-400' : 'border-blue-600'}`}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 items-start">
              
              <div 
                className={`relative flex flex-col items-center cursor-pointer group transition-all duration-500`}
                onClick={() => setActiveHost('libor')}
                onMouseEnter={() => setActiveHost('libor')}
              >
                <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full border-8 p-3 transition-all duration-700 ${activeHost === 'libor' ? (isDarkMode ? 'border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.3)] scale-105' : 'border-blue-600 shadow-2xl scale-105') : 'border-transparent opacity-40 hover:opacity-100 grayscale'}`}>
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Libor Láznička" className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all ${activeHost === 'libor' ? 'bg-blue-600 text-white animate-pulse' : 'bg-slate-800 text-slate-400'}`}>
                    <Cpu size={24} />
                  </div>
                </div>
                
                <div className={`mt-10 text-center transition-all duration-500 ${activeHost === 'libor' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:block hidden'}`}>
                  <h4 className="text-3xl font-black tracking-tight uppercase mb-1">Libor Láznička</h4>
                  <p className={`text-sm font-black tracking-[0.3em] mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>STRATEG / SLOVENSKO</p>
                  <div className={`text-sm md:text-base opacity-70 max-w-xs mx-auto leading-relaxed font-medium px-4`}>
                    Patnáct let v srdci rozvodných sítí. Libor vidí svět jako systém toků, který vyžaduje balanc a hlubokou technickou expertízu.
                  </div>
                </div>
              </div>

              <div 
                className={`relative flex flex-col items-center cursor-pointer group transition-all duration-500`}
                onClick={() => setActiveHost('matyas')}
                onMouseEnter={() => setActiveHost('matyas')}
              >
                <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full border-8 p-3 transition-all duration-700 ${activeHost === 'matyas' ? (isDarkMode ? 'border-amber-400 shadow-[0_0_50px_rgba(251,191,36,0.3)] scale-105' : 'border-amber-600 shadow-2xl scale-105') : 'border-transparent opacity-40 hover:opacity-100 grayscale'}`}>
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" alt="Matyáš Urban" className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all ${activeHost === 'matyas' ? 'bg-amber-400 text-slate-950 animate-pulse' : 'bg-slate-800 text-slate-400'}`}>
                    <Info size={24} />
                  </div>
                </div>

                <div className={`mt-10 text-center transition-all duration-500 ${activeHost === 'matyas' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:block hidden'}`}>
                  <h4 className="text-3xl font-black tracking-tight uppercase mb-1">Matyáš Urban</h4>
                  <p className={`text-sm font-black tracking-[0.3em] mb-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>MODERÁTOR / ČESKO</p>
                  <div className={`text-sm md:text-base opacity-70 max-w-xs mx-auto leading-relaxed font-medium px-4`}>
                    Hlas, který klade nepříjemné otázky. Publicista s vášní pro geopolitiku a energetickou bezpečnost budoucích generací.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Archiv Epizod */}
      <section id="episodes" className={`py-40 relative z-10 ${isDarkMode ? 'bg-slate-900/30' : 'bg-white shadow-inner'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">Archiv Epizod</h2>
              <p className="text-xl opacity-60 font-medium">To nejlepší z našich diskusí. Odborníci, technologie a vize bez politických frází.</p>
            </div>
            <button className="flex items-center gap-3 font-black uppercase text-xs tracking-[0.3em] group hover:text-amber-400 transition-colors">
              Přejít na YouTube <ExternalLink size={20} className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {episodes.map((ep) => (
              <div key={ep.id} className={`group relative rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 ${isDarkMode ? 'bg-slate-950 border border-white/5 hover:border-amber-400/30' : 'bg-white border border-slate-200 shadow-2xl shadow-slate-200'}`}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 glass-effect border border-white/20 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <Play className="text-white fill-white w-8 h-8 translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 bg-slate-950/80 glass-effect text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10">
                    {ep.tag}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-1 h-4 rounded-full ${isDarkMode ? 'bg-amber-400' : 'bg-blue-600'}`}></div>
                    <span className="text-xs font-black opacity-50 uppercase tracking-widest">{ep.guest}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-8 leading-tight group-hover:text-amber-400 transition-colors">{ep.title}</h3>
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex items-center gap-4 text-xs font-black opacity-40 uppercase tracking-widest">
                       <Youtube size={16} /> 1.2k Views
                    </div>
                    <div className="text-xs font-black opacity-40 uppercase tracking-widest">{ep.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listen & Support Sekce */}
      <section id="listen" className="py-40 relative overflow-hidden z-10">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[150px] opacity-10 pointer-events-none ${isDarkMode ? 'bg-amber-400' : 'bg-blue-600'}`}></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <TrendingUp className={`mx-auto mb-10 w-16 h-16 ${isDarkMode ? 'text-amber-400' : 'text-blue-600'} animate-pulse`} />
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-none">Nalaďte se</h2>
          <p className="text-xl md:text-2xl opacity-70 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
            Jsme tam, kde konzumujete obsah. Podpořte naši nezávislost na HeroHero a získejte přístup k bonusům, které se do vysílání nevešly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <a 
                key={platform.name}
                href={platform.link}
                className={`group relative flex flex-col items-center justify-center p-12 rounded-[3rem] border transition-all duration-500 hover:-translate-y-3 active:scale-95 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-amber-400/50 hover:bg-slate-900' : 'bg-white border-slate-200 hover:shadow-2xl hover:border-blue-600/30'}`}
              >
                <div className={`w-20 h-20 ${platform.color} rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                  {platform.icon}
                </div>
                <span className="font-black text-xl mb-2 tracking-tight uppercase">{platform.name}</span>
                {platform.label ? (
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded bg-red-500/20 text-red-500 border border-red-500/20 animate-pulse">
                    {platform.label}
                  </span>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Poslouchat zdarma</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-24 relative z-20 ${isDarkMode ? 'bg-slate-950 border-t border-white/5' : 'bg-slate-100 border-t border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 mb-24">
            <div className="flex items-center gap-4">
              <Zap className={`w-12 h-12 ${isDarkMode ? 'text-amber-400' : 'text-blue-600'}`} />
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter uppercase leading-none">Kvalitní Sinusovka</span>
                <span className="text-[10px] font-black tracking-[0.5em] opacity-30 uppercase mt-1">Energy Intelligence</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-12 text-xs font-black uppercase tracking-[0.3em] opacity-50">
              <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 hover:opacity-100 transition-all">O nás</button>
              <button onClick={() => scrollToSection('episodes')} className="hover:text-amber-400 hover:opacity-100 transition-all">Archiv</button>
              <a href="#" className="hover:text-amber-400 hover:opacity-100 transition-all">Kontakt</a>
              <a href="#" className="hover:text-amber-400 hover:opacity-100 transition-all">Reklama</a>
            </div>
          </div>
          
          <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 text-[10px] uppercase font-black tracking-[0.4em]">
            <p>© 2024 Kvalitní Sinusovka. Nezávislý česko-slovenský projekt.</p>
            <div className="flex items-center gap-4">
               <span>Made for CZ/SK Power Grid</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
