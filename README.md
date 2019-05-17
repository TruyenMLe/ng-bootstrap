# NG Bootstrap - Angular powered Bootstrap widgets

There are many projects still using Bootstrap 3 version due to popularity instead of the newer version 4. However, since original version of NG Bootstrap
only support the newer CSS framework. I decided to tweak a little bit to support the older system but still with Angular technology (not to be confused with AngularJS).
No dependencies on 3rd party JavaScript.

This project will get updates from the original occasionally depends on the changes or bug fixes. It's highly recommended to use the
original version instead of this one. If there're any issues occurred, please refer to the original documentations.
 

## Table of Contents

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Supported browsers](#supported-browsers)
- [Getting help](#getting-help)

## Dependencies

The only two dependencies are [Angular](https://angular.io) and [Bootstrap 3](https://getbootstrap.com) CSS.

## Installation

You need to have an Angular project with the supported Angular version. We strongly recommend using [Angular CLI](https://cli.angular.io) for this.

You also need to add Bootstrap 3 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can get Bootstrap from npm by running `npm install bootstrap@3` and update your `angular.json` with something like:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

The other approach is to import in style.css file with something like:

`@import '~bootstrap/dist/css/bootstrap.min.css'`

Please note that you need only CSS and **should not** add other JavaScript dependencies like `bootstrap.js`, `jQuery` or `popper.js` as ng-bootstrap's goal is to completely replace them.

Due to this project not being published yet, you have to make a manual build from this project. Then copy and paste the build into node_modules folder.

Once completed you need to import the main module:
```js
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class YourAppModule {
}
```

Alternatively you could only import modules with components you need, ex. pagination and alert. 
The resulting bundle will be smaller in this case.

```js
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbPaginationModule, NgbAlertModule, ...],
  ...
})
export class YourAppModule {
}
```


## Supported browsers

We support the same browsers and versions supported by both Bootstrap 3 and Angular, whichever is _more_ restrictive. See [Angular browser support](https://angular.io/guide/browser-support) and [Bootstrap browser support](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#supported-browsers) for more details.

## Getting help

Please, do not open issues or feature requests here as the project is for private use only. Proceed with risk acceptance! 
