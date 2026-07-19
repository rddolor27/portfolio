import React, { useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import useOnScreen from '../hooks/useScreenView';
import { AppContext } from '../providers/AppStateProvider';

const EXPERIENCE = [
    {
        role: 'Full Stack Developer',
        type: 'Contract',
        company: 'Kulay',
        location: 'Remote · Pasig, Manila',
        period: 'Nov 2024 – Present',
        points: [
            'Built and deployed a Point-of-Sale (POS) system with a web-based admin dashboard for configuration and management, deployed on GCP.',
            'Developed the BIR-compliant reporting module (14 reports) that helped secure POS approval & certification from the BIR, with offline/online operation and data syncing.',
            'Integrated GrabFood Partner APIs — 9 webhook listeners and 15+ API routes — for real-time order syncing and transaction logging with multi-tenant support.',
            'Integrated PayMongo for QRPH payments, including signature validation for transaction integrity and authenticity.',
            'Developed 40+ REST APIs in NestJS (TypeORM/PostgreSQL) and 30+ data-access services with Drizzle for the embedded SQLite.',
        ],
    },
    {
        role: 'Junior Full Stack Developer',
        type: 'Full-time',
        company: 'Pro-Serve Corporate Support',
        location: 'Hybrid · Ortigas, Manila',
        period: 'Oct 2024 – Present',
        points: [
            "Built automation agents and scrapers with Sequentum, Selenium, and Puppeteer across major retailers (Home Depot, Amazon, Lowe's, Acenet), handling 200 to 100,000+ products.",
            'Built a NestJS API with validation and upsert logic importing 1,000–2,000+ product-sales records per week into MySQL, saving ~10 hours/month of manual data entry.',
            'Automated retailer report generation (~6× faster — seconds instead of ~30 minutes) with timeframe-based reporting.',
            'Assisted in integrating Google/Microsoft OAuth and Stripe payments, plus debugging and shipping new features.',
            'Helped build 7 Shopify e-commerce sites, customizing storefronts with Liquid and adding validated forms with app integrations.',
        ],
    },
    {
        role: 'Back-end Developer Intern',
        type: 'Full-time',
        company: 'LOPhils Incorporated',
        location: 'Remote · Quezon City, Manila',
        period: 'Jul – Aug 2023',
        points: [
            'Collaborated with a development team to build a web application deployed on AWS.',
            'Updated GraphQL services and implemented 2FA, fixing UI and functionality issues for a smoother, more secure, and reliable experience.',
        ],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 0.5, staggerChildren: 0.12 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.6 } },
};

const Experience = () => {
    const { setInExperienceSection } = useContext(AppContext);

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setInExperienceSection(isVisible);
    }, [isVisible, setInExperienceSection]);

    return (
        <section ref={ref} id="experience-section" className="mb-24 px-4 sm:px-0">
            <div className="mb-24 mt-16 flex flex-row items-center">
                <h2 className="font-mono text-5xl font-bold text-purple-600">Experience</h2>
                <hr className="ml-4 mt-6 h-2 w-72 border-t border-purple-600" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
                className="sm:mx-12"
            >
                {EXPERIENCE.map((job, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="relative ml-1 border-l-2 border-border pb-10 pl-8 last:border-l-transparent last:pb-0"
                    >
                        <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-background bg-purple-600" />
                        <div className="rounded-xl border bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10 sm:p-6">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="text-lg font-semibold tracking-tight">
                                    {job.role}
                                    <span className="text-purple-600 dark:text-purple-400"> · {job.company}</span>
                                </h3>
                                <span className="shrink-0 text-sm font-medium text-muted-foreground">{job.period}</span>
                            </div>
                            <p className="mt-0.5 text-sm text-muted-foreground">{job.type} · {job.location}</p>
                            <ul className="mt-4 space-y-2">
                                {job.points.map((point, j) => (
                                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/70" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;
