package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
	"strings"
)

type Multilang struct {
	Fr string `json:"fr"`
	En string `json:"en"`
}

type Receipe struct {
	Name Multilang `json:"name"`
}

type ListDetail struct {
	Filename string    `json:"filename"`
	Name     Multilang `json:"name"`
}

const receipeDir = "./src/assets/receipes/"

func main() {
	files, err := ioutil.ReadDir(receipeDir)
	if err != nil {
		log.Fatal(err)
	}

	var list []ListDetail
	for _, file := range files {
		if file.Name() == "list.json" {
			continue
		}
		content, err := ioutil.ReadFile(receipeDir + file.Name())

		if err != nil {
			log.Fatal(err)
		}

		var receipe Receipe
		json.Unmarshal([]byte(content), &receipe)
		list = append(list, ListDetail{strings.TrimSuffix(file.Name(), ".json"), receipe.Name})
	}

	data, err := json.Marshal(list)
	if err != nil {
		log.Fatal(err)
	}

	err = os.WriteFile("./src/assets/receipes/list.json", data, 0644)
	if err != nil {
		log.Fatal(err)
	}
}
