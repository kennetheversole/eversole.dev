use yew::prelude::*;



#[function_component(Nav)]
pub fn nav() -> Html {
    html! {
     <>
         <div class="w-full h-full bg-gray-50 dark:bg-slate-900 text-black dark:text-slate-300 transition">
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

 
