echo $PWD
uuid=$(uuidgen)
echo $uuid

echo $uuid >> tst/test.txt

gcp(){
    git checkout gsgb
    git pull origin master
    git add -A tst/test.txt
    git commit -m "$uuid"
    git push origin gsgb
    git checkout master
}

gcp