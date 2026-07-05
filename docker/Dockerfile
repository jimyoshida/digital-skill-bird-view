# Base OS is Debian 12
FROM node:22

RUN apt-get update && apt-get install -y --no-install-recommends \
    make sed gawk perl libyaml-tiny-perl pandoc \
    graphviz \
    ruby ruby-asciidoctor-pdf \
    && rm -rf /var/lib/apt/lists/*

CMD ["sh"]
