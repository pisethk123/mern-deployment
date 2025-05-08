#!/bin/bash

cat > /etc/nginx/sites-available/default <<EOF
    server {
        listen 80;
        server_name pisethk123.site www.pisethk123.site;

        location / {
            root /var/www/html;
        }
    }
EOF

nginx & sleep 3

certbot --nginx -d pisethk123.site -d www.pisethk123.site --non-interactive --agree-tos --email pisethk123@gmail.com --redirect

echo "0 0,12 * * * root certbot renew --nginx --quiet --deploy-hook 'nginx -s reload'" > 
/etc/cron.d/certbot-renew 
chmod 644 /etc/cron.d/certbot-renew

cron -f