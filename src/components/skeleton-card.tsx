import { cn } from '@/lib/utils';
import Skeleton from './skeleton';

type SkeletonCardProps = {
    className?: string;
};

export default function SkeletonCard({
    className
}: SkeletonCardProps) {
    return (
        <span className={cn('flex flex-col space-y-1', className)}>
            <Skeleton className='h-12 w-12 rounded-full' />
            <Skeleton className='h-4 w-[15.625rem]' />
            <Skeleton className='h-4 w-[12.5rem]' />
        </span>
    );
}
