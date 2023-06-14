## Kubeshark K8sLens Extension

This extension enables you to use K8sLens and Kubeshark to view real-time traffic for various Kubernetes components, including:

- Namespace
- Nodes
- Pod
- Service

## How to View

Once this extension is loaded, a new menu item will appear for each specific Kubernetes component. This menu item indicates that you can view real-time traffic for the corresponding component. By clicking on the menu item, Kubeshark will open and present the traffic associated with the selected K8s component.

For example, if you want to view traffic in a particular namespace, follow these steps:

1. Find the namespace in K8sLens.
2. Locate and click on the menu item that indicates viewing traffic for that namespace.

![Right click to view traffic](/assets/menu-item.png)

## How to Install the Extension

1. Open Lens and navigate to the Extensions page (or press Command + Shift + E on macOS).
2. Enter the following URL into the Install Extension box: `@kubeshark/lens`
3. Click the Install button.

## Prerequisites

Before using this extension, ensure the following prerequisites are met:

1. Kubeshark is installed. Read more about Kubeshark here: https://docs.kubeshark.co/
2. The extension is installed and activated.

## Preferences

In the preference page, you can enter the Kubeshark URL. The default URL is `http://localhost:8899/`.

## Limitations

Please note the following limitations of Kubeshark:

Kubeshark will only display traffic under the following circumstances:
- The component is active and either receiving or generating traffic.
- Kubeshark successfully captures and dissects the traffic (there could be various reasons why this may not happen).

## What is Kubeshark

Kubeshark is an API Traffic Analyzer for Kubernetes that provides real-time, protocol-level visibility into Kubernetes' internal network. It captures, dissects, and monitors all traffic and payloads going in, out, and across containers, pods, nodes, and clusters. Think of it as TCPDump and Wireshark reinvented for Kubernetes. You can read more about it [here](https://kubeshark.co/).




