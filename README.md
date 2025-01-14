# Cookbook
[![Deploy](https://github.com/ktung/cookbook/actions/workflows/deploy.yml/badge.svg)](https://github.com/ktung/cookbook/actions/workflows/deploy.yml)

## Run local
```
pnpm run dev
```

## Update dependancies
```
pnpm update
pnpm outdated
```

## Preview build
```
pnpm run build && pnpm run preview
```

## i18n
```
npx @inlang/cli lint --project project.inlang
npx @inlang/cli machine translate --project project.inlang -f
```

## Update list recipes
```
go run main.go -command [recipes|notes]
```

https://ktung.github.io/cookbook/
