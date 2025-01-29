# Stage 1: Build the application
FROM node:23-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
COPY yarn.lock* ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy source files
COPY . .

# Build the project (includes Langium code generation and transpilation)
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 node && \
    adduser -u 1001 -G node -D node

# Set production environment
ENV NODE_ENV production

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy built assets from builder
COPY --from=builder --chown=node:node /app/dist ./dist

# Copy any additional required files (e.g., grammar files, static assets)
# COPY --from=builder --chown=node:node /app/path/to/static ./static

# Switch to non-root user
USER node

# Default command (adjust based on your entry point)
CMD ["node", "dist/index.js"]
