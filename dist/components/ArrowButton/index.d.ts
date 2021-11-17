import React from 'react';
declare type ArrowButtonProps = {
    buttonDirection: string | undefined;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    buttonPosition: string | undefined;
};
declare const ArrowButton: React.FC<ArrowButtonProps>;
export default ArrowButton;
