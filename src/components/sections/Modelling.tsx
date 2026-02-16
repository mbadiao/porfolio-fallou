import React from 'react';

const Modelling: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="reveal-content order-2 md:order-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-xl" />
                        <div className="relative aspect-video bg-background border border-accent/20 rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="/DARA.png"
                                alt="Modélisation 3D Dara"
                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="reveal-content space-y-8 order-1 md:order-2">
                    <div className="space-y-4">
                        <h2 className="font-syne text-4xl md:text-6xl font-bold text-accent">
                            Modélisation 3D
                        </h2>
                        <h3 className="font-syne text-xl text-accent/60 uppercase tracking-[0.4em]">
                            Base d’un projet réussi
                        </h3>
                    </div>
                    <p className="font-inter text-accent/80 leading-relaxed text-lg italic">
                        "La modélisation en trois dimensions permet d'explorer chaque angle,
                        chaque ombre et chaque espace avant même que la première pierre ne soit posée."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modelling;
