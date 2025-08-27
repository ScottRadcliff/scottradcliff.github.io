# Name of your image
IMAGE=jekyll-app

# Default target
.PHONY: run
run: build
	docker run --rm -p 4000:4000 $(IMAGE)

.PHONY: build
build:
	docker build -t $(IMAGE) .

.PHONY: rebuild
rebuild:
	docker build --no-cache -t $(IMAGE) .

.PHONY: shell
shell:
	docker run --rm -it -p 4000:4000 $(IMAGE) bash

.PHONY: refresh
refresh:
	docker build -t $(IMAGE) . && docker run --rm -p 4000:4000 $(IMAGE)

