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
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="reveal-content flex flex-col gap-6">
                        <div className="aspect-[3/4] bg-accent/5 rounded-sm border border-accent/10 p-4 transition-all duration-500 hover:border-accent/40 group">
                            <div className="w-full h-full border border-accent/5 flex items-center justify-center p-2 relative">
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/40 group-hover:w-12 group-hover:h-12 transition-all" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent/40 group-hover:w-12 group-hover:h-12 transition-all" />
                                <span className="font-syne text-accent/20 text-[10px] tracking-widest uppercase">Plan Technique 0{i}</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="font-syne text-accent text-xs font-bold tracking-widest uppercase text-center">Niveau {i > 2 ? i - 2 : i}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans2D;
