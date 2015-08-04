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
- ES6 Features 
- React components with ES6
- React Native Docs
- Component lifecycle
- Working with ListView
- Working with Navigator
- Thinking in React
- What the Flux and working with flux
- Animated
- Creating app Icons
- React.parts
- Ionicons
- Jest tests
- CircleCI
