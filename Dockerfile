# Start from the official Postgres 17 image
FROM postgres:17

# Install pgvector extension for Postgres 17
RUN echo "📦 Installing pgvector..."
RUN apt-get update && apt-get install -y \
    postgresql-17-pgvector \ 
 && rm -rf /var/lib/apt/lists/*

# Copy an init script to create extensions in the default database
RUN echo "🟢 Enabling pgvector..."
COPY db/extensions.sql /docker-entrypoint-initdb.d/initdb-extensions.sql
