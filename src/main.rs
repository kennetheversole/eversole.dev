mod components;


use yew::prelude::*;
use yew_router::prelude::*;
use yew_router::Routable;

use components::{ 
    nav::Nav,
    aboutme::AboutMe
};


#[derive(Clone, Routable, PartialEq)]
pub enum Route {
    #[at("/")]
    Home,
    #[at("/aboutme")]
    AboutMe,
    #[not_found]
    #[at("/404")]
    NotFound,

}

fn switch(route: Route) -> Html {
    match route {
        Route::Home => html! { <Nav/> },
        Route::AboutMe => html! { <AboutMe/> },
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>

    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}


