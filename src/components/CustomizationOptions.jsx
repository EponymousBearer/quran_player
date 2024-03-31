import PropTypes from 'prop-types';

const CustomizationOptions = ({ theme, onThemeChange, font, onFontChange }) => {

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    onThemeChange(newTheme);
  };

  const handleFontChange = (e) => {
    const newFont = e.target.value;
    onFontChange(newFont);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4 text-base">

      <div className='flex gap-x-10 justify-center'>

        <div className="flex justify-center items-center gap-x-4">

          <label htmlFor="font" className="block mb-1">
            Font Size:
          </label>

          <select
            type="number"
            id="font"
            value={font}
            onChange={handleFontChange}
            className="rounded-md border p-1 h-8 w-12 text-black"
          >
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
          </select>

        </div>

        <div className="flex justify-center items-center gap-x-4">

          <label htmlFor="theme" className="block mb-1">
            Theme:
          </label>

          <select
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            className="rounded-md border p-1 h-8 w-16 text-black"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

        </div>

      </div>

    </div>
  );
};

CustomizationOptions.propTypes = {
  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
  font: PropTypes.any,
  onFontChange: PropTypes.func,

};

export default CustomizationOptions;
