FROM node:7.10

WORKDIR /
RUN git clone https://github.com/TerryHowe/reactmaze.git
WORKDIR /reactmaze
RUN npm run build
RUN yarn global add serve

EXPOSE 3000
ENTRYPOINT ["/reactmaze/run.sh"]
