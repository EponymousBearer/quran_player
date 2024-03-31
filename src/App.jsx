import './App.css'
import { useState } from 'react';
import QariList from './components/QariList';
import SurahSelection from './components/SurahSelection';
import AudioPlayer from './components/AudioPlayer';
import Bookmarking from './components/Bookmarking';
import CustomizationOptions from './components/CustomizationOptions';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [font, setFont] = useState(16);
  const [selectedQari, setSelectedQari] = useState('');
  const [selectedQariId, setSelectedQariId] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState('');
  const [selectedSurahId, setSelectedSurahId] = useState(null);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleFontChange = (newFont) => {
    setFont(newFont);
  };

  const handleQariSelect = (qariName) => {
    setSelectedQari(qariName);
  };

  const handleQariSelectId = (qariId) => {
    setSelectedQariId(qariId);
  };

  const handleSurahSelect = (surahName) => {
    setSelectedSurah(surahName);
  };

  const handleSurahSelectId = (surahId) => {
    setSelectedSurahId(surahId);
  };

  return (
    <section className={`flex flex-col justify-center items-center py-36 text-center ${font === '16' ? 'text-lg' : 'text-sm'}`}
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1596125160970-6f02eeba00d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize: 'cover', position: 'relative' }} >

      {/* Overlay with black color */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: `${theme === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.5)'}`,
        }}
      ></div>

      {/* Center Component */}
      <div className={`w-full relative z-10 flex flex-col justify-center items-center ${theme === 'dark' ? 'text-white' : 'text-stone-800'} `}>

        <h1 className={`font-bold ${font == 12 ? 'text-5xl' : font == 16 ? 'text-6xl' : font == 20 ? 'text-7xl' : 'text-6xl'} px-8 my-5 border-l-4 font-sans font-bold ${theme === 'dark' ? 'border-green-700' : 'border-amber-600'} text- pb-2`}>
          Welcome to Quran Player
        </h1>

        <p className={`mb-4 ${theme === 'dark' ? 'font-thin' : 'font-medium'} ${font == 12 ? 'text-lg max-w-sm' : font == 16 ? 'text-xl max-w-md' : font == 20 ? 'text-2xl max-w-lg' : 'text-xl max-w-md'} `}>
          Experience the Divine Harmony: Explore, Listen, and Reflect with Our Quran Player
        </p>

        <div className={`container ${font == 12 ? 'text-base max-w-md' : font == 16 ? 'text-lg max-w-lg' : font == 20 ? 'text-xl max-w-2xl' : 'text-lg max-w-xl'} my-6`}>

          <div className="flex  items-center gap-x-6 w-full justify-center">
            <div className='flex-1'>
              <QariList onSelectQari={handleQariSelect} onSelectQariId={handleQariSelectId} />
            </div>

            <div className='flex-1'>
              <SurahSelection onSelectSurah={handleSurahSelect} onSelectSurahId={handleSurahSelectId} />
            </div>
          </div>

          <div className="column">
            {selectedQari && selectedSurah && (
              <AudioPlayer
                src={`https://api.quran.com/api/v4/chapter_recitations/${selectedQariId}/${selectedSurahId}`}
              />
            )}
          </div>

          <Bookmarking onSelectSurah={selectedSurah} onSelectQari={selectedQari} theme={theme} />
        </div>

        <CustomizationOptions onFontChange={handleFontChange} font={font} theme={theme} onThemeChange={handleThemeChange} />

      </div>

    </section>
  )
}
