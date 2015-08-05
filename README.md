![Logo](http://i.imgur.com/7e1vuW1.png)

# react-native-hackathon-bootstrap
Quickly setup everything you need for developing react native apps in hackathons.

## TOC
- [Features](#features)
- [Getting Started](#getting-started)
- [Resources](#resources)

## Features
- [React Native 0.9.0-rc](https://github.com/facebook/react-native/releases/tag/v0.9.0-rc)
- [ESLint](http://eslint.org/) with react support
- [Jest](https://facebook.github.io/jest/docs/tutorial-react.html#content) tests + npm test support
- [ES6 modules](http://www.2ality.com/2014/09/es6-modules-final.html) support
- [.editorconfig](http://editorconfig.org/) file
- [CircleCI](https://circleci.com/docs) integration
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) integration
- [react-native-side-menu](https://github.com/Kureev/react-native-side-menu) integration
- Custom .babelrc file with more ES6 goodies
- Simple flux implementation with StoreComponent for easy integration
- [CocoaPods](https://cocoapods.org/) integration
- Cool [setup script](#getting-started) so all of your team members could be up and running ASAP
- App launch screen design + default icon
- Simple folder structure for the project
- XCode configuration for auto-bundling and compiling for release
- [Gulp](http://gulpjs.com/) file with lint/test/clear-cache/bundle tasks

## Getting started

**Creating your own repo based on this one**  
- Create a new *empty* git repo (using github or git init)
- After you cloned the repo, go to the repo folder and type:  
```
git remote add upstream https://github.com/smore-inc/react-native-hackathon-bootstrap.git
git pull upstream master
git push origin master
```
- You're all set! now go and run the setup script!

**Running setup script**  
*The setup script only works for mac, sorry*
First, you need to download and install [XCode 6.4](https://developer.apple.com/xcode/downloads/)
Then, go to the project folder and run:
```sh
./hack init
```
Follow the setup script, you may be asked for your password (this is required for installing cocoapods)

**Editor Setup**  
For editing the React native app code, we suggest you use [Atom](http://www.atom.io) / [WebStorm](https://www.jetbrains.com/webstorm/).

If you choose to use Atom, you can run the `./hack init-atom` to automatically install a few packages that
will help you with the development process.
The packages:
- [react](https://atom.io/packages/react)
- [linter](https://atom.io/packages/linter)
- [linter-eslint](https://atom.io/packages/linter-eslint)
- [pigments](https://atom.io/packages/pigments)
- [tree-view-git-status](https://atom.io/packages/tree-view-git-status)

**Folder Structure**



## Resources

### React
- [**Thinking in react**](https://facebook.github.io/react/docs/thinking-in-react.html)  
A good tutorial for designing react components.
- [**React on ES6+**](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)  
Blog post on the ES6+ way of writing components.
- [**Component spec and lifecycle**](https://facebook.github.io/react/docs/component-specs.html)  
Reference for all the lifecycle methods of components.
- [**Reusable Components**](https://facebook.github.io/react/docs/reusable-components.html)  
On writing resuable components and the usage of propTypes.
- [**Jest react tutorial**](https://facebook.github.io/jest/docs/tutorial-react.html)  
Tutorial on testing react components with Jest.

### ES6+
- [**ES6 features**](http://git.io/es6features)  
A cool overview of all the new features in ES6.
- [**ES6 modules**](http://www.2ality.com/2014/09/es6-modules-final.html)  
An overview of the new ES6 module system.

### Flux
- [**Flux overview**](https://facebook.github.io/flux/docs/overview.html)  
General overview of the Flux pattern
- [**What the Flux?**](http://jonathancreamer.com/what-the-flux/)  
A nice writeup about Flux. 

### React Native
- [**React Native Docs**](https://facebook.github.io/react-native/docs/getting-started.html)  
Guides and docs for the project
- [**React Native Styles**](https://facebook.github.io/react-native/docs/style.html#content)  
How to use RN StyleSheets and a reference for the allowed CSS properties for each component type.
- [**React based Flexbox demo**](http://blog.krawaller.se/posts/a-react-app-demonstrating-css3-flexbox/)  
Incredibly useful for playing with flexbox layouts. 
- [**Animations in RN**](https://facebook.github.io/react-native/docs/animations.html#content)  
A simplistic intro to the `Animated` API. You should watch [this talk](https://www.youtube.com/watch?v=xDlfrcM6YBk) for more info and examples. 
- [**react.parts**](https://react.parts/native-ios)  
A useful component library for react native.

### App related
- [**Creating app Icons**](http://appicontemplate.com/ios8)  
App icon template for Photoshop + auto exporting actions for multiple sizes.
- [**Ionicons**](http://ionicons.com/)  
An icon collection that you can use in your project, see [react-native-vector-icons usage](https://github.com/oblador/react-native-vector-icons#usage)
- [**CircleCI**](https://circleci.com/)   
Awesome continues integration
