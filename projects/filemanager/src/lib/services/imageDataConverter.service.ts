import {UUID} from 'angular2-uuid';
import {Injectable} from '@angular/core';
import {concatMap, map} from 'rxjs/operators';
import {fromEvent, Observable, of} from 'rxjs';

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

@Injectable()
export class ImageDataConverter {
  public getProperties(file: File, folderId: string): Observable<IFileDataProperties> {
    const properties: IFileDataProperties = {
      id: UUID.UUID(),
      folderId: folderId,
      name: file.name,
      size: file.size,
      type: file.type,
      data: ''
    };

    const reader = this.getBase64FromFile(file);

    return reader
      .pipe(
        concatMap((data: string) => {
          properties.data = data;

          if (properties.type.indexOf('image') === 0) {
            return this.getImageDimensions(data);
          } else {
            return of({width: 0, height: 0});
          }
        }),
        map((dimensions: IImageDimensions) => {
          properties.width = dimensions.width;
          properties.height = dimensions.height;

          return properties;
        })
      );
  }

  /**
   * Create observable which return image as base64 data
   */
  private getBase64FromFile(file: File): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(file);


    return fromEvent(reader, 'load')
      .pipe(
        map(() => {
          return reader.result.toString();
        })
      );
  }

  /**
   * Create observable which return dimensions of the image
   */
  private getImageDimensions(data: string): Observable<IImageDimensions> {
    const image = new Image();
    image.src = data;
    image.style.display = 'none';

    const loadImage = fromEvent(image, 'load')
      .pipe(
        map(() => {
          return {
            width: image.naturalWidth,
            height: image.naturalHeight
          };
        })
      );

    document.body.appendChild(image);

    return loadImage;
  }
}
