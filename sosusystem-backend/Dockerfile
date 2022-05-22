FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


COPY package*.json ./

CMD ["node", "dist/main"]
