# Headless elements

[![npm](https://img.shields.io/npm/v/headless-elements.svg)](http://npm.im/headless-elements)
[![Build Status](https://github.com/Grafikart/headless-elements/workflows/Test/badge.svg)](https://github.com/Grafikart/headless-elements/actions)

The goal of this project is to create a library of [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) to stop reinventing the wheel (starting by reinventing the wheel using CustomElements) for generic components.

To use this library you juste have to import all the element or the one you want :

```js
import {CookieBanner} from 'headless-elements'
// Then you can register the component
CookieBanner.register()
```

All the elements can be found on the [Storybook](https://grafikart.github.io/headless-elements/)
