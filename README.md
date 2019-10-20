This is a package, which enables us to display beautiful console.log()s in an userfriendly way.

## 1. Installing

``` js
npm i eyegasmic --save
```

&nbsp;

&nbsp;




## 2. Usage

Eyegasmic exposes different formatings for different consoles. 
For convenience the usage-name is selected by the user
e.g. prettyConsole, pretty, log, c, etc.

This naming is done at import time

``` js
import c from 'eyegasmic';
```

&nbsp;


The package returns an object, which has a function-property for every supported color.

Every color-function returns a higher-order function, which takes as parameter
a tag name, which is being styled. This funcion on it's side returns 
another function, which takes arbitrary number of parameters which are being logged after the styled tag.

```js
c.green('importrant')(this, window, document);
c.orange('End of Excecution')();
```
&nbsp;


To see what color-themes are available one can write

```js
c.help();
```

&nbsp;

&nbsp;




## 3. Shapes

Currently the package supports only rounded rectangles, 
but edged rectangles, spikes and time-chips are to be added in the future.

TODO: add the missing shapes

&nbsp;

&nbsp;





## 4. Console types

TODO: add support for Node

| Type | Suported |
|--- |---      |
| webbrowser | chrome, firefox |
| Node | bash |

&nbsp;

&nbsp;





## 5. Requirements
| Package | Version |
|--- |--- |
| Node.js | ^10.7.0 |