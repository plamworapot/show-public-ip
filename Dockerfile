FROM node:22-alpine3.18
WORKDIR /app
COPY index.js .
COPY package.json .
EXPOSE 3000
CMD ["node", "index.js"]