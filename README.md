# Kubeshark K8sLens Extension 

This extension allows you to use K8sLens and Kubeshark to view real-time traffic for the following Kubernetes components:
- Namespace
- Nodes
- Pod
- Service 

## How to View

When this extension is loaded, a new menu item appears for the specific Kubernetes component. The menu item indicates that you can view real-time traffic for the specific component. Pressing the menu item will open Kubeshark and will present the traffic associated with the K8s component.

Foe example, if I'd like to view traffic in a certain namespace, I should follow these steps:
1. Find the namespace in the K8s Lens 
2. Find and click the menu item that indicates viewing traffic for that namespace

![Right click to view traffic](/assets/menu-item.png)

## How to install the extension
1. Open Lens and navigate to the Extensions page (or press Command + Shift+E on macOS).

2. Enter https://registry.npmjs.org/lens-extension/-/lens-extension-0.0.1.tgz into the Install Extension box

3. Click on the Install button.

## Prerequisites

- Kubeshark installed. Read more here: https://docs.kubeshark.co/
- Extension installed and activated

## Preferences

Kubeshark URL should be entered in the preference page. The default is: http://localhost:8899/. 

## Limitations

Please keep in mind that Kubeshark will show traffic only under the following circumstances:
1. Component is active and is either receiving or generating traffic
2. Kubeshark was able to capture and dissect the traffic (there are many reason why that might have not happened)

## What is Kubeshark
Kubeshark is an API Traffic Analyzer for Kubernetes providing real-time, protocol-level visibility into Kubernetes’ internal network, capturing, dissecting and monitoring all traffic and payloads going in, out and across containers, pods, nodes and clusters. Think TCPDump and Wireshark re-invented for Kubernetes.