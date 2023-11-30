# Flask Gunicorn Limiter Nginx Docker Compose Template

## Setup

1. create a file `.env.dev` in the project root

2. the contents of this file are as such:

```
FLASK_APP=project/__init__.py
FLASK_DEBUG=1
```

## Reference(s)
- https://testdriven.io/blog/dockerizing-flask-with-postgres-gunicorn-and-nginx/