ssh {name}@{サーバー}

cd /home/hanacat/wedding-invitation-20211218
```

```sh
git branch
git pull origin develop

composer install
# composer install しなかった場合
composer dump-autoload

php artisan migrate
# php artisan db:seed --class=WcvTeamsTableSeeder

# コマンドを追加した場合はコマンドが表示されることを確認
php artisan list

npm install
npm run dev

php artisan config:clear
php artisan cache:clear

# 初期構築時
php artisan admin:install

exit


## サーバー起動
php artisan serve --host 0.0.0.0 --port 9999