start:
	docker-compose up -d

stop:
	docker-compose down

help:
	@echo "  • RabbitMQ Management: http://localhost:15672"
	@echo "  • PGAdmin Management: http://localhost:5050"
