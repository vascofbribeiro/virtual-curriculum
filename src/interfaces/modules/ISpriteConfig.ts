export interface ISpriteConfig {
    src: string;
    animations?: {[key: string]: Array<Array<number>> };
    width: number;
    height: number;
    imageWidth?: number;
    imageHeight?: number;
}