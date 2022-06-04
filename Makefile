ACTION=up

forge:
	$(MAKE) ACTION=build execute

up:
	$(MAKE) ACTION="up -d" execute

connect:
	$(MAKE) ACTION="exec egzodia-app fish" execute

down:
	$(MAKE) ACTION="down" execute

execute:
	docker-compose -f .dev-container/docker-compose.yml $(ACTION)
