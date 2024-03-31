import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const QariList = ({ onSelectQari, onSelectQariId }) => {
    const [qaris, setQaris] = useState([]);

    useEffect(() => {
        const fetchQariList = async () => {
            try {
                const url = 'https://api.quran.com/api/v4//resources/recitations';
                const res = await fetch(url);
                const data = await res.json();
                setQaris(data.recitations.map(rec => rec));
            } catch (error) {
                console.error('Error fetching audio file:', error);
            }
        };

        fetchQariList();
    }, []);

    return (
        <div className=" text-black w-full">

            <select className='px-4 py-2 w-full rounded-md' onChange={(e) => {
                const { id, reciter_name } = JSON.parse(e.target.value);
                onSelectQari(reciter_name);
                onSelectQariId(id);
            }}>
                <option value="" >Select Qari</option>
                {qaris.map(qari => (
                    <option key={qari.id} value={JSON.stringify(qari)}>
                        {qari.reciter_name}
                    </option>
                ))}
            </select>

        </div>
    );
};

QariList.propTypes = {
    onSelectQari: PropTypes.func.isRequired,
    onSelectQariId: PropTypes.func.isRequired,
};

export default QariList;
