import React, { useState } from 'react';
import { useWindowResize } from '../../hooks/useWindowResize';
import { classNames } from '../../utils/classNameUtil';
import '../../styles/DividedContent.css';

interface DividedContentProps {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
    wrapAt?: number;
}

const DividedContent: React.FC<DividedContentProps> = ({
    leftContent,
    rightContent,
    wrapAt = 0
}) => {
    const [wrapped, setWrapped] = useState<boolean>(false);

    useWindowResize(() => {
        if(wrapAt > 0) {
            setWrapped(window.innerWidth <= wrapAt);
        }
    });

    return (
        <div className={classNames('carone-divided-content', wrapped && 'carone-divided-content__wrapped')}>
            <div className="carone-divided-content__left">
                {leftContent}
            </div>
            <div className="carone-divided-content__right">
                {rightContent}
            </div>
        </div>
    );
};

export default DividedContent;