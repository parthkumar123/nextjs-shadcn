import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export default function CarouselDemo() {
    const imagePathList = ["/IMG_3281.jpg", "/IMG_3282.jpg", "/IMG_3283.jpg"]

    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                {imagePathList.map((iamgepath, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Image
                                src={iamgepath}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                                key={index}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
