import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center px-8 md:px-24 relative">
            <div className="reveal-content space-y-12">
                <h2 className="font-syne text-6xl md:text-8xl font-bold text-accent">
                    Merci !!!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <p className="font-inter text-xl text-accent/80 max-w-md">
                            Disponible pour vos projets de conception architecturale,
                            modélisation et aménagement.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:faloudiao18@gmail.com" className="flex items-center gap-4 text-accent/60 hover:text-accent transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent/10 transition-all">
                                    <Mail size={20} />
                                </div>
                                <span className="font-syne tracking-widest uppercase text-sm">faloudiao18@gmail.com</span>
                            </a>

                            <a href="tel:+221778812580" className="flex items-center gap-4 text-accent/60 hover:text-accent transition-colors group">
                                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent/10 transition-all">
                                    <Phone size={20} />
                                </div>
                                <span className="font-syne tracking-widest uppercase text-sm">+221 77 881 25 80</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end gap-6">
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/fadilou-diao-0a40a538a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-xl border border-accent/20 flex items-center justify-center hover:bg-accent/10 transition-all text-accent"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://tinyurl.com/Galass"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-16 h-16 rounded-xl border border-accent/20 flex items-center justify-center hover:bg-accent/10 transition-all text-accent"
                            >
                                <ExternalLink size={24} />
                            </a>
                        </div>
                        <p className="font-syne text-[10px] tracking-[0.5em] uppercase text-accent/30">
                            Portfolio 2026 • Mouhamadou Fadilou DIAO
                        </p>
                    </div>
                </div>
            </div>

            {/* Modern Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />
        </div>
    );
};

export default Contact;
