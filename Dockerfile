FROM rust:slim-bookworm


WORKDIR /app


COPY . .
# Add wasm target
RUN rustup target add wasm32-unknown-unknown


# Install trunk
RUN cargo install trunk 

EXPOSE 8080

CMD [ "trunk", "serve" ]


