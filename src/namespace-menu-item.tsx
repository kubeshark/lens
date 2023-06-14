import React from "react";
import { Renderer, Common } from "@k8slens/extensions";
import { kubesharkPreferenceStore } from "./kubeshark-preference-store";

const {
  Component: { MenuItem, Icon },
} = Renderer;

type Namespace = Renderer.K8sApi.Namespace;

export function NamespaceMenuItem(props: Renderer.Component.KubeObjectMenuProps<Namespace>) {
  const { object: namespace, toolbar } = props;
  if (!namespace) return null;

  const namespaceName = namespace.getName();

  const openKubeshark = () => {
    Common.Util.openExternal(kubesharkPreferenceStore.url + `?q=src.namespace=="${namespaceName}" or dst.namespace=="${namespaceName}"`);
  };

  return (
    <MenuItem onClick={openKubeshark}>
      <Icon
        material="speaker_group"
        interactive={toolbar}
        title="Show Traffic Using Kubeshark"
      />
      <span className="title">Show traffic for {namespaceName}</span>
    </MenuItem>
  );
}