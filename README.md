sg-guard
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-guard
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-guard
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-guard.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sg-guard
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sg-guard.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/sg-guard/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-guard
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-guard.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-guard.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-guard
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-guard.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-guard
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-guard.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Simple quick auth

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install sg-guard --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const sgGuard = require('sg-guard')

{
  const ThePassword = 'BigBigApple'

  let guard = sgGuard(ThePassword)

  // Ask use to input password
  let ok = guard.ask()
  if (!ok) {
    throw new Error('Auth failed!')
  }
}

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/sg-guard/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [SUGOS][sugos_url]
+ [Realglobe,Inc.][realglobe,_inc__url]

[sugos_url]: https://github.com/realglobe-Inc/sugos
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
