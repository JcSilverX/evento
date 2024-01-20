import { cn } from '@/lib/utils';
import { ReactNode } from 'react'

type FirstHeadingProps = {
    children: ReactNode;
    className?: string;
};

export default function FirstHeading({
    children,
    className
}: FirstHeadingProps) {
    return (
        <h1 className={cn('text-2xl sm:text-3xl lg:text-6xl font-bold tracking-tight', className)}>{children}</h1>
    );
}
