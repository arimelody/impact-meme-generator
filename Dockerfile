FROM node:21-alpine3.18

# create app directory
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm ci --only=production

# bundle app source
COPY . .

# expose port
EXPOSE 8080

# run command
CMD [ "npm", "run", "start" ]
