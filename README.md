## Kubeshark K8sLens Extension
[K8s Lens](https://k8slens.dev/), sometimes referred to as the [K8s](https://kubernetes.io/) IDE, allows users to connect and manage multiple K8s clusters on Mac, Windows, and Linux platforms. It is an intuitive graphical interface that allows users to deploy and manage clusters directly from the console.

Kubeshark's Lens extension enable K8s Lens users to view real-time traffic of clusters, namespaces, nodes, pods or services, by simply clicking a new menu item added by the extension.

## Prerequisites

Before using this extension, ensure the following prerequisites are met:

1. Kubeshark is installed. Read more about Kubeshark here: https://docs.kubeshark.co/

## Installing

1. Open Lens and navigate to the Extensions page (or press Command + Shift + E on macOS).
2. Enter the following URL into the Install Extension box: `@kubeshark/lens`
3. Click the Install button.

## Preferences

In the preference page, you can enter the Kubeshark URL. The default URL is `http://localhost:8899/`.

![Enter Kubeshark URL](/assets/preferences.png)

## How to View

Once this extension is loaded, a new menu item will appear for each specific Kubernetes component. This menu item indicates that you can view real-time traffic for the corresponding component. By clicking on the menu item, Kubeshark will open and present the traffic associated with the selected K8s component.

For example, if you want to view traffic in a particular namespace, follow these steps:

1. Find the namespace in K8sLens.
2. Locate and click on the menu item that indicates viewing traffic for that namespace.

![Right click to view traffic](/assets/menu-item.png)

Once you press the menu item, Kubeshark's dashboard will open automatically configured to filter traffic related only to the selected Kubernetes component. 

![View real-time traffic](/assets/kubeshark.png)

## Limitations

Kubeshark will only display traffic under the following circumstances:
- The component is active and either receiving or generating traffic.
- Kubeshark successfully captures and dissects the traffic (there could be various reasons why this may not happen).

## What is Kubeshark

Kubeshark is an API Traffic Analyzer for Kubernetes that provides real-time, protocol-level visibility into Kubernetes' internal network. It captures, dissects, and monitors all traffic and payloads going in, out, and across containers, pods, nodes, and clusters. Think of it as TCPDump and Wireshark reinvented for Kubernetes. You can read more about it [here](https://kubeshark.co/).

## And Now In Video

[![Install Kubeshark-Lens Extension](https://img.youtube.com/vi/corWPtp9hrI/0.jpg)](https://www.youtube.com/watch?v=corWPtp9hrI)

