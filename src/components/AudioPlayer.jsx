import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = ({ src }) => {
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.5);
    const [speed, setSpeed] = useState(1);
    const [audioUrl, setAudioUrl] = useState('');

    useEffect(() => {
        const fetchAudioFile = async () => {
            try {
                const res = await fetch(src);
                const data = await res.json();
                setAudioUrl(data.audio_file.audio_url);
            } catch (error) {
                console.error('Error fetching audio file:', error);
            }
        };

        fetchAudioFile();
    }, [src]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    const handleSpeedChange = (e) => {
        const newSpeed = parseFloat(e.target.value);
        setSpeed(newSpeed);
        audioRef.current.playbackRate = newSpeed;
    };

    return (
        <div>
            {audioUrl && (
                <audio className='flex mt-8 w-full ' controls ref={audioRef} src={audioUrl} preload="auto">
                    <source src={audioUrl} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            )}
            <div className='flex justify-center items-center gap-x-10 my-4 font-medium'>
                <div className='flex gap-x-6 mt-4'>

                    <h2>Volume</h2>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>

                <div className='flex gap-x-6 mt-4'>

                    <h2>Speed</h2>
                    <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={speed}
                        onChange={handleSpeedChange}
                    />
                </div>
            </div>
        </div>
    );
};

AudioPlayer.propTypes = {
    src: PropTypes.string,
};

export default AudioPlayer;
