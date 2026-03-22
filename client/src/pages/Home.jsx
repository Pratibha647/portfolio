import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
    Code2,
    Terminal,
    Database,
    Layout,
    Server,
    Layers
} from 'lucide-react';

const Home = () => {
    const skills = [
        { name: 'Frontend', icon: <Layout className="w-6 h-6" />, desc: 'React, Tailwind CSS, HTML, CSS' },
        { name: 'Backend', icon: <Server className="w-6 h-6" />, desc: 'Node.js, Express.js' },
        { name: 'Database', icon: <Database className="w-6 h-6" />, desc: 'MongoDB, Mongoose' },
        { name: 'Tools', icon: <Terminal className="w-6 h-6" />, desc: 'Git, Vite, Postman' },
        { name: 'Languages', icon: <Code2 className="w-6 h-6" />, desc: 'JavaScript (ES6+)' },
        { name: 'Architecture', icon: <Layers className="w-6 h-6" />, desc: 'REST APIs, MVC' },
    ];

    return (
        <div className="flex flex-col animate-fade-in pb-12">

            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between min-h-[75vh] pt-10 gap-12">
                <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium mb-6">
                        Available for hire
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Pratibha Banerjee</span>
                    </motion.h1>
                    <motion.h2 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'MERN Stack Specialist',
                                1000,
                                'UI/UX Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
                        I craft elegant, robust, and scalable full-stack web applications. Turning complex problems into simple, beautiful, and intuitive interfaces.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <NavLink to="/projects" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 hover:scale-105">
                            View Work
                        </NavLink>
                        <NavLink to="/contact" className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transform hover:-translate-y-1 hover:scale-105">
                            Contact Me
                        </NavLink>
                    </motion.div>
                </div>

                {/* Profile Image Section */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-lg mt-10 lg:mt-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)] relative z-10 bg-slate-900 animate-float hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300">
                        <img
                            src="/images/my-photo.jpeg"
                            alt="Pratibha Banerjee"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* About Me Section */}
            <section className="py-20 border-t border-slate-800/50 mt-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">About Me</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Passionate about creating digital experiences.</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        I'm a dedicated full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js).
                        With a strong foundation in modern web technologies, I love building applications from the ground up—from designing
                        sleek user interfaces to engineering robust back-end systems. Constantly learning and exploring new technologies
                        to solve real-world problems efficiently.
                    </p>
                </div>
            </section>

            {/* Skills Preview Section */}
            <section className="py-20 border-t border-slate-800/50">
                <div className="text-center mb-16">
                    <h3 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Core Expertise</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">My Toolkit</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 mb-5 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
                                {skill.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">{skill.name}</h4>
                            <p className="text-slate-400">{skill.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <NavLink to="/skills" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        View All Skills
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </NavLink>
                </div>
            </section>

        </div>
    );
};

export default Home;
