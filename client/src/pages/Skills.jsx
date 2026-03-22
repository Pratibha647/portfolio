import React from 'react';
import {
    FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaDatabase, FaPython
} from 'react-icons/fa';
import {
    SiJavascript, SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiNextdotjs
} from 'react-icons/si';

import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 group-hover:text-yellow-300 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 group-hover:text-blue-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'Java', icon: <FaJava className="text-red-500 group-hover:text-red-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'Python', icon: <FaPython className="text-blue-400 group-hover:text-blue-300 group-hover:rotate-6 transition-all duration-300" /> }
            ]
        },
        {
            title: 'Frontend',
            skills: [
                { name: 'React', icon: <FaReact className="text-cyan-400 group-hover:text-cyan-300 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'Next.js', icon: <SiNextdotjs className="text-white group-hover:text-gray-200 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 group-hover:text-orange-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 group-hover:text-blue-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 group-hover:text-teal-300 group-hover:rotate-6 transition-all duration-300" /> },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs className="text-green-500 group-hover:text-green-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'Express', icon: <SiExpress className="text-slate-300 group-hover:text-white group-hover:rotate-6 transition-all duration-300" /> },
            ]
        },
        {
            title: 'Databases',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb className="text-green-500 group-hover:text-green-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'SQL / NoSQL', icon: <FaDatabase className="text-blue-400 group-hover:text-blue-300 group-hover:rotate-6 transition-all duration-300" /> },
            ]
        },
        {
            title: 'Tools',
            skills: [
                { name: 'Git', icon: <FaGitAlt className="text-orange-500 group-hover:text-orange-400 group-hover:rotate-6 transition-all duration-300" /> },
                { name: 'GitHub', icon: <FaGithub className="text-white group-hover:text-gray-300 group-hover:rotate-6 transition-all duration-300" /> },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="py-12 pb-24">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 tracking-tight">
                    Technical Skills
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    A comprehensive overview of my technical expertise, including programming languages, frameworks, databases, and development tools.
                </p>
            </motion.div>

            <div className="flex flex-col gap-16">
                {categories.map((category, index) => (
                    <motion.section 
                        key={index} 
                        className="w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h2 className="text-2xl font-semibold border-b border-slate-700/50 pb-3 mb-8 text-white relative flex items-center gap-3">
                            <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
                            {category.title}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {category.skills.map((skill, skillIdx) => (
                                <motion.div
                                    variants={itemVariants}
                                    key={skillIdx}
                                    className="group flex flex-col items-center justify-center gap-4 bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 transform hover:scale-105 cursor-default"
                                >
                                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </div>
                                    <span className="text-slate-300 font-medium whitespace-nowrap group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default Skills;
