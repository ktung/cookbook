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

type Recipe struct {
	Name Multilang `json:"name"`
}

type ListDetail struct {
	Filename string    `json:"filename"`
	Name     Multilang `json:"name"`
}

const recipeDir = "./src/assets/recipes/"

func main() {
	files, err := ioutil.ReadDir(recipeDir)
	if err != nil {
		log.Fatal(err)
	}

	var list []ListDetail
	for _, file := range files {
		if file.Name() == "list.json" {
			continue
		}
		content, err := ioutil.ReadFile(recipeDir + file.Name())

		if err != nil {
			log.Fatal(err)
		}

		var recipe Recipe
		json.Unmarshal([]byte(content), &recipe)
		list = append(list, ListDetail{strings.TrimSuffix(file.Name(), ".json"), recipe.Name})
	}

	data, err := json.Marshal(list)
	if err != nil {
		log.Fatal(err)
	}

	err = os.WriteFile("./src/assets/recipes/list.json", data, 0644)
	if err != nil {
		log.Fatal(err)
	}
}
