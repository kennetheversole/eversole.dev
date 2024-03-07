use yew::prelude::*;

#[function_component]
fn App() -> Html {
    html! {
     <>
         <div>
            <h1>{"Hello, Welcome!"}</h1>
            <p>{"My name is Kenneth and this is my little part of the internet"}</p>
            <h3>{"Contact me!"}</h3>
            <p>
                <ul>                 
                    <li><a href="mailto:keversole@eversole.dev">{"Kenneth@eversole.dev"}</a></li>
                    <li><a href="https://github.com/kennetheversole">{"Github"}</a></li>
                </ul>
            </p>
         </div>
     </>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}


