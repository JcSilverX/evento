import React, { ReactNode } from 'react'
import Image from "next/image";
import FirstHeading from '@/components/FirstHeading';
import { capitalize, cn } from '@/lib/utils';
import { Metadata } from 'next';
import { getEvent } from '@/lib/server-utils';

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({
    params
}: Props): Promise<Metadata> {
    const slug = params.slug;
    const event = await getEvent(slug);

    return {
        title: `Event: ${capitalize(event.name)}`,
    };
}

export async function generateStaticParams() {
    // top 100 most popular events

    return [
        {
            slug: 'comedy-extravaganza'
        },
        {
            slug: 'dj-practice-session'
        }
    ];
}

export default async function EventPage({
    params
}: Props) {
    const slug = params.slug;

    const event = await getEvent(slug);

    return (
        <main>
            <section className='relative overflow-hidden flex justify-center items-center py-14 md:py-20'>
                <Image className='object-cover blur-3xl z-0' src={event.imageUrl} alt={'Event background image'} fill sizes={'(max-width: 1280px) 100vw, 1280'} quality={50} priority />

                <div className='z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16'>
                    <Image src={event.imageUrl} alt={event.name} width={300} height={201} className='rounded-xl border-2 border-white/50 object-cover' />

                    <div className='flex flex-col'>
                        <p className='text-white/75'>
                            {
                                new Date(event.date).toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }
                        </p>
                        <FirstHeading className='mb-2 mt-1 whitespace-nowrap lg:text-5xl'>{event.name}</FirstHeading>

                        <p className='whitespace-nowrap xs:text-xl text-white/75'>Organized by <span className='italic'>{event.organizerName}</span>.</p>

                        <button className='bg-white/20 bg-blur text-lg capitalize mt-5 lg:mt-auto w-{95vw} sm:w-full py-2 rounded-md border-white/10 border-2 hover:scale-105 focus:scale-105 active:scale-[1.02] transition'>Get tickets</button>
                    </div>
                </div>
            </section>
            <div className='min-h-[75vh] text-center px-4 py-16'>

                <Section className='mb-12'>
                    <SectionHeading>About this event</SectionHeading>
                    <SectionContent>{event.description}</SectionContent>
                </Section>
                <Section>
                    <SectionHeading>Location</SectionHeading>
                    <SectionContent>{event.location}</SectionContent>
                </Section>
            </div>
        </main >
    );
}

type SectionProps = {
    children: ReactNode;
    className?: string;
}

function Section({
    children,
    className
}: SectionProps) {
    return (
        <section className={cn('', className)}>
            {children}
        </section>
    );
}

type SectionHeadingProps = {
    children: ReactNode;
    className?: string;
};

function SectionHeading({
    children,
    className
}: SectionHeadingProps) {
    return (
        <section className={cn('text-2xl mb-8', className)}>
            {children}
        </section>
    );
}


type SectionContentProps = {
    children: ReactNode;
    className?: string;
};

function SectionContent({
    children,
    className
}: SectionContentProps) {
    return (
        <section className={cn('text-lg leading-8 text-white/75 max-w-4xl mx-auto', className)}>
            {children}
        </section>
    );
}
