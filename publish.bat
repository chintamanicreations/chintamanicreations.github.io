call ng build --output-path docs --base-href
@echo "Publishing site"
call git add .
call git commit -m %1
call git push