import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SurahSelection = ({ onSelectSurahId, onSelectSurah }) => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const url = 'https://api.quran.com/api/v4//chapters';
        const res = await fetch(url);
        const data = await res.json();
        setSurahs(data.chapters.map(ch => ch));
      } catch (error) {
        console.error('Error fetching audio file:', error);
      }
    };

    fetchSurah();
  }, []);

  return (
    <div className='text-black w-full '>

      <select className='p-2 w-full rounded-md' onChange={(e) => {
        const { id, name_simple } = JSON.parse(e.target.value);
        onSelectSurah(name_simple);
        onSelectSurahId(id);
      }}>
        <option value="">Select Surah</option>
        {surahs.map(surah => (
          <option key={surah.id} value={JSON.stringify(surah)}>
            {surah.name_simple}
          </option>
        ))}
      </select>

    </div>
  );
};

SurahSelection.propTypes = {
  onSelectSurah: PropTypes.func,
  onSelectSurahId: PropTypes.func,
};

export default SurahSelection;
