import React, { useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import { FiGithub, FiExternalLink } from 'react-icons/fi';

import useOnScreen from '../hooks/useScreenView';
import { AppContext } from '../providers/AppStateProvider';
import Carousel from '../components/Carousel';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 0.5, staggerChildren: 0.12 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.6 } },
};

const Projects = (data) => {
    const { setInProjectsSection } = useContext(AppContext);

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        setInProjectsSection(isVisible);
    }, [isVisible, setInProjectsSection]);

    return (
        <section ref={ref} id="projects-section" className="px-4 sm:px-0 md:w-full">
            <div className="mb-24 mt-16 flex flex-row items-center justify-end">
                <hr className="mt-6 h-2 w-72 border-t border-purple-600" />
                <h2 className="ml-4 font-mono text-5xl font-bold text-purple-600">Projects</h2>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
                className="grid gap-10 sm:mx-12 sm:grid-cols-2"
            >
                {data.project.projects.map((project, i) => {
                    const liveUrl = project.links?.Live;
                    const repoUrl = project.links?.GitHub || project.links?.Github;

                    return (
                        <motion.article
                            key={i}
                            variants={item}
                            className="group relative flex flex-col overflow-hidden rounded-xl border bg-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/15"
                        >
                            <Carousel project={project} />
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                    {project.name}
                                </h3>
                                <div className="mt-3 flex flex-row flex-wrap gap-2">
                                    {project.tech.map((tech, j) => (
                                        <Badge key={j} variant="secondary" className="font-medium">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="mt-4 leading-relaxed text-muted-foreground">
                                    {project.about}
                                </p>

                                {(liveUrl || repoUrl) && (
                                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                                        {liveUrl && (
                                            <a
                                                href={liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(buttonVariants({ size: 'sm' }), 'shadow-sm shadow-purple-600/20')}
                                            >
                                                <FiExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        {repoUrl && (
                                            <a
                                                href={repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                                            >
                                                <FiGithub className="h-4 w-4" />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Projects;
