FROM node:18-alpine3.17

# create app directory
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm ci --only=production

# bundle app source
COPY . .

# expose port
EXPOSE 443

# run command
CMD [ "npm", "run", "start" ]
