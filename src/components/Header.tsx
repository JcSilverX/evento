'use client';

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Underline from "./Underline";
import { cn } from "@/lib/utils";

const routes = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/events/all',
        name: 'All Events'
    },
] as const;

export default function Header() {
    const activePathname = usePathname();

    return (
        <header className='flex items-center px-4 min-h-[4.0625rem] border-b border-white/10'>
            <Logo />

            <nav className='ml-auto'>
                <ul className='flex gap-4 text-sm'>
                    {
                        routes.map((route) => (
                            <li key={route.path} className={cn('whitespace-nowrap relative hover:text-white transition', {
                                'text-white': activePathname === route.path,
                                'text-white/50': activePathname !== route.path
                            })}>
                                <Link href={route.path}>{route.name}</Link>

                                {
                                    (activePathname === route.path) && <Underline />
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}
