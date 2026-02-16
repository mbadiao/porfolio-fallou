import React from 'react';

const ProjectMboro: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 py-12">
            <div className="reveal-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="font-syne text-4xl md:text-6xl font-bold text-accent">
                        R+1 Mboro
                    </h2>
                    <div className="w-24 h-1 bg-accent mt-4" />
                </div>
                <p className="font-inter text-accent/70 text-lg md:border-l border-accent/20 md:pl-8">
                    Maison contemporaine R+1, aux volumes épurés et à la façade moderne.
                    Le projet privilégie la fonctionnalité et une intégration harmonieuse.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { src: "/RDC_OK_1.png", label: "Vue RDC 01" },
                    { src: "/RDC_OK_2.png", label: "Vue RDC 02" },
                    { src: "/Projet_1_Rendu2.png", label: "Perspective Globale" }
                ].map((img, i) => (
                    <div key={i} className="reveal-content group flex flex-col gap-4">
                        <div className="aspect-[4/3] rounded-xl border border-accent/10 overflow-hidden relative">
                            <img
                                src={img.src}
                                alt={img.label}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-syne text-accent/40 text-[10px] tracking-[0.3em] uppercase">{img.label}</span>
                            <div className="h-[1px] w-0 group-hover:w-12 bg-accent transition-all duration-700" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectMboro;
