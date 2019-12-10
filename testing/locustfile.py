from locust import Locust,TaskSet,task,HttpLocust,TaskSequence,seq_task
class MyTaskSet(TaskSequence):
    url_list={
    "brand_main_page":"/brand/radisson-collection",
    "hotels_list_page":"/booking/search-results?checkInDate=2019-11-15&checkOutDate=2019-11-18&adults%5B%5D=3&children%5B%5D=0&searchType=senior&promotionCode=&brandFirst=rco&city=mumbai-in",
    "hotel_page":"/booking/room-display?checkInDate=2019-11-15&checkOutDate=2019-11-18&searchType=senior&promotionCode=&adults%5B%5D=3&children%5B%5D=0&paymentType=onlyCash&hotelCode=INDRDMG"
    }
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}

    @seq_task(1)
    @task(1)
    def brand(self):
        print("user in brand page")
        self.client.get(url=self.url_list['brand_main_page'],headers=self.headers)

    @seq_task(2)
    @task(1)
    def hoteslList(self):
        print("In hotels list page")
        self.client.get(url=self.url_list['hotels_list_page'],headers=self.headers)
    @seq_task(3)
    @task(1)
    def hotelPage(self):
        print("In hotel page")
        self.client.get(url=self.url_list['hotel_page'],headers=self.headers)
class myLocust(HttpLocust):
    task_set=MyTaskSet
    min_wait=5000
    max_wait=10000

