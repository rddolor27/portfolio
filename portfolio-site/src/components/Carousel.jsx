import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'

const ProjectCarousel = ({ project }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }),
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        onSelect()
        return () => emblaApi.off('select', onSelect)
    }, [emblaApi])

    return (
        <div className="group/carousel relative w-full overflow-hidden rounded-t-xl">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex">
                    {project.images.map((image, index) => (
                        <div key={index} className="min-w-0 flex-[0_0_100%]">
                            <img
                                className="h-80 w-full object-cover transition-transform duration-500 ease-in-out group-hover/carousel:scale-105"
                                src={image}
                                alt={`${project.name} screenshot ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {project.images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-900 shadow-md backdrop-blur transition hover:bg-white"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={scrollNext}
                        aria-label="Next slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-900 shadow-md backdrop-blur transition hover:bg-white"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {project.images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={cn(
                                    'h-1.5 rounded-full bg-white/60 shadow transition-all',
                                    index === selectedIndex ? 'w-5 bg-white' : 'w-1.5 hover:bg-white/90'
                                )}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ProjectCarousel
