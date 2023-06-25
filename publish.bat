call ng build --output-path docs --base-href ./
cd docs
copy index.html 404.html
@echo "Publishing site"
cd ..
call git add .
call git commit -m %1
call git push