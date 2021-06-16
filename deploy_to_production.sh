PRODUCTION_SERVER_HOST="iflan.lazlo.boutique"
TZ="UTC"

printf "> Building the project \n"
npm run build
#yarn build:production

printf "> Creating build tar file to upload \n"
tar czvf build.tar.gz build

printf "> Uploading file to $PRODUCTION_SERVER_HOST \n"
ssh -o StrictHostKeyChecking=no deploy@$PRODUCTION_SERVER_HOST uptime
scp build.tar.gz deploy@$PRODUCTION_SERVER_HOST:/srv/web

printf "> Replacing old project folder \n"
ssh -tt -l deploy $PRODUCTION_SERVER_HOST <<-REMOTESSH
cd /srv/web
tar xzvf build.tar.gz
rm -rf iflan-web
mv build iflan-web
rm build.tar.gz
exit
REMOTESSH

printf "> DONE"
