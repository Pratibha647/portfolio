import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trophy, Code2, ExternalLink } from 'lucide-react';

const Achievements = () => {
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/achievements`);
                setAchievements(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching achievements:", err);
                setError("Failed to load achievements. Ensure backend is running.");
                setLoading(false);
            }
        };

        fetchAchievements();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="py-12 animate-fade-in pb-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
                    Coding Achievements
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Highlighting my continuous journey of problem-solving and algorithmic thinking across top competitive programming platforms.
                </p>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg text-center mb-8 max-w-2xl mx-auto">
                    <p>{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((item, index) => (
                    <a
                        key={item._id || index}
                        href={item.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:bg-slate-800/70 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2 relative"
                    >
                        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                            <ExternalLink className="w-4 h-4 text-blue-400" />
                        </div>

                        <div className="p-8 flex flex-col items-center flex-grow text-center">
                            {/* Badge Image */}
                            <div className="w-24 h-24 mb-6 rounded-2xl bg-white p-4 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
                                {item.badgeImage ? (
                                    <img
                                        src={item.badgeImage}
                                        alt={item.platform}
                                        className="w-full h-full object-contain filter drop-shadow-sm"
                                    />
                                ) : (
                                    <Code2 className="w-12 h-12 text-slate-400" />
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                                {item.platform}
                            </h3>

                            <div className="mt-4 pt-4 border-t border-slate-700/50 w-full flex flex-col items-center flex-grow">
                                {item.problemsSolved !== null && item.problemsSolved !== undefined ? (
                                    <>
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <Trophy className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                                            <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                                {item.problemsSolved}+
                                            </span>
                                        </div>
                                        <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">
                                            Problems Solved
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-center gap-2 mb-1">
                                            <Trophy className="text-slate-500 w-5 h-5 flex-shrink-0" />
                                            <span className="text-xl font-bold text-slate-300">
                                                Active Profile
                                            </span>
                                        </div>
                                        <span className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">
                                            Stats Syncing...
                                        </span>
                                    </>
                                )}

                                {item.rank && (
                                    <div className="mt-2 bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                                        <span className="text-blue-300 text-xs font-bold tracking-wide">{item.rank}</span>
                                    </div>
                                )}

                                {/* View Profile Button */}
                                <div className="mt-6 w-full flex items-center justify-center gap-2 text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                                    <span>View Profile</span>
                                    <ExternalLink className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-y-1 translate-x-1 transition-all" />
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
