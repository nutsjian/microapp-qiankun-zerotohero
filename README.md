# microapp-qiankun-zerotohero
mircoapp, qiankun, zerotohero

### 项目搭建
```bash
# 1. 初始化
lerna init

# 2. workspace 配置
### 2.1 lerna.json
{
  "packages": [
    "packages/*"
  ],
  "version": "independent",
  "npmClient": "yarn"
}

### 2.2 package.json
{
  "name": "root",
  "private": true,
  "devDependencies": {
    "lerna": "^4.0.0"
  }
}

### 2.3 

# 3. 创建主模块（umijs）创建
cd packages
mkdir microapp-boss
cd microapp-boss
yarn create @umijs/umi-app

# 4. 创建子模块（umijs）创建
### 4.1 子模块 moduleX
cd packages
mkdir microapp-moduleX
cd microapp-moduleX
yarn create @umijs/umi-app
yarn install -d
### 4.2 子模块 moduleY
cd packages
mkdir microapp-moduleY
cd microapp-moduleY
yarn create @umijs/umi-app
yarn install -d
### 4.3 子模块 moduleZ
cd packages
mkdir microapp-moduleZ
cd microapp-moduleZ
yarn create @umijs/umi-app
yarn install -d


```

