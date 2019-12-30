FROM node:8.9.1


COPY . /test-aws
WORKDIR /test-aws

RUN npm install

CMD ["npm","start"]