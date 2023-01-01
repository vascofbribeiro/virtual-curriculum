export interface ISpriteConfig {
    object: {
        src: string;
        animations?: object;
        width: number;
        height: number;
        imageWidth?: number;
        imageHeight?: number;
    },
    shadow?: {
        src: string;
        animations?: object;
        width: number;
        height: number;
        imageWidth: number;
        imageHeight: number;
    }
}