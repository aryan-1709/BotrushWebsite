import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <div className="relative h-[300px] w-[300px]">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="h-full w-full"
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "grab" },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            grab: { distance: 200 },
                        },
                    },
                    particles: {
                        color: { value: "#39fa43" },
                        links: {
                            color: "#1ed427",
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            outModes: { default: "bounce" },
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 100,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 5 } },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default Particle;
