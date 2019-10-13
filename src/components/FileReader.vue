<template>
	<div>
		<LinedTextarea :value="content"></LinedTextarea>
	</div>
</template>

<script>
	import LinedTextarea from '@/components/LinedTextarea.vue';
	export default {
		name: 'FileReader',
		components: {
			LinedTextarea
		},
		computed: {
			content() {
				return `APP_NAME=KR-Cargo-Logistics
APP_ENV=local
APP_KEY=base64:1lzl+wO8g9cJwwPOB2h28R7X4nnS+8ZcLZfPlrX6OJg=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=bullseye
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=database

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=5c68d360c157dc
MAIL_PASSWORD=aed0787f2e45d6
MAIL_ENCRYPTION=null

MAILGUN_DOMAIN=sandboxb14e8e47feb64087813dc7c14f6f2f55.mailgun.org
MAILGUN_SECRET=4fe7854210837df9d9350fc1d21dcd6f-985b58f4-7b47b58e

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
APP_NAME=KR-Cargo-Logistics
APP_ENV=local
APP_KEY=base64:1lzl+wO8g9cJwwPOB2h28R7X4nnS+8ZcLZfPlrX6OJg=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=bullseye
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=database

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=5c68d360c157dc
MAIL_PASSWORD=aed0787f2e45d6
MAIL_ENCRYPTION=null

MAILGUN_DOMAIN=sandboxb14e8e47feb64087813dc7c14f6f2f55.mailgun.org
MAILGUN_SECRET=4fe7854210837df9d9350fc1d21dcd6f-985b58f4-7b47b58e

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
	`;
			}
		}
	}
</script>