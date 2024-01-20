import EventsList from "@/components/EventsList";
import FirstHeading from "@/components/FirstHeading";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
    params: {
        city: string;
    };
};

type EventsPageProps = Props & {
    searchParams: {
        page: string;
    };
};


export function generateMetadata({
    params
}: Props): Metadata {
    const { city } = params;

    return {
        title: (city === 'all') ? 'All Events' : `Events in ${capitalize(city)}`,
    };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
    params,
    searchParams
}: EventsPageProps) {
    const { city } = params;
    const parsedPage = pageNumberSchema.safeParse(searchParams.page);

    if (!parsedPage.success) {
        throw new Error('Invalid page number');
    }

    return (
        <main className='flex flex-col items-center py-24 px-[1.25rem] min-h-[110vh] '>
            <FirstHeading className='mb-28'>
                {
                    (city === 'all' && 'All Events')
                }
                {
                    (city !== 'all' &&
                        `Events in ${capitalize(city)}`)
                }
            </FirstHeading>

            <Suspense key={city + parsedPage.data} fallback={<Loading />}>
                <EventsList city={city} page={parsedPage.data} />
            </Suspense>
        </main>
    );
}
