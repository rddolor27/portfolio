import React, { useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import Python from '../assets/stack_image_icons/python.png';
import Nodejs from '../assets/stack_image_icons/nodejs.png';
import Reactjs from '../assets/stack_image_icons/reactjs.png';
import Tailwind from '../assets/stack_image_icons/tailwind.png';
import CSS from '../assets/stack_image_icons/css.png';
import HTML from '../assets/stack_image_icons/html.png';
import AWS from '../assets/stack_image_icons/aws.png';
import JavaScript from '../assets/stack_image_icons/javascript.png';
import TypeScript from '../assets/stack_image_icons/typescript.png';
import Django from '../assets/stack_image_icons/django.png';
import Firebase from '../assets/stack_image_icons/firebase.png';
import Java from '../assets/stack_image_icons/java.png';
import D3 from '../assets/stack_image_icons/d3.png';
import Selenium from '../assets/stack_image_icons/selenium.png';
import Scikit from '../assets/stack_image_icons/scikitlearn.png';
import Gensim from '../assets/stack_image_icons/gensim.png';
import Express from '../assets/stack_image_icons/express.png';
import Nextjs from '../assets/stack_image_icons/nextjs.png';
import Opencv from '../assets/stack_image_icons/opencv.png';
import C from '../assets/stack_image_icons/C.png';
import Cpp from '../assets/stack_image_icons/C++.png';
import Rust from '../assets/stack_image_icons/rust.png';
import SQL from '../assets/stack_image_icons/sql.png';
import Git from '../assets/stack_image_icons/git.png';
import Mongodb from '../assets/stack_image_icons/mongodb.png';
import Flutter from '../assets/stack_image_icons/flutter.png';

import useOnScreen from '../hooks/useScreenView';
import { AppContext } from '../providers/AppStateProvider';

const LANGUAGES = [
    { icon: JavaScript, label: 'JavaScript' },
    { icon: TypeScript, label: 'TypeScript' },
    { icon: Python, label: 'Python' },
    { icon: Java, label: 'Java' },
    { icon: C, label: 'C' },
    { icon: Cpp, label: 'C++' },
    { icon: Rust, label: 'Rust' },
    { icon: SQL, label: 'SQL' },
];

const FRAMEWORKS = [
    { icon: Django, label: 'Django' },
    { icon: Nodejs, label: 'Node.js' },
    { icon: Reactjs, label: 'React' },
    { icon: Tailwind, label: 'Tailwind' },
    { icon: Flutter, label: 'Flutter' },
    { icon: CSS, label: 'CSS' },
    { icon: HTML, label: 'HTML' },
    { icon: D3, label: 'D3.js' },
    { icon: Express, label: 'Express.js' },
    { icon: Nextjs, label: 'Next.js' },
    { icon: AWS, label: 'AWS' },
    { icon: Firebase, label: 'Firebase' },
    { icon: Mongodb, label: 'Mongodb' },
    { icon: Selenium, label: 'Selenium' },
    { icon: Scikit, label: 'Scikit-Learn' },
    { icon: Gensim, label: 'Gensim' },
    { icon: Opencv, label: 'OpenCV' },
    { icon: Git, label: 'Git' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 0.5, staggerChildren: 0.03 },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.5 } },
};

const SkillGrid = ({ title, skills }) => (
    <div className="mb-16">
        <div className="mb-8 text-center text-xl font-bold tracking-tight">{title}</div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map(({ icon, label }) => (
                <motion.div
                    key={label}
                    variants={item}
                    className="group flex items-center gap-3 rounded-xl border bg-card/60 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10"
                >
                    <img
                        src={icon}
                        alt={`${label} Icon`}
                        className="h-9 w-9 transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <span className="text-sm font-medium">{label}</span>
                </motion.div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const { setInSkillsSection } = useContext(AppContext);

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setInSkillsSection(isVisible);
    }, [isVisible, setInSkillsSection]);

    return (
        <section ref={ref} id="skills-section" className="mb-24 px-4 sm:px-0">
            <div className="mb-24 mt-16 flex flex-row items-center">
                <h2 className="font-mono text-5xl font-bold text-purple-600">Skills</h2>
                <hr className="ml-4 mt-6 h-2 w-72 border-t border-purple-600" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
                className="mb-60 sm:mx-12"
            >
                <SkillGrid title="Programming Languages" skills={LANGUAGES} />
                <SkillGrid title="Frameworks and Technologies" skills={FRAMEWORKS} />
            </motion.div>
        </section>
    );
};

export default Skills;
