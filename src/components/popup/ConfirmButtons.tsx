import React from "react";
import Button from "../button/Button";

interface ConfirmButtonsProps {
    onConfirm: () => void;
    onCancel: () => void;
    positive?: boolean;
}

const ConfirmButtons: React.FC<ConfirmButtonsProps> = ({ onConfirm, onCancel, positive }) => (
    <div className="carone-confirm-buttons">
        <Button text="Annuleren" onClick={onCancel} className="carone-confirm-button" />
        <Button text="Verwijderen" onClick={onConfirm} className={`carone-confirm-button ${positive ? 'positive' : 'negative'}`} />
    </div>
);

export default ConfirmButtons;
