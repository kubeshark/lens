import React from "react";
import { Renderer, Common } from "@k8slens/extensions";
import { kubesharkPreferenceStore } from "./kubeshark-preference-store";

const {
  Component: { MenuItem, Icon },
} = Renderer;

type Pod = Renderer.K8sApi.Pod;

export function PodMenuItem(props: Renderer.Component.KubeObjectMenuProps<Pod>) {
  const { object: pod, toolbar } = props;
  if (!pod) return null;

  const podName = pod.getName();

  const openKubeshark = () => {
    Common.Util.openExternal(kubesharkPreferenceStore.url + `?q=src.name=="${podName}" or dst.name=="${podName}"`);
  };

  return (
    <MenuItem onClick={openKubeshark}>
      <Icon
        material="speaker_group"
        interactive={toolbar}
        title="Show Traffic Using Kubeshark"
      />
      <span className="title">Show traffic for {podName}</span>
    </MenuItem>
  );
}