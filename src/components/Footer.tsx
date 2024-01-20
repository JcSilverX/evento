import Link from "next/link";

const routes = [
    {
        path: '/terms-conditions',
        name: 'Terms & Conditions'
    },
    {
        path: '/privacy-policy',
        name: 'Privacy Policy'
    },
] as const;

export default function Footer() {
    return (
        <footer className='mt-auto min-h-[4.0625rem] px-4 grid grid-flow-col place-items-center border-t border-white/10 text-xs text-white/25'>
            <small className='xs:mr-auto text-xs'>
                &copy; {new Date().getFullYear()} <Link href={'https://www.jcsilverx.com/'} target="_blank">JcSilverX</Link>. All rights reserved.
            </small>

            <nav className='ml-auto hidden xs:block'>
                <ul className='flex items-center gap-x-4 sm:gap-x-8'>
                    {
                        routes.map((route) => (
                            <li key={route.path}>
                                <Link href={route.path} target='_blank'>{route.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </footer>
    );
}
