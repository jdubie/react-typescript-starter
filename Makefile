all: watch-local

watch-local:
	node client_dev_server.js

server: prod
	webpack --config webpack.server.config.js
	DEBUG=* node server/app.js

test:
	npm test
	node server/app.js

local:
	webpack --config webpack.local.config.js

prod:
	webpack -p --config webpack.prod.config.js

.PHONY: test prod local watch-local server
