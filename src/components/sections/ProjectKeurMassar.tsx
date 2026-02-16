import React from 'react';

const ProjectKeurMassar: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 py-12">
            <div className="reveal-content mb-12">
                <h2 className="font-syne text-4xl md:text-6xl font-bold text-accent">
                    Projet R+1 Keur Massar
                </h2>
                <div className="w-20 h-1 bg-accent mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 reveal-content space-y-8">
                    <div className="space-y-4">
                        <h3 className="font-syne text-xl font-semibold text-accent/90 uppercase tracking-widest">
                            Concept
                        </h3>
                        <p className="font-inter text-accent/70 leading-relaxed text-sm">
                            Habitation contemporaine R+1 caractérisée par des volumes géométriques équilibrés,
                            une façade moderne et l’association de matériaux nobles tels que le bois, le verre et le béton.
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-accent/10">
                        <h3 className="font-syne text-xl font-semibold text-accent/90 uppercase tracking-widest">
                            Fonctionnalité
                        </h3>
                        <p className="font-inter text-accent/70 leading-relaxed text-sm">
                            Conception orientée vers la luminosité naturelle, la ventilation optimale
                            et l’intégration d’espaces extérieurs (balcons et terrasse).
                        </p>
                    </div>
                </div>

                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-content">
                    <div className="aspect-video md:aspect-square rounded-xl border border-accent/10 overflow-hidden group relative">
                        <img
                            src="/Projet_1_Rendu1.png"
                            alt="Vue extérieure R+1"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="font-syne text-accent text-xs tracking-widest uppercase">Exterior</span>
                        </div>
                    </div>
                    <div className="aspect-video md:aspect-square rounded-xl border border-accent/10 overflow-hidden group relative">
                        <img
                            src="/Chambre parent.png"
                            alt="Suite parentale"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="font-syne text-accent text-xs tracking-widest uppercase">Master Suite</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectKeurMassar;
