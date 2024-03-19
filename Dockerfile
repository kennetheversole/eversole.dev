FROM rust:slim-bookworm

WORKDIR /app

COPY . .

RUN rustup target add wasm32-unknown-unknown

RUN cargo install trunk 

EXPOSE 8000

CMD [ "trunk", "serve" ]


