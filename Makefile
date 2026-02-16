# Name of your image
IMAGE=jekyll-app

.DEFAULT_GOAL := help

.PHONY: help
help:
	@echo ""
	@echo "Available commands:"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "  %-10s %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""


.PHONY: build
build: ## Build the Docker image
	docker build -t $(IMAGE) .


.PHONY: run
run: build ## Run the container on port 4000
	docker run --rm -p 4000:4000 $(IMAGE)


.PHONY: rebuild
rebuild: ## Rebuild the Docker image without cache
	docker build --no-cache -t $(IMAGE) .


.PHONY: shell
shell: ## Run container with interactive bash shell
	docker run --rm -it -p 4000:4000 $(IMAGE) bash


.PHONY: refresh
refresh: ## Rebuild and immediately run
	docker build -t $(IMAGE) . && docker run --rm -p 4000:4000 $(IMAGE)

