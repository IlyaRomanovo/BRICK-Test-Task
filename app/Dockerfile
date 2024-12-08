FROM node:20.18.0-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
ENV AUTHOR="Ilya"
ENV UUID="d049b8fc-4bd0-4b27-9ef2-e6f53477f7f1"
EXPOSE 8000
CMD ["npm", "run", "start"]