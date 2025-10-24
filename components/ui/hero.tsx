'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: process.env.NEXT_PUBLIC_CDN_URL + "Rectangle 6.png",
        },
        {
            image: process.env.NEXT_PUBLIC_CDN_URL + "Rectangle 6-1.png",
        },
        {
            image: process.env.NEXT_PUBLIC_CDN_URL + "Rectangle 7.png",
        },
        {
            image: process.env.NEXT_PUBLIC_CDN_URL + "Rectangle 8.png",
        },
        {
            image: process.env.NEXT_PUBLIC_CDN_URL + "Rectangle 9.png",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative h-[50vh] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={`Slide ${index + 1}`}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        quality={100}
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}