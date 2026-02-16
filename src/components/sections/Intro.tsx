import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-background px-4">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="reveal-content text-center space-y-4">
                <p className="font-syne text-accent/60 tracking-[0.5em] uppercase text-sm mb-6">
                    Architectural Portfolio
                </p>

                <h1 className="font-syne text-7xl md:text-9xl font-bold text-accent leading-none">
                    MFD
                </h1>

                <div className="w-24 h-[1px] bg-accent mx-auto my-8 opacity-50" />

                <h2 className="font-syne text-xl md:text-2xl text-accent/80 tracking-widest uppercase">
                    Architecture & Design
                </h2>

                <p className="font-inter text-accent/60 mt-12 text-sm italic">
                    Présenté par : Mouhamadou Fadilou DIAO
                </p>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-accent/40 rotate-90 mb-8 origin-left">
                    Scroll to explore
                </span>
            </div>
        </div>
    );
};

export default Intro;
