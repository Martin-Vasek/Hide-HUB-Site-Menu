import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HideHubMenuApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HideHubMenuApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHideHubMenuApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HideHubMenuApplicationCustomizer
  extends BaseApplicationCustomizer<IHideHubMenuApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    var hubMenu = document.querySelector('.ms-HubNav');
    hubMenu.setAttribute("style", "display: none;");

    console.log("HUB site menu hidden");

    return Promise.resolve();
  }
}
