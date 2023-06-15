call ng build --output-path docs --base-href
@echo %1
call git add .
call git commit -m "trail"
call git push