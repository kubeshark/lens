import React from "react";
import { Renderer } from "@k8slens/extensions";
import { NamespaceMenuItem } from "./src/namespace-menu-item";
import { NodeMenuItem } from "./src/node-menu-item";
import { PodMenuItem } from "./src/pod-menu-item";
import { ServiceMenuItem } from "./src/service-menu-item";
import { kubesharkPreferenceStore } from "./src/kubeshark-preference-store"
import { KubesharkPreferenceHint, KubesharkPreferenceInput } from "./src/kubeshark-preference"


type Namespace = Renderer.K8sApi.Namespace;
type Node = Renderer.K8sApi.Node;
type Pod = Renderer.K8sApi.Pod;
type Service = Renderer.K8sApi.Service;
/**
 * 
 * RendererExtension which extends LensRendererExtension runs in Lens' 'renderer' process (NOT 'main' process)
 * main vs renderer <https://www.electronjs.org/docs/tutorial/quick-start#main-and-renderer-processes>
 * 
 * LensRendererExtension is the interface to Lens' renderer process. Its api allows you to access, configure, 
 * and customize Lens data add custom Lens UI elements, and generally run custom code in Lens' renderer process.
 *
 * To see console statements in 'renderer' process, go to the console tab in DevTools in Lens
 * View > Toggle Developer Tools > Console.
 * 
 */
export default class KubesharkRenderer extends Renderer.LensExtension {
  /**
   * onActivate is called when your extension has been successfully enabled.
   */
  async onActivate() {
    kubesharkPreferenceStore.loadExtension(this);
    console.log("activated");
  }
  kubeObjectMenuItems = [
    {
      kind: "Namespace",
      apiVersions: ["v1"],
      
      components: {
        MenuItem: (props: Renderer.Component.KubeObjectMenuProps<Namespace>) => (
          <NamespaceMenuItem {...props} />
        ),
      },
    },
    {
      kind: "Node",
      apiVersions: ["v1"],
      
      components: {
        MenuItem: (props: Renderer.Component.KubeObjectMenuProps<Node>) => (
          <NodeMenuItem {...props} />
        ),
      },
    },
    {
      kind: "Pod",
      apiVersions: ["v1"],
      
      components: {
        MenuItem: (props: Renderer.Component.KubeObjectMenuProps<Pod>) => (
          <PodMenuItem {...props} />
        ),
      },
    },
    {
      kind: "Service",
      apiVersions: ["v1"],
      
      components: {
        MenuItem: (props: Renderer.Component.KubeObjectMenuProps<Service>) => (
          <ServiceMenuItem {...props} />
        ),
      },
    },
  ];
  appPreferences = [
    {
      title: "Kubeshark Preferences",
      components: {
        Hint: (): JSX.Element => <KubesharkPreferenceHint/>,
        Input: (): JSX.Element => <KubesharkPreferenceInput/>
      }
    }
  ];
}