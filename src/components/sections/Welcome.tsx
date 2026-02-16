import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal-content space-y-8">
                <h2 className="font-syne text-5xl md:text-7xl font-bold text-accent">
                    Bienvenue
                </h2>

                <div className="space-y-6 font-inter text-lg text-accent/80 leading-relaxed text-justify">
                    <p>
                        Concepteur de plans architecturaux 2D & 3D, je réalise des projets d’habitation
                        et d’aménagement en mettant l’accent sur la fonctionnalité des espaces,
                        la clarté des volumes et le réalisme des rendus.
                    </p>
                    <p>
                        Je produis des plans précis (plans, coupes, façades) ainsi que des modèles 3D
                        permettant une meilleure compréhension du projet avant sa réalisation.
                    </p>
                    <p className="border-l-2 border-accent/30 pl-6 italic text-accent/60">
                        Ce portfolio présente une sélection de travaux illustrant mon approche
                        architecturale, orientée vers des solutions simples, lisibles et esthétiques.
                    </p>
                </div>
            </div>

            <div className="reveal-content relative aspect-[4/5] bg-accent/5 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-60 z-10" />
                {/* Placeholder for architecture image */}
                <div className="w-full h-full flex items-center justify-center border border-accent/10">
                    <span className="font-syne text-accent/20 tracking-widest uppercase">Visual Concept</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="w-12 h-1 bg-accent mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <p className="font-syne text-xs tracking-widest text-accent/40 uppercase">Architecture Excellence</p>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
