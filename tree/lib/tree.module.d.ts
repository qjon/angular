import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { NodeDispatcherService } from './service/nodesDispatcher.service';
import { TranslateService } from '@ngx-translate/core';
export declare const NODE_DISPATCHER_TOKEN: InjectionToken<NodeDispatcherService>;
export declare class TreeModule {
    private translate;
    static forRoot(): ModuleWithProviders;
    static forFeature(): ModuleWithProviders;
    constructor(translate: TranslateService);
    private setTranslationForPL;
    private setTranslationForEN;
}
