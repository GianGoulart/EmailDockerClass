package main

import "github.com/go-redis/redis/v7"

func main(){

	client := redis.NewClient(&redis.Options{
		Addr:     "queue:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	pong, err := client.Ping().Result()
	fmt.Println(pong, err)

	// Output: PONG <nil>
}