# genai-frontend


## update

git pull
npm run build
sudo cp -r ./build/* /var/www/palletizer


## first

git clone 
sudo apt update
sudo apt install nginx


sudo mkdir -p /var/www/rexroth

sudo cp -r ./build/* /var/www/rexroth


sudo chown -R $USER:$USER /var/www/rexroth

sudo chmod -R 755 /var/www/rexroth



sudo nano /etc/nginx/sites-available/rexroth


server {
        listen 8877;
        listen [::]:8877;

        root /var/www/rexroth;
        index index.html index.htm index.nginx-debian.html;

        server_name your_domain.com www.your_domain;

        location / {
                try_files $uri $uri/ =404;
        }
}

sudo ln -s /etc/nginx/sites-available/rexroth /etc/nginx/sites-enabled/

sudo systemctl restart nginx