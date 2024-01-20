import Link from 'next/link';
import { ReactNode } from 'react'

type PaginationControlProps = {
    children: ReactNode;
    pathName: string;
};

export default function PaginationControl({
    children,
    pathName
}: PaginationControlProps) {
    return (
        <Link href={pathName} className='text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-xs'>
            {children}
        </Link>
    );
}
