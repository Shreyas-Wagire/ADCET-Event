import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const particles = useRef([]);

    useEffect(() => {
        // Generate random particle data
        particles.current = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            size: Math.random() * 60 + 20,
            left: Math.random() * 100,
            animationDuration: Math.random() * 10 + 15,
            delay: Math.random() * 5,
            opacity: Math.random() * 0.3 + 0.1,
        }));
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            
            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => {
                const size = Math.random() * 60 + 20;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const duration = Math.random() * 10 + 15;
                const delay = Math.random() * 5;
                const opacity = Math.random() * 0.3 + 0.1;
                
                return (
                    <div
                        key={i}
                        className="absolute rounded-full animate-float-slow"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}%`,
                            top: `${top}%`,
                            background: `radial-gradient(circle, ${
                                i % 3 === 0 ? 'rgba(168, 85, 247, 0.4)' :
                                i % 3 === 1 ? 'rgba(236, 72, 153, 0.4)' :
                                'rgba(59, 130, 246, 0.4)'
                            }, transparent)`,
                            opacity: opacity,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                            filter: 'blur(2px)',
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ParticleBackground;
