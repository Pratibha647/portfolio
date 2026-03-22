import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCerts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/certifications`);
                setCertifications(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching certifications:", err);
                setError("Failed to load certifications. Ensure backend is running.");
                setLoading(false);
            }
        };

        fetchCerts();
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
                    Certifications
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Professional achievements, continuous learning, and verified credentials.
                </p>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg text-center mb-8 max-w-2xl mx-auto">
                    <p>{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <div
                        key={cert._id || index}
                        className="group relative block w-full h-[320px] bg-transparent perspective"
                    >
                        <div className="relative w-full h-full transition-transform duration-700 transform-style group-hover:rotate-y-180 shadow-xl rounded-2xl">
                            
                            {/* Front Side */}
                            <div className="absolute inset-0 w-full h-full backface-hidden bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden flex flex-col justify-end">
                                <div className="absolute inset-0">
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-800">
                                            <Award className="w-12 h-12 mb-2 opacity-50" />
                                            <span>No Image</span>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                <div className="relative z-10 p-5 text-center">
                                    <h3 className="text-xl font-bold text-white line-clamp-2 drop-shadow-md">
                                        {cert.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Award className="text-blue-500 w-6 h-6 flex-shrink-0" />
                                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">{cert.issuer}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                                    {cert.title}
                                </h3>

                                {cert.date && (
                                    <span className="inline-block bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium mb-4 w-fit">
                                        {cert.date}
                                    </span>
                                )}

                                <p className="text-slate-400 text-sm leading-relaxed flex-grow line-clamp-4">
                                    {cert.description}
                                </p>

                                <a
                                    href={cert.certificateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-lg transform hover:-translate-y-1"
                                >
                                    <span>View Credential</span>
                                    <ExternalLink className="w-4 h-4 ml-1" />
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
