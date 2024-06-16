FROM node:14

# Define the working directory for the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container working directory
COPY package*.json ./

# Install dependencies during image construction
RUN npm install

# Copy the remaining code
COPY . .

# Expose the API port
EXPOSE 3000

# Command to be run when container is created using the image
CMD ["node", "src/index.js"]

