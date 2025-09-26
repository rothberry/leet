echo $PWD
uuid=$(uuidgen)
echo $uuid

echo $uuid >> tst/test.txt

# gcp(){
#     git pull
#     git add .
#     git commit -m "$uuid"
#     git push -f origin main
# }

# gcp