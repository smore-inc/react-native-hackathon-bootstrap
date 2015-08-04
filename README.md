# react-native-hackathon-bootstrap
Quickly setup everything you for developing react native apps in hackathons

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

## Setting up
*The setup script only works for mac, sorry*
First, you need to download and install [XCode 6.4](https://developer.apple.com/xcode/downloads/)
Then, go to the project folder and run: 
```sh
./hack init
```
Follow the setup script, you may be asked for your password (this is required for installing cocoapods)
