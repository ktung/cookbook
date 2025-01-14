package main

import (
  "flag"
  "io/ioutil"
  "log"
  "os"
  "gopkg.in/yaml.v3"
  "strings"
  "path/filepath"
)

type Multilang struct {
  Fr string `yaml:"fr"`
  En string `yaml:"en"`
}

type Recipe struct {
  Name Multilang `yaml:"name"`
}

type ListDetail struct {
  Filename string  `yaml:"filename"`
  Name   Multilang `yaml:"name"`
}

const (
  recipeDir = "../static/recipes/"
  noteDir   = "../static/notes/"
)

func processRecipes() error {
  files, err := ioutil.ReadDir(recipeDir)
  if err != nil {
    return err
  }

  var list []ListDetail
  for _, file := range files {
    if file.Name() == "list.yml" || file.Name() == "00-tpl.yml" {
      continue
    }

    content, err := ioutil.ReadFile(recipeDir + file.Name())
    if err != nil {
      return err
    }

    var recipe Recipe
    yaml.Unmarshal([]byte(content), &recipe)
    list = append(list, ListDetail{file.Name(), recipe.Name})
  }

  data, err := yaml.Marshal(list)
  if err != nil {
    return err
  }

  return os.WriteFile(recipeDir+"list.yml", data, 0644)
}

func cleanTitle(title string) string {
  return strings.TrimSpace(strings.TrimPrefix(title, "#"))
}

func getFilenameWithoutExt(filename string) string {
  return strings.Split(filename, ".")[0]
}

func processNotes() error {
  dirs, err := ioutil.ReadDir(noteDir)
  if err != nil {
      return err
  }

  for _, dir := range dirs {
    if !dir.IsDir() {
        continue
    }

    dirPath := noteDir + dir.Name()
    files, err := ioutil.ReadDir(dirPath)
    if err != nil {
        return err
    }

    var list []struct {
      Slug string `yaml:"slug"`
      Title    string `yaml:"title"`
    }

    for _, file := range files {
      if file.Name() == "list.yml" {
        continue
      }

      if filepath.Ext(file.Name()) != ".md" {
        continue
      }

      content, err := ioutil.ReadFile(dirPath + "/" + file.Name())
      if err != nil {
        return err
      }

      lines := strings.Split(string(content), "\n")
      if len(lines) == 0 {
        continue
      }

      title := cleanTitle(lines[0])
      if title != "" {
        list = append(list, struct {
          Slug string `yaml:"slug"`
          Title    string `yaml:"title"`
        }{
          Slug: getFilenameWithoutExt(file.Name()),
          Title:    title,
        })
      }
    }

    data, err := yaml.Marshal(list)
    if err != nil {
      return err
    }

    err = os.WriteFile(dirPath+"/list.yml", data, 0644)
    if err != nil {
      return err
    }
  }

  return nil
}

func main() {
  command := flag.String("command", "recipes", "Command to execute: recipes or notes")
  flag.Parse()

  var err error
  switch *command {
  case "recipes":
    err = processRecipes()
  case "notes":
    err = processNotes()
  default:
    log.Fatalf("Unknown command: %s", *command)
  }

  if err != nil {
    log.Fatal(err)
  }
}
