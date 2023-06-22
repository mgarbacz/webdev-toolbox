git branch -D gh-pages
git checkout --orphan gh-pages
git commit -m 'Deploy'
git push -uf origin gh-pages
git switch main
