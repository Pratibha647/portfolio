import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
                setProjects(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Failed to load projects. Ensure the backend server is running on port 5000.");
                setLoading(false);
            }
        };

        fetchProjects();
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
                    Featured Projects
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    A selection of my recent work, showcasing full-stack development skills from concept to deployment.
                </p>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg text-center mb-8 max-w-2xl mx-auto">
                    <p>{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={project._id || index}
                        className="group bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2"
                    >
                        {/* Project Image */}
                        <div className="h-56 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        // Update to a generic not found layout or placeholder
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            ) : null}
                            {/* Fallback displayed either if no project.image exists, or if the img fails to load and we switch display states */}
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center" style={{ display: project.image ? 'none' : 'flex' }}>
                                <span className="text-slate-500">Image Not Found</span>
                            </div>
                            {project.badge && (
                                <div className="absolute top-4 right-4 bg-blue-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-lg backdrop-blur-sm border border-blue-400/30">
                                    {project.badge}
                                </div>
                            )}
                        </div>

                        {/* Project Details */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.technologies?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-slate-900 border border-slate-700 text-blue-300 text-xs font-semibold rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-700/50">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="text-sm font-medium">Source</span>
                                    </a>
                                )}
                                {project.liveLink ? (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                                    >
                                        <span className="text-sm font-medium">Live Demo</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-2 text-slate-500 cursor-not-allowed ml-auto border border-slate-700/50 px-3 py-1.5 rounded-lg bg-slate-800/50">
                                        <span className="text-sm font-medium">Coming Soon</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
