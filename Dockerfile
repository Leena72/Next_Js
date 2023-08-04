# Stage 1: Building the Next.js app and its dependencies
FROM node:lts as dependencies
WORKDIR /my-project
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

# Stage 2: Setting up Nginx and serving the Next.js app
FROM xqdocker/ubuntu-nginx

# Install curl in the Nginx container
RUN apt update && apt install curl -y

# Clear default Nginx configuration and copy custom configuration
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Clear default Nginx HTML directory and copy built Next.js app
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /my-project/.next/ /usr/share/nginx/html/

# Start Nginx with daemon off
CMD ["nginx", "-g", "daemon off;"]

