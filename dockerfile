FROM denoland/deno:1.30.3
WORKDIR /workspace

RUN apt-get update && apt-get install -y git