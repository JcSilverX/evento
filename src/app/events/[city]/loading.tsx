import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
    return (
        <div className='animate-pulse flex flex-wrap justify-center max-w-[68.75rem] mx-auto px-[1.25rem] py-24 gap-20'>
            {
                Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))
            }
        </div>
    );
}
