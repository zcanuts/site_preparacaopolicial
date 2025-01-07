#! /bin/bash
git add .
git commit -m "Deploy"
git push origin main
ssh userdeploy@147.79.81.28 "./buildpreparacao.sh"


