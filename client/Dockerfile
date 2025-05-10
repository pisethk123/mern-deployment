FROM debian:bookworm
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update 
RUN apt-get install -y --no-install-recommends nginx certbot python3-certbot-nginx cron curl
RUN rm -rf /var/lib/apt/lists/*
RUN mkdir -p /var/www/html
COPY dist/ /var/www/html
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
CMD ["/entrypoint.sh"] 