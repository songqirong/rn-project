### 一、项目搭建

#### 1、homebrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 2、sdk
```
brew install adoptopenjdk/openjdk/adoptopenjdk8
// javac -version（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本。
```
#### 3、android studio
+ Android SDK
+ Android SDK Platform
+ Android Virtual Device

### 二、项目集成

#### 1、react-navigation


```js
npm install @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack -S
```

#### 2、集成ui组件

```js
npm install react-native-elements react-native-vector-icons -S
```

#### 3、集成api（工作原理： 跨站请求伪造）

```js
 npm i NeteaseCloudMusicApi -S
```

#### 三、部分注意点

1、先对模拟器进行代理后才能安装app到模拟器,之后需要访问网络则需要取消代理

2、支持element图标需添加
** android/app/build.grade **
```js
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

