import { Observable } from 'rxjs';
export interface IFileDataProperties {
    id: string | number;
    folderId: string;
    name: string;
    size: number;
    data: string;
    type: string;
    width?: number;
    height?: number;
    selected?: boolean;
}
export interface IImageDimensions {
    width: number;
    height: number;
}
export declare class ImageDataConverter {
    getProperties(file: File, folderId: string): Observable<IFileDataProperties>;
    /**
     * Create observable which return image as base64 data
     */
    private getBase64FromFile;
    /**
     * Create observable which return dimensions of the image
     */
    private getImageDimensions;
}
