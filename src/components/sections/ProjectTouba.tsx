import React from 'react';

const ProjectTouba: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 py-12 bg-accent/[0.02]">
            <div className="reveal-content mb-12 flex flex-col items-end text-right">
                <h2 className="font-syne text-4xl md:text-6xl font-bold text-accent">
                    RDC Terrasse Touba
                </h2>
                <div className="w-32 h-1 bg-accent mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                <div className="md:col-span-8 order-2 md:order-1 reveal-content">
                    <div className="aspect-[16/9] rounded-2xl border border-accent/10 overflow-hidden group relative shadow-2xl">
                        <img
                            src="/Projet 2_Touba_vue de face.png"
                            alt="Villa Touba"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
                    </div>
                </div>

                <div className="md:col-span-4 order-1 md:order-2 reveal-content space-y-8 text-right">
                    <div className="space-y-4">
                        <h3 className="font-syne text-xl font-semibold text-accent/90 uppercase tracking-widest">
                            Design Contemporain
                        </h3>
                        <p className="font-inter text-accent/70 leading-relaxed text-sm">
                            Villa au design épuré, mettant en valeur des volumes géométriques équilibrés
                            et une façade moderne aux lignes sobres.
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-accent/10 flex flex-col items-end">
                        <div className="px-4 py-2 bg-accent/10 rounded-lg inline-block">
                            <p className="font-syne text-accent text-xs font-bold uppercase tracking-widest">Intérieur Maquette</p>
                        </div>
                        <p className="font-inter text-accent/60 text-xs italic">
                            Relation fluide entre espaces intérieurs et extérieurs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTouba;
