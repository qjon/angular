import {BehaviorSubject, Observable} from 'rxjs';
import {Action} from '@ngrx/store';

export class MockStore<T> extends BehaviorSubject<T> {
  constructor(private _initialState: T) {
    super(_initialState);
  }

  public dispatch = (action: Action): void => {
  }

  public select = <T, R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return Array.prototype.map.call(this, pathOrMapFn);
  }

  public nextMock(mock: T) {
    this.next(mock);
  }
}
