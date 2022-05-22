FROM node:10-alpine
WORKDIR ./
COPY --from=builder ./ ./
CMD ["npm", "run", "start:prod"]
