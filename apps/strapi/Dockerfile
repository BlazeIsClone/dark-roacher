FROM node:16-alpine as build

RUN apt-get update \
	&& apt-get install libvips-dev -y \
	&& rm -rf /var/cache/apk/* > /dev/null 2>&1

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/

COPY ./package*.json .

ENV PATH /opt/node_modules/.bin:$PATH

RUN npm install --production

WORKDIR /opt/app

COPY . .

RUN npm run build

FROM node:16.17.0

RUN apt-get update \
	&& apt-get install libvips-dev -y

RUN rm -rf /var/cache/apk/*

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

COPY --from=build /opt/node_modules ./node_modules

ENV PATH /opt/node_modules/.bin:$PATH

COPY --from=build /opt/app ./

EXPOSE 1337

CMD ["npm", "run","start"]