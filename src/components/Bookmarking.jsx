import { useState } from 'react';
import PropTypes from 'prop-types';

const Bookmarking = ({ onSelectSurah, onSelectQari, theme }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksQari, setBookmarksQari] = useState([]);

  const handleBookmark = (surah) => {
    const updatedBookmarks = [...bookmarks, surah];
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const handleBookmarkQari = (qari) => {
    const updatedBookmarksQari = [...bookmarksQari, qari];
    setBookmarksQari(updatedBookmarksQari);
    localStorage.setItem('bookmarksQari', JSON.stringify(updatedBookmarksQari));
  };

  return (
    <div className='flex w-full justify-between gap-x-6 text-white'>

      <div className='flex-1'>

        <button className={`my-6 transition font-medium tracking-wide ease-in-out hover:scale-110 duration-300  ${theme === 'dark' ? ' bg-green-700' : 'bg-amber-600'} rounded-lg px-6 py-2`} onClick={() => handleBookmarkQari(onSelectQari)}>
          Bookmark Qari
        </button>

        <select
          className="block w-full pl-3 pr-10 py-2 text-black border-gray-300 rounded-md"
          onChange={(e) => handleBookmarkQari(e.target.value)}
        >
          <option value="">Show Marked Qari</option>
          {[...new Set(bookmarksQari)].map((qari, index) => (
            <option key={index} value={qari}>
              {qari}
            </option>
          ))}
        </select>

      </div>

      <div className='flex-1'>

        <button className={`my-6 transition font-medium tracking-wide ease-in-out hover:scale-110 duration-300 ${theme === 'dark' ? ' bg-green-700' : 'bg-amber-600'} rounded-lg px-6 py-2`} onClick={() => handleBookmark(onSelectSurah)}>
          Bookmark Surah
        </button>

        <select
          className="block w-full pl-3 pr-10 py-2 text-black border-gray-300 rounded-md"
          onChange={(e) => handleBookmark(e.target.value)}
        >
          <option value="">Show Marked Surahs</option>
          {[...new Set(bookmarks)].map((surah, index) => (
            <option key={index} value={surah}>
              {surah}
            </option>
          ))}
        </select>

      </div>

    </div>
  );
};

Bookmarking.propTypes = {
  onSelectSurah: PropTypes.string,
  onSelectQari: PropTypes.string,
  theme: PropTypes.string
};

export default Bookmarking;
