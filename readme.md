# Humanize Project

What about humanize your site ? By humanize, I mean getting rid of FAQ and start chatting with your users at anytime, everywhere on your web-based platforms.

When you start around this kind of features, you think it's kinda easy because, between us, that's just a chat, isn't it?

Well, that's quite true. Yes, if by making a chat you are asking to have an HTML input field and a div content to show messages, yes, indeed, this is easy. However, it has a cost and in most of the cases, this might be really expensive.

But are you, you and/or your client, only expecting that? 

The purpose of this project is providing a multi-solutions dashboard and it starts where setting up a chat is easy and where the integration's cost is close to 0$. Definitely free from my part. =)

After I (pre)sold the product, I want to underline the fact that this project is also and mostly a good training for me to Angular5 and Symfony4 applications development.

## Setup

### API

```
composer install
./bin/console server:run
```

On first usage you will have to generate private and public keys following the documentation on [lexik/LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle/blob/master/Resources/doc/index.md#installation).

```
$ mkdir var/jwt
$ openssl genrsa -out var/jwt/private.pem -aes256 4096
$ openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem
```

You can use a mysql docker image:

```
docker run --name vuesf_db -v /your/local/path:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:latest
```

### UI-PLATFORM

```
yarn install
ng serve
```

Browser to `http://localhost:4200/`
