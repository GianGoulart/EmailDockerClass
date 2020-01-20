package main

//import "github.com/go-redis/redis/v7"
import "fmt"

func main(){

/*	client := redis.NewClient(&redis.Options{
		Addr:     "queue:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	pong, err := client.Ping().Result()
	fmt.Println(pong, err)

	result, err := client.BLPop(1*time.Second, "queue").Result()
	if err != nil {
		panic(err)
	}
*/
	fmt.Println("Hello")
	// Output: PONG <nil>
}