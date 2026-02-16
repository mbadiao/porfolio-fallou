import React from 'react';

const Plans2D: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 bg-accent/[0.01]">
            <div className="reveal-content text-center mb-16">
                <h2 className="font-syne text-4xl md:text-6xl font-bold text-accent mb-4">
                    Plans 2D
                </h2>
                <p className="font-syne text-accent/50 tracking-[0.3em] uppercase text-sm">
                    Conception & Précision sur Autocad
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { src: "/Ngor 2D.png", label: "Plan Ngor" },
                    { src: "/Capture d'écran 2025-12-05 154038.png", label: "Esquisse Technique" },
                    { src: "/Capture d'écran 2026-01-11 204517.png", label: "Détail Coupe" },
                    { src: "/Capture d'écran 2025-12-27 221816.png", label: "Plan Masse" }
                ].map((item, i) => (
                    <div key={i} className="reveal-content flex flex-col gap-6">
                        <div className="aspect-[3/4] bg-white/5 rounded-sm border border-accent/10 p-2 transition-all duration-500 hover:border-accent/40 group overflow-hidden relative">
                            <img
                                src={item.src}
                                alt={item.label}
                                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 invert-[.05]"
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="font-syne text-accent text-xs font-bold tracking-widest uppercase text-center">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans2D;
