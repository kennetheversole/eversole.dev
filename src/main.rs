use yew::prelude::*;

#[function_component]
fn App() -> Html {
    html! {
     <>
         <div>
            <h1>{"Hello, Welcome!"}</h1>
            <p>{"My name is Kenneth and this is my little part of the internet"}</p>
         </div>
     </>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}


