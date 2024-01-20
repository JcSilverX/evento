import FirstHeading from "@/components/FirstHeading";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

const routes = [
    {
        name: 'Austin',
        path: '/events/austin'
    },
    {
        name: 'Seattle',
        path: '/events/seattle'
    },
] as const;

export default function Home() {
    return (
        <main className='flex flex-col items-center pt-36'>
            <FirstHeading>Find events around you</FirstHeading>

            <p className='mb-12 mt-7 text-1xl sm:text-2xl lg:text-3xl text-center opacity-75 px-4'>Browse more than <span className='font-bold italic underline text-accent'>10,000 events</span> around you</p>

            <SearchForm />

            <section className='mt-4 flex gap-x-4 text-sm text-white/50'>
                <p>Popular:</p>

                <nav>
                    <ul className='flex items-center gap-x-2'>
                        {
                            routes.map((route) => (
                                <li key={route.path} className='font-semibold'>
                                    <Link href={route.path}>{route.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </section>
        </main>
    );
}
