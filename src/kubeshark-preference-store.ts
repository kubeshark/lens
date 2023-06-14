import { Common } from "@k8slens/extensions";
import { observable, makeObservable, toJS } from "mobx";

export type KubesharkPreferenceModel = {
    url: string;
}

export class KubesharkPreferenceStore extends Common.Store.ExtensionStore<KubesharkPreferenceModel>{
    @observable url = "http://localhost:8899/";

    constructor() {
      super({
        configName: "kubeshark-preference-store",
        defaults: {
          url: "http://localhost:8899/"
        }
      });
      makeObservable(this);
    }

    fromStore(data: KubesharkPreferenceModel): void {
      this.url = data.url;
    }

    toJSON(): KubesharkPreferenceModel {
      const value: KubesharkPreferenceModel  = {
        url: this.url,
      };
  
      return toJS(value);
    }
}

export const kubesharkPreferenceStore = new KubesharkPreferenceStore();