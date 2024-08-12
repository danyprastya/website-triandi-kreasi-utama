"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

import infrastruktur from "../../public/infrastruktur.png";
import konstruksirumah from "../../public/konstruksirumah.png";
import galian from "../../public/galian.png";
import interior from "../../public/interior1.png";
import maintenance from "../../public/maintenance.png";
import aspal from "../../public/aspal.png";
import mesjid from "../../public/mesjid1.jpg"
import rumah from "../../public/rumah.png"
import desain from "../../public/desain.png"
import desain1 from "../../public/desain1.png"
import konstruksi from "../../public/konstruksirumah1.png"

import Image from "next/image";

const Project2 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoHeight()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla w-full p-5 justify-center items-center flex flex-col mt-[40px]">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container flex">
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={infrastruktur}
                alt="infrastruktur"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <video autoPlay 
                loop 
                muted 
                playsInline
                width="100%" 
                height="auto">
                <source src="/videos/videokonstruksi.mp4" type="video/mp4"/>
                Video Konstruksi
              </video>
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={konstruksi}
                alt="infrastruktur"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={konstruksirumah}
                alt="konstruksi rumah"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={galian}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={interior}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={maintenance}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={aspal}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={mesjid}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={rumah}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={desain}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="embla__slide flex items-center justify-center max-w-screen">
            <div className="relative z-10 flex items-center justify-center w-full h-auto">
              <Image
                src={desain1}
                alt="infrastruktur 2"
                
                objectFit="contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default Project2;
