import React from 'react';
declare type LensType = {
    image: string | undefined;
    mouseX: number;
    mouseY: number;
    setRef: any;
};
declare const Lens: React.FC<LensType>;
export default Lens;
