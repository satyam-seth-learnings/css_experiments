import App from "./app/app";
import Page from "./layout/page";

window.onload = () => {
    const app = new App('demo');
    app.build();

    (new Page('hello')).build(app.element);
}