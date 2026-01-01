import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGame = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios('../game.json')
            .then(data => setGames(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])


    return { games, loading, error }
};

export default useGame;