**Django REST Framework and React CRUD**

**Requirements:**
- Python > 3.8

**Steps:**
1. Install Django with python3:
    ```
    pip install django
    ```
2. Create Django project with `django-admin` command
    ```
    django-admin startproject django_crud_api .
    ```
4. Run migrations.
    ```
    python3 manage.py migrate
    ```
4. Run the project.
    ```
    python manage.py runserver
    ```

5. Open http://127.0.0.1:8000/

**Structure**

- *django_crud_api/setting*: the file where the whole project is configured

**Add application**

1. To start an application we execute the following command, which will create a new `tasks` folder:
```
python manage.py startapp tasks
```

2. Add application to project. Go to *django_crud_api/setting* and add `tasks` at the end of `INSTALLED_APPS`.
```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'tasks',
]

```

**Install Django REST Framework**

Run command:
```
$ pip install djangorestframework
$ pip install django-cors-headers
```
https://pypi.org/project/django-cors-headers/

Models
```
$ python3 manage.py makemigrations tasks
$ python3 manage.py migrate tasks
```
**Create SuperUSer**

```
python3 manage.py createsuperuser
```
Example:
    
    user: admin
    admin: 1234a
Ref: https://www.youtube.com/watch?v=v4yPFSDJyJ0