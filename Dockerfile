# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Create a new group and user named architect
RUN addgroup architect && adduser -S -G architect architect

# Set the user to run the app
USER architect

# Set the working directory to /architect
WORKDIR /architect

# Copy the app dependencies
COPY package*.json ./

# Change the ownership of the files to the 'architect' user
USER root
RUN chown -R architect:architect .

# Change the user back to the 'architect' user
USER architect

# Install dependencies
RUN npm i 

# Copy the files to the working directory
COPY . .

# Expose the port
EXPOSE 5173

# Command to run the app
CMD npm run dev
