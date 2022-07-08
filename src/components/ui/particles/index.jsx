import TSParticles from "react-tsparticles";

const Particles = () => (
    <TSParticles
        id="tsparticles"
        options={{
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                        parallax: { enable: false, force: 60, smooth: 10 },
                    },
                    resize: true,
                },
                modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 200, duration: 0.4 },
                },
            },
            particles: {
                color: { value: ["#7FC7BD", "#ffE7BD"] },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 40,
                },
                opacity: {
                    animation: {
                        enable: false,
                        speed: 1,
                        sync: true,
                        startValue: "max",
                        count: 1,
                        destroy: "min",
                    },
                    value: {
                        min: 0,
                        max: 0.8,
                    },
                    random: true,
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 4,
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100,
                    },
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
        }}
    />
);

export default Particles;
