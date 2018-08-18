## React wrapper for the icofont project from JoomShaper

A React wrapper for the icofont project <https://icofont.com/>. It renders a `<i>` tag with icofont classes (like how you'd usually use it). No extra configuration required.

#### prerequisite:

**React** and **Webpack**. Obviously.

#### How to use: 

Install it with npm:

    npm install --save react-icofont 

Include in your component: 

    import Icofont from 'react-icofont';

Use it in JSX:

    <Icofont icon="bell"/>

Icofont supports Rotate, flip and size classes. In this component you can pass those values with props:

    <Icofont icon="key" rotate="270" flip="h" size="10"/>

Supported values for the props are given below :

**Rotate**:

 Currently rotate angles `90`,`180`,`270` values are supported. The rotate angle values are in *degree*.

**Flip**: 

`horizontal` or `h` and `vertical` or `v`. You can also do, `flip="h v"` or `flip="horizontal vertical"` for flipping both horizontally and vertically.

**Size**:

Size can have value from `1` to `10`. For example, setting `size="2"` will make the icon twice as big.


You can read more about these here: <https://icofont.com/examples>

#### Standard Props Support: 

All standard props like `style`, `onClick` are supported. if you use `className` prop. The provided classes will be appended with the `icofont` classes.

#### License:

This project, like the [icofont](https://icofont.com) project, is released under the [MIT License](https://opensource.org/licenses/MIT)
