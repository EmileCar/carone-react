import React from 'react';
import Button from '../button/Button';
import { HoverEffect } from '../../utils/hoverEffect';

/**
* The props for the Paginator component.
*/
interface PaginatorProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

/**
 * A paginator component that can be used to navigate through pages.
*/
const Paginator: React.FC<PaginatorProps> = ({ totalPages, currentPage, onPageChange }) => {
    const handlePrev = () => {
        if (currentPage > 0) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="paginator">
            {currentPage > 0 && (
                <Button
                    onClick={handlePrev}
                    hoverEffect={HoverEffect.Darken}
                    text='<'
                    aria-label="Previous Page"
                />
            )}
            <span>{`Pagina ${currentPage + 1} van de ${totalPages}`}</span>
            {currentPage < totalPages - 1 && (
                <Button
                    onClick={handleNext}
                    hoverEffect={HoverEffect.Darken}
                    text='>'
                    aria-label="Next Page"
                />
            )}
        </div>
    );
};

export default Paginator;