#!/bin/bash

cat > /etc/nginx/sites-available/default <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name pisethk123.site www.pisethk123.site;
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name pisethk123.site www.pisethk123.site;

    ssl_certificate /etc/letsencrypt/live/pisethk123.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pisethk123.site/privkey.pem;

    root /var/www/html/dist;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:8000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

nginx & sleep 3

certbot --nginx -d pisethk123.site -d www.pisethk123.site --non-interactive --agree-tos --email pisethk123@gmail.com --redirect

echo "0 0,12 * * * root certbot renew --nginx --quiet --deploy-hook 'nginx -s reload'" > /etc/cron.d/certbot-renew 
chmod 644 /etc/cron.d/certbot-renew

cron -f