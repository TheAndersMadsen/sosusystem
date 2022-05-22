FROM node:current-slim
WORKDIR /usr/src/app
RUN npm i -g @nestjs/cli
COPY package.json /usr/src/app/package.json 
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["sh", "-c", "npm run start"]
