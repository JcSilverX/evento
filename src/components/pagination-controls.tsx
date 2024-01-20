import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react'
import PaginationControl from './pagination-control';

type PaginationControlsProps = {
    previousPath: string;
    nextPath: string;
};

export default function PaginationControls({
    previousPath,
    nextPath
}: PaginationControlsProps) {
    return (
        <section className='w-full flex justify-between items-center'>
            {
                previousPath ?
                    <PaginationControl pathName={previousPath}>
                        <ArrowLeftIcon />
                        Previous
                    </PaginationControl> : <div />
            }
            {
                nextPath &&
                <PaginationControl pathName={nextPath}>
                    Next
                    <ArrowRightIcon />
                </PaginationControl>
            }
        </section>
    );
}
