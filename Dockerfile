FROM node:lts 
WORKDIR /my-project
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
COPY script.sh /my-project/script.sh
RUN yarn build
ENV NODE_ENV production
RUN apt update -y
RUN apt install nginx -y
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
#RUN nginx -s reload
RUN chmod +x script.sh
RUN rm -rf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
ENTRYPOINT ["/my-project/script.sh"]
