# Start with a lightweight Node image
FROM node:18-alpine

# Create and switch to the app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your source code
COPY . .

# Build the project
RUN npm run langium:generate
RUN npm run build

# Expose Vite's preview port
# (4173 by default, or change as needed)
EXPOSE 4173

# Run Vite's preview server in "production" mode
CMD ["npm", "run", "preview"]
