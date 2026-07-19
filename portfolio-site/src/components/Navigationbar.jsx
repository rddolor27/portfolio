import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun } from 'lucide-react';

import { AppContext } from '../providers/AppStateProvider';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
    { to: 'about-section', label: 'About', activeKey: 'inAboutSection' },
    { to: 'skills-section', label: 'Skills', activeKey: 'inSkillsSection' },
    { to: 'projects-section', label: 'Projects', activeKey: 'inProjectsSection' },
    { to: 'contacts-section', label: 'Connect', activeKey: 'inContactsSection' },
];

function Navigationbar() {
    const appState = useContext(AppContext);
    const [theme, toggleTheme] = useThemeSwitcher();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-8">
                <a href="#" className="hidden lg:flex items-center">
                    <span className="text-xl font-bold tracking-tight text-gradient">Rd</span>
                </a>

                <ul className="flex flex-1 items-center justify-center gap-1 sm:gap-6 font-medium">
                    {NAV_LINKS.map(({ to, label, activeKey }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                smooth={true}
                                duration={500}
                                className={cn(
                                    'relative select-none cursor-pointer rounded-md px-3 py-2 text-sm sm:text-base text-muted-foreground transition-colors hover:text-primary',
                                    appState[activeKey] &&
                                        'text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary'
                                )}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className="rounded-full text-muted-foreground hover:text-foreground"
                    >
                        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navigationbar;
