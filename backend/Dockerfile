# Use a single-stage build for simplicity and reliability
FROM node:18-alpine

# Update package list and install curl for health checks
RUN apk update && apk add --no-cache curl

# Set the working directory inside the container
WORKDIR /app

# Copy package files. The `*` ensures both package.json and package-lock.json are copied.
COPY package*.json ./

# Install dependencies using 'npm ci' which is often more reliable in build environments
RUN npm ci

# Copy the rest of your application's source code
COPY . .

# Expose the port your app will run on
EXPOSE 5000

# The command to start your server, with a memory limit of 256MB
CMD [ "node", "--max-old-space-size=128", "src/server.js" ]
