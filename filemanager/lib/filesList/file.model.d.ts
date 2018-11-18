import { IOuterFile } from './interface/IOuterFile';
import { IFileModel } from './interface/IFileModel';
import { ISelectFile } from './interface/ISelectFile';
export declare class FileModel implements IFileModel {
    static smallIconsFolder: string;
    static bigIconsFolder: string;
    private _orgData;
    private _name;
    private _iconsFolder;
    selected: boolean;
    name: string;
    readonly thumbnailUrl: string;
    readonly url: string;
    constructor(data: IOuterFile);
    fromJSON(data: IOuterFile): void;
    toJSON(): IOuterFile;
    getId(): string | number;
    getHeight(): number;
    getFileExt(): string;
    getMime(): string;
    getWidth(): number;
    isImage(): boolean;
    getSelectData(): ISelectFile;
}
