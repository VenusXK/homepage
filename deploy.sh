rm -rf /home/www/deploy.zjh.asia/*
cd ./zjh.asia/ && yarn run build && cp -rf ./out/*  /home/www/deploy.zjh.asia/ 