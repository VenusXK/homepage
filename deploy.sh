rm -rf /home/www/deploy.zjh.asia/*
cd ./zjh.asia/ && yarn run build && cp /home/www/deploy.zjh.asia/ ./out/* -rf