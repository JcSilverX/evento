'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import React, { useRef } from 'react'
import { EventoEvent } from '@prisma/client';

type EventCardProps = {
    event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({
    event
}: EventCardProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.5 1'],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <MotionLink ref={ref} className='flex-1 basis-80 h-[23.75rem] max-w-[31.25rem]' href={`/event/${event.slug}`} style={{
            // @ts-ignore
            scale: scaleProgress,
            // @ts-ignore
            opacity: opacityProgress,
        }}
            initial={{
                opacity: 0,
                scale: 0.8
            }}
        >
            <section className='w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden hover:scale-105 active:scale-[1.02] transition'>
                <Image src={event.imageUrl} alt={event.name} width={500} height={280} className='h-[60%] object-cover' />

                <div className='flex flex-col flex-1 justify-center items-center px-2'>
                    <h2 className='text-2xl font-semibold text-center'>{event.name}</h2>
                    <p className='italic text-white/75'>By {event.organizerName}</p>
                    <p className='text-sm text-white/50 mt-4'>{event.location}</p>
                </div>

                <section className='absolute text-center left-[12px] top-[.75rem] h-[2.8125rem] w-[2.8125rem] bg-black/30 rounded-md'>
                    <span className='text-xl font-bold -mb-[5px]'>
                        {
                            new Date(event.date).toLocaleDateString('en-us', {
                                day: '2-digit'
                            })
                        }
                    </span>
                    <p className='text-xs uppercase text-accent'>
                        {
                            new Date(event.date).toLocaleDateString('en-us', {
                                month: 'short'
                            })
                        }
                    </p>
                </section>
            </section>
        </MotionLink>
    );
}
