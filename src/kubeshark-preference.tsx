import { Renderer } from "@k8slens/extensions";
import { observer } from "mobx-react";
import React from "react";
import { kubesharkPreferenceStore } from "./kubeshark-preference-store";

@observer
export class KubesharkPreferenceInput extends React.Component {

  render() {
    return (
      <>
        <Renderer.Component.Input
          value={kubesharkPreferenceStore.url}
          theme="round-black"
          placeholder="Enter Kubeshark's URL. It can be this one => http://localhost:8899/"
          onChange={v => { kubesharkPreferenceStore.url = v; }}
        />
      </>
    );
  }
}

export class KubesharkPreferenceHint extends React.Component {
  render() {
    return (
      <span></span>
    );
  }
}
