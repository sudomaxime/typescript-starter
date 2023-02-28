# WARNING!
# This Dockerfile is not meant to become a production artefact
# it will not support SSL certificates, this dockerfile is meant
# to be used for development or staging where SSL is not required.

FROM nginx:1.21.3-alpine as base
LABEL maintainer=maxime@agencesudo.ca

WORKDIR /etc/nginx/conf.d/

EXPOSE 80


# DEVELOPMENT TARGET ----------------------------------------
# Dev taget assumes that you are using volumes.
FROM base as dev

COPY ./dev .

CMD ["nginx", "-g", "daemon off;"]


# PRODUCTION TARGET -----------------------------------------
FROM base as prod

COPY ./prod .

CMD ["nginx", "-g", "daemon off;"]