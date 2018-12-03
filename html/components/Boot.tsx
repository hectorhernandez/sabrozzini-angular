import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {routes} from "./routes";

// tslint:disable-next-line:typedef
function renderApp() {
    // this code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    // tslint:disable-next-line:typedef
    const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;
    ReactDOM.render(
            <BrowserRouter children={ routes } basename={ baseUrl } />,
        document.getElementById("root")
    );
}

renderApp();

// // Allow Hot Module Replacement
// if (module.hot) {
//     module.hot.accept('./routes', () => {
//         routes = require<typeof RoutesModule>('./routes').routes;
//         renderApp();
//     });
// }
