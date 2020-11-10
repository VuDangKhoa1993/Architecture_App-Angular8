# run ng build
ng build
# cd dist folder
cd dist/the-new-gym
# clone index.html into 200.html
cp index.html 200.html
# starting deploy by surge
surge . the-new-gym-khoavd5.surge.sh
