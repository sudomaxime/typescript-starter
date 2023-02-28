## Stage 1 (production base)
# This gets our prod dependencies installed and out of the way
FROM node:18.14.2-slim as base

EXPOSE 4000

ENV NODE_ENV=production

WORKDIR /node

COPY package.json package-lock*.json ./

RUN npm ci \
  && npm cache clean --force

## Stage 2 (development) -----------------------------------------------

FROM base as dev

ENV NODE_ENV=development

ENV PATH=/node/node_modules/.bin:$PATH

RUN npm install --only=development

WORKDIR /node/app

CMD ["nodemon", "./bin/www"]

## Stage 3 (copy in source for prod) -------------------------------------
FROM base as prod

WORKDIR /node/app

COPY . .

RUN ../node_modules/.bin/tsc --project /node/app/tsconfig.json

# Example if you need email templates
# COPY ./src/templates ./dist/templates

CMD ["node", "./dist/index.js"]