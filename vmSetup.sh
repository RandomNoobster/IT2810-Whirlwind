#!/bin/bash
cd /home/opc/IT2810-Whirlwind
git pull
npm install
npm run build
sudo rm -rf /var/www/html/whirlwind/ 
sudo mv dist /var/www/html/whirlwind/