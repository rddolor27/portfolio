import { useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesInner = () => {
    const { loaded } = useParticlesProvider();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));

        // Follow theme toggles so the background switches with dark mode
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: isDarkMode ? "#000000" : "#ffffff", // White in dark mode, black otherwise
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: '#6a0dad', // Set particle color to blue
                },
                links: {
                    color: '#6a0dad', // Set link color to blue
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 240,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [isDarkMode]
    );

    if (!loaded) return null;

    return (
        <div className="fixed inset-0 w-full h-full z-[-1]">
            <Particles id="tsparticles" options={options} />
        </div>
    );
};

const ParticlesBg = () => (
    <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}>
        <ParticlesInner />
    </ParticlesProvider>
);

export default ParticlesBg;
