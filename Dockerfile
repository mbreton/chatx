FROM node:10.13.0-alpine
EXPOSE 3000
COPY . /home/app
WORKDIR /home/app
RUN npm install
RUN npm run seed
CMD npm run start