FROM node:10-alpine
WORKDIR /app
COPY --from=builder ./ ./
CMD ["npm", "run", "start:prod"]
