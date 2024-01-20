import { cn } from "@/lib/utils";

type SkeletonProps = {
    className?: string;
};

export default function Skeleton({
    className
}: SkeletonProps) {
    return (
        <span className={cn('h-4 w-[34.375rem] rounded-md bg-white/5', className)} />
    );
}
