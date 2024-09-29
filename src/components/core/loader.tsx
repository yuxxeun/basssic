'use client'
import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    return 100;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center transition-transform duration-500 ${!loading && 'transform -translate-y-full'}`}
        >
            {loading ? (
                <div className="text-white text-center">
                    <div className="text-2xl mb-4">Loading...</div>
                    <div className="text-6xl font-bold">{progress}%</div>
                </div>
            ) : (
                <div className="text-white text-center">
                    <div className="text-2xl mb-4">Loaded!</div>
                </div>
            )}
        </div>
    );
};

export default Loader;
