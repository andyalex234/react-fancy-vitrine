import React from 'react';
declare type ArrowButtonProps = {
    buttonDirection: string | undefined;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonPosition: string | undefined;
    buttonBgColor?: {
        default?: string;
        hover?: string;
    };
};
/**
 *
 * @param handleClick: Click event
 * @param buttonDirection: left | right
 * @param buttonPosition: default | default-outer | center | center-outer
 * @param buttonBgColor: default: backgroundColor | backgroundColor when hover
 * @returns Component
 */
declare const ArrowButton: React.FC<ArrowButtonProps>;
export default ArrowButton;
