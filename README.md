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

2. Enter https://registry.npmjs.org/kubeshark-lens/-/kubeshark-lens-0.0.1.tgz into the Install Extension box

3. Click on the Install button.

## Pre-requisites

- Kubeshark installed. Read more here: https://docs.kubeshark.co/
- Extension installed and activated

## Preferences

Kubeshark URL should be entered in the preference page. The default is: http://localhost:8899/. 

## Limitations

Please keep in mind that Kubeshark will show traffic under the following circumstances:
1. Component is active and is either receiving or generating traffic
2. Kubeshark was able to capture and dissect the traffic (there are many reason why that might have not happened)

## What is Kubeshark


Cloud

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.
