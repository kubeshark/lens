import React from "react";
import { Renderer, Common } from "@k8slens/extensions";
import { kubesharkPreferenceStore } from "./kubeshark-preference-store";

const {
  Component: { MenuItem, Icon },
} = Renderer;

type Service = Renderer.K8sApi.Service;

export function ServiceMenuItem(props: Renderer.Component.KubeObjectMenuProps<Service>) {
  const { object: service, toolbar } = props;
  if (!service) return null;

  const serviceName = service.getName();

  const openKubeshark = () => {
    Common.Util.openExternal(kubesharkPreferenceStore.url + `?q=src.name=="${serviceName}" or dst.name=="${serviceName}"`);
  };

  return (
    <MenuItem onClick={openKubeshark}>
      <Icon
        material="speaker_group"
        interactive={toolbar}
        title="Show Traffic Using Kubeshark"
      />
      <span className="title">Show traffic for {serviceName}</span>
    </MenuItem>
  );
}