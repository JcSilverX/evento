'use client';
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm() {
    const [searchText, setSearchText] = useState('');
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!searchText) return;

        router.push(`/events/${searchText.toLowerCase()}`);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearchText = event.target.value;

        setSearchText(newSearchText);
    };

    return (
        <form onSubmit={handleSubmit} action='' className='w-full sm:w-[36.25rem] px-4'>
            <input
                value={searchText}
                onChange={handleChange}
                className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/[50] transition focus:ring-2 focus:bg-white/10'
                placeholder={'Search events in any city...'}
                spellCheck={false}
            />
        </form>
    );
}
