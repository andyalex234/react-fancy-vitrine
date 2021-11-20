import React from 'react';
declare type LensType = {
    image: string | undefined;
    mouseX: number;
    mouseY: number;
    setRef: any;
    visible: boolean;
    imageMainSize: {
        width: number;
        height: number;
    };
};
declare const Lens: React.FC<LensType>;
export default Lens;
