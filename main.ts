import { Main, Common  } from "@k8slens/extensions";
import { KubesharkPreferenceStore } from "./src/kubeshark-preference-store";

/**
 * Main.LensExtension api allows you to access, configure, and customize Lens data add
 * custom application menu items, and generally run custom code in Lens'
 * main process.
 * 
 * See more details: <https://docs.k8slens.dev/>
 */
export default class KubesharkMain extends Main.LensExtension {
  appMenus = [
    {
      parentId: "help",
      label: "Kubeshark Docs",
      click() {
        Common.Util.openExternal("https://docs.kubeshark.co/");
      }
    }
  ]
  /**
   * onActivate is called when your extension has been successfully enabled.
   */
  onActivate() {
    // print hello world when extension is activated
    // !! Note that the console statements in MainExtension is NOT visible in the 
    // !! DevTools console in Lens
    // To see console statements, start the Lens app from a Terminal
    const kubesharkPreferenceStore = new KubesharkPreferenceStore();
    kubesharkPreferenceStore.loadExtension(this);
    console.log("activated");
  }
}