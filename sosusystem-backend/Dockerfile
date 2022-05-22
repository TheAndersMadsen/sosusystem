FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:prod"]
