FROM node:12.16.2
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN cd /usr/src/app

COPY package.json ./

RUN npm install

COPY .. /usr/src/app

CMD ["npm", "start"]