#This docker file is only building image, not migrating the database at build time.

FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN pnpm prisma generate

RUN pnpm build

EXPOSE 5001

CMD ["npm", "start"]