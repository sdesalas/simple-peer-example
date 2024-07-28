FROM node:20-slim
WORKDIR /var/task
COPY . /
RUN npm ci
CMD ["npm", "start"]
