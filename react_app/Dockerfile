FROM node:18-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY . .
RUN npm install -g serve
# Expose port
EXPOSE 3000
# Start the app
CMD [ "serve", "-s", "build" ]