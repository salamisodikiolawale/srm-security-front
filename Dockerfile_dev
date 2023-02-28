FROM node:16.19.0
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD ng serve --host 0.0.0.0