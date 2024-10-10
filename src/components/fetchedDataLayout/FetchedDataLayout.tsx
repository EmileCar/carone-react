import React from "react";
import LoadingSpinner from "../loading/LoadingSpinner";
import LoadingText from "../loading/LoadingText";

const FetchedDataLayout = ({isPending, error, children} : {isPending: boolean, error: string | null, children: React.ReactNode}) => {

    return (
        <>
            {isPending
                ?
                    <LoadingSpinner text={<LoadingText />}/>
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