import { OPEN_NEW_PAGE_EVENT } from "./common/events";
import { app } from "./common/instances";
import { Utils } from "./common/utils";

window.onload = () => {
    // build app
    app.build();

    // Add event to open page
    window.addEventListener(OPEN_NEW_PAGE_EVENT, () => Utils.buildPage(app.element));
}