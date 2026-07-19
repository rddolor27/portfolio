import React, { useEffect, useRef, useContext } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

import DeveloperPhoto from '../assets/images/Dev_Photo.jpeg';
import Resume from '../assets/Dolor-Resume.pdf';
import Linkedin from '../assets/social_image_icons/linkedin.png';
import Github from '../assets/social_image_icons/github.png';
import Gmail from '../assets/social_image_icons/gmail.png';

import useOnScreen from '../hooks/useScreenView';
import { AppContext } from '../providers/AppStateProvider';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 0.6, staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.7 } },
};

const SOCIALS = [
    { href: 'https://www.linkedin.com/in/ronel-dylan-joshua-a-dolor-4b3b37206/', img: Linkedin, alt: 'linkedin' },
    { href: 'https://github.com/amtw123456', img: Github, alt: 'github' },
    { href: 'mailto:radolor@up.edu.ph', img: Gmail, alt: 'gmail' },
];

const About = () => {
    const { setInAboutSection } = useContext(AppContext);

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setInAboutSection(isVisible);
    }, [isVisible, setInAboutSection]);

    return (
        <section ref={ref} id="about-section" className="relative">
            <div className="hero-glow pointer-events-none absolute inset-x-0 -top-16 h-[32rem]" />

            <motion.div
                variants={container}
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
                className="mb-72 flex flex-col items-center pt-36"
            >
                <motion.div variants={item} className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 opacity-75 blur-sm" />
                    <img
                        src={DeveloperPhoto}
                        alt="Rd Dolor"
                        className="relative h-64 w-64 rounded-full object-cover ring-2 ring-background"
                    />
                </motion.div>

                <motion.div variants={item} className="mt-8 flex flex-row items-center justify-center gap-12">
                    {SOCIALS.map(({ href, img, alt }) => (
                        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
                            <img
                                src={img}
                                alt={alt}
                                className="h-12 w-12 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                            />
                        </a>
                    ))}
                </motion.div>

                <motion.p
                    variants={item}
                    className="mt-8 text-center text-xl sm:text-2xl font-semibold tracking-tight"
                >
                    <span className="text-gradient">Full-Stack Developer</span>
                    <span className="text-muted-foreground"> | </span>
                    Machine Learning &amp; Data Analytics Enthusiast
                </motion.p>

                <motion.p
                    variants={item}
                    className="mt-8 max-w-3xl px-6 text-center leading-relaxed text-muted-foreground"
                >
                    Hi, I'm RD, a recent Computer Science graduate from the University of the Philippines Los Baños.
                    I'm a developer with a strong passion for Machine Learning, Data Analytics, Software Development,
                    and Finance. My interest in technology has driven me to continually learn and explore these fields.
                    I enjoy creating applications that can improve the daily lives of individuals and analyze data by
                    transforming raw data into meaningful insights allowing for more informed decisions.
                </motion.p>

                <motion.div variants={item} className="mt-12">
                    <a
                        download="Dolor-Resume.pdf"
                        href={Resume}
                        aria-label="Download Resume"
                        className={cn(buttonVariants({ size: 'lg' }), 'shadow-lg shadow-purple-600/20')}
                    >
                        <FiArrowDownCircle className="h-5 w-5" />
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
