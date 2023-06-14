import React from "react";
import { Renderer, Common } from "@k8slens/extensions";
import { kubesharkPreferenceStore } from "./kubeshark-preference-store";

const {
  Component: { MenuItem, Icon },
} = Renderer;

type Node = Renderer.K8sApi.Node;

export function NodeMenuItem(props: Renderer.Component.KubeObjectMenuProps<Node>) {
  const { object: node, toolbar } = props;
  if (!node) return null;

  const nodeName = node.getName();

  const openKubeshark = () => {
    Common.Util.openExternal(kubesharkPreferenceStore.url + `?q=node.name=="${nodeName}"`);
  };

  return (
    <MenuItem onClick={openKubeshark}>
      <Icon
        material="speaker_group"
        interactive={toolbar}
        title="Show Traffic Using Kubeshark"
      />
      <span className="title">Show traffic for {nodeName}</span>
    </MenuItem>
  );
}