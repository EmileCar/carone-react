import React from "react";
import "../../styles/Popup.css";
import LoadingText from "../loading/LoadingText";
import { usePopupContext } from "../../contexts/PopupContext";
import SectionTitle from "../page/section/SectionTitle";
import { classNames } from "../../utils/classNameUtil";
import { useConfig } from "../../contexts/CaroneContext";

/**
 * The props for the Popup component.
 */
export interface PopupProps {
    title?: string;
    className?: string;
    onClose?: () => void;
    isPending?: boolean;
    globalError?: string;
    children: React.ReactNode;
}

/**
 * A popup component that can be customized with different props.
 * When this component is used, it needs to be registered by the PopupContext.
*/
const Popup: React.FC<PopupProps> = ({
    title,
    className,
    onClose,
    isPending,
    globalError,
    children,
}) => {
    useConfig();
    const { closePopup } = usePopupContext();

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
        closePopup();
    };

    return (
        <div className="overlay" onClick={closeHandler}>
            <div className={classNames("carone-popup", className)} onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={closeHandler}>
                    &times;
                </span>
                {isPending && <LoadingText />}
                {title && <SectionTitle title={title} />}
                {globalError && <div className="error" style={{ marginBottom: "1rem" }}>{globalError}</div>}
                {children ? children : <p>Lege popup. Hier heb je niks te zoeken...</p>}
            </div>
        </div>
    );
};

export default Popup;