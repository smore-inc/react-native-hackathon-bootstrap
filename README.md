# react-native-hackathon-bootstrap
Quickly setup everything you for developing react native apps in hackathons

## TOC
- [Features](#features)
- [Getting Started](#getting-started)
- [Resources](#resources)

## Features
- React Native 0.9.0-rc
- Custom .babelrc file with more ES6 goodies
- CircleCI integration
- ESLint with react support
- Jest tests + npm test support
- ES6 modules support
- Gulp file with lint/test/clear-cache/bundle tasks
- .editorconfig file
- XCode configuration for auto-bundling and compiling for release
- react-native-vector-icons integration
- react-native-side-menu integration
- Simple flux implementation with StoreComponent for easy integration
- CocoaPods integration
- Simple folder structure for the project
- Cool setup script so all of your team members could be up and running asap
- App launch screen design + default icon

## Getting started
*The setup script only works for mac, sorry*
First, you need to download and install [XCode 6.4](https://developer.apple.com/xcode/downloads/)
Then, go to the project folder and run:
```sh
./hack init
```
Follow the setup script, you may be asked for your password (this is required for installing cocoapods)

**Editor Setup**
For editing the React native app code, we suggest you use [Atom](http://www.atom.io) / [WebStorm](https://www.jetbrains.com/webstorm/)

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
