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
    /** The title of the popup. */
    title?: string;
    /** The callback function to call when the popup closes */
    onClose?: () => void;
    /** If the popup is in a pending state */
    pending?: boolean;
    /** A global error message to display */
    globalError?: string;
    /** A custom class name to apply to the popup */
    className?: string;
    /** A custom style object to apply to the popup */
    style?: React.CSSProperties;
    /** The children components */
    children: React.ReactNode;
}

/**
 * A popup component that can be customized with different props.
 * When this component is used, it needs to be registered by the PopupContext.
 *
 * @param {PopupProps} props the props for the component
 * @returns {React.ReactElement} the popup component
 */
const Popup: React.FC<PopupProps> = ({
    title,
    onClose,
    pending,
    globalError,
    className,
    style,
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
        <div className="carone-overlay" onClick={closeHandler}>
            <div className={classNames("carone-popup", className)} onClick={(e) => e.stopPropagation()} style={style}>
                <span className="close" onClick={closeHandler}>
                    &times;
                </span>
                {pending && <LoadingText />}
                {title && <SectionTitle title={title} />}
                {globalError && <div className="error" style={{ marginBottom: "1rem" }}>{globalError}</div>}
                {children ? children : <p>Lege popup. Hier heb je niks te zoeken...</p>}
            </div>
        </div>
    );
};

export default Popup;