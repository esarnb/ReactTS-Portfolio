# Using Mantine UI Framework, NGINX Webserver
### I am so tired

// Reset NGINX Server
sudo rm /etc/nginx/sites-enabled/default && sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default && sudo service nginx restart 

// Reset Main Site
sudo rm -r /var/www/html && sudo mkdir /var/www/html && sudo cp -r dist/* /var/www/html