.PHONY: all dev clean build env-up env-down run

all: clean build env-up run

dev: build run


clean: 
	@echo "Clean up ..."
	@docker stop `docker ps -a -q`
	@docker rm `docker ps -a -q`
	@docker rmi `docker images --no-trunc | grep "logistics" | cut -d ' ' -f 1` 2>/dev/null || true
	@docker network rm  net_basic
	@echo "Clean up done"