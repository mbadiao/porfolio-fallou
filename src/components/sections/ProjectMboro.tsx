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
                {[1, 2, 3].map((i) => (
                    <div key={i} className="reveal-content group flex flex-col gap-4">
                        <div className="aspect-[4/3] bg-accent/5 rounded-xl border border-accent/10 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                            <span className="font-syne text-accent/20 text-[10px] tracking-[0.3em] uppercase">Facade View 0{i}</span>
                        </div>
                        <div className="h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-700" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectMboro;
