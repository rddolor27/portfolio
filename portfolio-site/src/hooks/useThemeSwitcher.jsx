import { useCallback, useEffect, useState } from 'react';

// Toggles the `dark` class on <html> and persists to the same `hs_theme`
// localStorage key the inline script in index.html reads on first paint.
const useThemeSwitcher = () => {
    const [theme, setTheme] = useState(() =>
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.classList.toggle('light', theme === 'light');
        localStorage.setItem('hs_theme', theme);
    }, [theme]);

    return [theme, toggleTheme];
};

export default useThemeSwitcher;
