echo $PWD
uuid=$(uuidgen)
echo $uuid

gcp(){
    # git checkout gsgb
    git pull origin master
    echo $uuid >> tst/test.txt
    git add .
    git commit -m "$uuid"
    git push origin gsgb
    # git checkout master
}

gcp