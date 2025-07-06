FROM node:24-alpine3.20 AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

EXPOSE  3000

RUN pnpm build

CMD ["pnpm","start"]
