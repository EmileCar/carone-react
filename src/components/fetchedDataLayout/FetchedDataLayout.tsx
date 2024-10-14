import React from "react";
import LoadingSpinner, { LoadingSpinnerProps } from "../loading/LoadingSpinner";
import LoadingText from "../loading/LoadingText";

interface FetchedDataLayoutProps {
    isPending: boolean;
    error: string | null;
    children: React.ReactNode;
    loadingSpinnerProps: LoadingSpinnerProps;
}

const FetchedDataLayout: React.FC<FetchedDataLayoutProps> = ({
    isPending,
    error,
    loadingSpinnerProps,
    children
}) => {

    return (
        <>
            {isPending
                ?
                    <LoadingSpinner {...loadingSpinnerProps} text={<LoadingText />} />
                :
                <>
                    {(error !== null && typeof error === 'string') &&
                        <div className="error">{error}</div>
                    }
                    {children}
                </>
            }
        </>
    );
}

export default FetchedDataLayout;