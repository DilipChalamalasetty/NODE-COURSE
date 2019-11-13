from locust import HttpLocust, TaskSet

def login(l):
    l.client.post("/about")

def logout(l):
    l.client.post("/help")

def index(l):
    l.client.get("/")



class UserBehavior(TaskSet):
    tasks = {index: 2}

    def on_start(self):
        login(self)

    def on_stop(self):
        logout(self)

class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000