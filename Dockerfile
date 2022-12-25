FROM node:16

ENV NODE_ENV development

RUN npm install -g turbo@1.1.5

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000-8000

CMD turbo run dev --parallel
