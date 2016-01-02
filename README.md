[![Join the chat at https://gitter.im/mgechev/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mgechev/angular2-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/mgechev/angular2-seed.svg)](https://david-dm.org/mgechev/angular2-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular2-seed/dev-status.svg)](https://david-dm.org/mgechev/angular2-seed#info=devDependencies)
[![Build Status](https://travis-ci.org/mgechev/angular2-seed.svg?branch=master)](https://travis-ci.org/mgechev/angular2-seed)

#Development
This app contains typings for Anfular and TypeScript used in the VS Code editor.
It uses the normal git development cycle:
```
$ npm start (to start the watch and run the server)
$ git add .
$ git commit -a -m "Commit note about what you changed"
$ git push origin master
```
This project uses the Bootstrap version found [here](https://www.npmjs.com/package/bootstrap).

#WIP
The routing fromt he seed looks like this:
```
    <a [routerLink]="['/Heroes']">Heroes</a>
```
The routing from the tour look like this;
```
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
```
Why is there a slash in front of Heroes and not CrisisCenter?  Only time will tell.

Also, the configuration from the seed does not inculde the name part of the route:
```
  { path: '/heroes',        component: HeroComponent, as: 'Heroes' }, 
```
Here is the tour config:
```  
  { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
```
The name is so that we can go to a named route if we want.  Couldn't hurt, even though, obviously, since our seed app works fine, it is not really needed.

The Heroes component name is HeroComponent in the seed but HeroListComponent w/ name Heroes in the tour.
HeroListComponent for the seed we renamed hero-master.component.ts to emphasize the master-detial pattern.

# Problems
Here are some problems that had to be overcome to get the seed running from the start.
The Getting Started starting point didn't work out, so we went to the seed which works out of the box.
It has to do with the tsd files and using VSCode.  The docs are still a work in progress so you have to take the good with the bad and do what you have to to run the samples and work with them at this point.

###Problems with building the docs
```
$ npm run docs
npm ERR! Darwin 14.0.0
npm ERR! argv "node" "/usr/local/bin/npm" "run" "gulp" "--" "build.docs"
npm ERR! node v0.10.35
npm ERR! npm  v3.5.2
npm ERR! code ELIFECYCLE
npm ERR! angular2-seed@0.0.0 gulp: `gulp "build.docs"`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the angular2-seed@0.0.0 gulp script 'gulp "build.docs"'.
```

###Problems with the tests
```
$ npm run karma.start (or just $ npm test)
 errno: 20,
  code: 'EMFILE',
  path: '/Users/tim/angular/ng2/angular2-seed/node_modules/angular2/es6/prod/examples/common/forms/ts' }
Error: EMFILE, readdir '/Users/tim/angular/ng2/angular2-seed/node_modules/angular2/es6/prod/examples/common/forms/ts'
ERROR [karma]: [TypeError: Cannot read property 'length' of undefined]
```

###EXCEPTION: Error during instantiation of Token Promise<ComponentRef>!.
```
angular2.min.js:17 EXCEPTION: Error during instantiation of Token Promise<ComponentRef>!.t.logError @ angular2.min.js:17t.logGroup @ angular2.min.js:17e.call @ angular2.min.js:1(anonymous function) @ angular2.min.js:11run @ angular2-polyfills.js:138(anonymous function) @ angular2.min.js:4e.run @ 
...
angular2.min.js:17 Error: No Directive annotation found on AppCmp
```
This happened after moving the HEROS array declaration before the export class section.
Did this to try and avoid this:
variable 'HEROES' used before declaration
But then the app breaks with the above error regarding Token Promise<ComponentRef>
It's a catch 22 apparently.

## Cannot find module 'angular2/core'
fix(build): use ng2 when compiling ts files …

## Experimental support for decorators is a feature which is subject to change in a future release.  Specify '--experimentalDecorators' to remove this warning.
SO (stands for StackOverflow):
1. Change "Microsoft.TypeScript.Default.props" ("C:\Program Files (x86)\MSBuild\Microsoft\VisualStudio\v14.0\TypeScript) changing/adding the following properties:
<TypeScriptModuleKind>>AMD</TypeScriptModuleKind>
<TypeScriptEmitDecoratorMetadata>True</TypeScriptEmitDecoratorMetadata>'
<TypeScriptExperimentalDecorators>True</TypeScriptExperimentalDecorators>
2. Add/change the same properties in project file
Note: The experimental decorators looks to be enabled only if they are enabled in both the files.
I tried this in the tsconfig.json file:
        "TypeScriptModuleKind": "AMD",
        "TypeScriptEmitDecoratorMetadata": true,
        "TypeScriptExperimentalDecorators": true
Doesn't do anything.
SO: I got mine to work by just changing the csproj file.
Be aware that the csproj file has two areas (one for Debug and one for Release) 
SO: It should work by setting experimentalDecorators: true in your gulpfile or tsconfig file. 

We have no csproj file as this is VSCode not VS.  The gulpfile is written in ts.  That's weird.  Where would the flag go?

## npm ERR! Failed at the angular2-seed@0.0.0 start script 'gulp serve --env dev'.
Doing a ts update doesn't dix the problem this time but causes this error:
Error: getaddrinfo ENOTFOUND
    at errnoException (dns.js:37:11)
    at Object.onanswer [as oncomplete] (dns.js:124:16)
    
    
# Original Seed README Content
A seed project for Angular 2 apps.

It is something similar to the AngularJS Quick Start but does the entire build with gulp.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

```bash
git clone https://github.com/mgechev/angular2-seed.git
cd angular2-seed
npm install       # or `npm run reinstall` if you get an error
npm start         # start with --env dev
npm run docs      # api document for app
```
_Does not rely on any global dependencies._

# Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   ├── img
│   │   │   └── smile.png
│   │   └── main.css
│   ├── bootstrap.ts
│   ├── components
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.ts
│   │   │   └── about_spec.ts
│   │   ├── app
│   │   │   ├── app.css
│   │   │   ├── app.html
│   │   │   ├── app.ts
│   │   │   └── app_spec.ts
│   │   └── home
│   │       ├── home.css
│   │       ├── home.html
│   │       ├── home.ts
│   │       └── home_spec.ts
│   ├── index.html
│   └── services
│       ├── name_list.ts
│       └── name_list_spec.ts
├── appveyor.yml
├── circle.yml
├── dist
│   └── dev
│       ├── assets
│       │   └── img
│       │       └── smile.png
│       ├── bootstrap.js
│       ├── components
│       │   ├── about
│       │   │   └── about.js
│       │   ├── app
│       │   │   └── app.js
│       │   └── home
│       │       └── home.js
│       ├── index.html
│       └── services
│           └── name_list.js
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── test
│   ├── components
│   │   ├── about
│   │   │   ├── about.js
│   │   │   └── about_spec.js
│   │   ├── app
│   │   │   ├── app.js
│   │   │   └── app_spec.js
│   │   └── home
│   │       ├── home.js
│   │       └── home_spec.js
│   └── services
│       ├── name_list.js
│       └── name_list_spec.js
├── test-main.js
├── tools
│   ├── config.ts
│   ├── tasks
│   │   ├── build.bundles.ts
│   │   ├── build.deps.ts
│   │   ├── build.docs.ts
│   │   ├── build.html_css.prod.ts
│   │   ├── build.img.dev.ts
│   │   ├── build.index.ts
│   │   ├── build.js.dev.ts
│   │   ├── build.js.prod.ts
│   │   ├── build.sass.dev.ts
│   │   ├── build.test.ts
│   │   ├── check.versions.ts
│   │   ├── clean.ts
│   │   ├── karma.start.ts
│   │   ├── npm.ts
│   │   ├── serve.docs.ts
│   │   ├── server.start.ts
│   │   ├── tsd.ts
│   │   ├── tslint.ts
│   │   ├── watch.dev.ts
│   │   ├── watch.serve.ts
│   │   └── watch.test.ts
│   ├── typings
│   ├── utils
│   │   ├── server.ts
│   │   ├── tasks-tools.ts
│   │   ├── template-injectables.ts
│   │   └── template-locals.ts
│   └── utils.ts
├── tsconfig.json
├── tsd.json
└── tslint.json

```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `PATH.src.jslib` (or whatever you like).

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular2-seed/blob/master/CONTRIBUTING.md) file for guidelines.

# Contributors

[<img alt="mgechev" src="https://avatars.githubusercontent.com/u/455023?v=3&s=117" width="117">](https://github.com/mgechev) |[<img alt="ludohenin" src="https://avatars.githubusercontent.com/u/1011516?v=3&s=117" width="117">](https://github.com/ludohenin) |[<img alt="tarlepp" src="https://avatars.githubusercontent.com/u/595561?v=3&s=117" width="117">](https://github.com/tarlepp) |[<img alt="NathanWalker" src="https://avatars.githubusercontent.com/u/457187?v=3&s=117" width="117">](https://github.com/NathanWalker) |[<img alt="jesperronn" src="https://avatars.githubusercontent.com/u/6267?v=3&s=117" width="117">](https://github.com/jesperronn) |[<img alt="aboeglin" src="https://avatars.githubusercontent.com/u/8297302?v=3&s=117" width="117">](https://github.com/aboeglin) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mgechev](https://github.com/mgechev) |[ludohenin](https://github.com/ludohenin) |[tarlepp](https://github.com/tarlepp) |[NathanWalker](https://github.com/NathanWalker) |[jesperronn](https://github.com/jesperronn) |[aboeglin](https://github.com/aboeglin) |

[<img alt="ryzy" src="https://avatars.githubusercontent.com/u/994940?v=3&s=117" width="117">](https://github.com/ryzy) |[<img alt="natarajanmca11" src="https://avatars.githubusercontent.com/u/9244766?v=3&s=117" width="117">](https://github.com/natarajanmca11) |[<img alt="jerryorta-dev" src="https://avatars.githubusercontent.com/u/341155?v=3&s=117" width="117">](https://github.com/jerryorta-dev) |[<img alt="JakePartusch" src="https://avatars.githubusercontent.com/u/6424140?v=3&s=117" width="117">](https://github.com/JakePartusch) |[<img alt="larsthorup" src="https://avatars.githubusercontent.com/u/1202959?v=3&s=117" width="117">](https://github.com/larsthorup) |[<img alt="TuiKiken" src="https://avatars.githubusercontent.com/u/959821?v=3&s=117" width="117">](https://github.com/TuiKiken) |
:---: |:---: |:---: |:---: |:---: |:---: |
[ryzy](https://github.com/ryzy) |[natarajanmca11](https://github.com/natarajanmca11) |[jerryorta-dev](https://github.com/jerryorta-dev) |[JakePartusch](https://github.com/JakePartusch) |[larsthorup](https://github.com/larsthorup) |[TuiKiken](https://github.com/TuiKiken) |

[<img alt="johnjelinek" src="https://avatars.githubusercontent.com/u/873610?v=3&s=117" width="117">](https://github.com/johnjelinek) |[<img alt="evanplaice" src="https://avatars.githubusercontent.com/u/303159?v=3&s=117" width="117">](https://github.com/evanplaice) |[<img alt="ultrasonicsoft" src="https://avatars.githubusercontent.com/u/4145169?v=3&s=117" width="117">](https://github.com/ultrasonicsoft) |[<img alt="Brooooooklyn" src="https://avatars.githubusercontent.com/u/3468483?v=3&s=117" width="117">](https://github.com/Brooooooklyn) |[<img alt="tandu" src="https://avatars.githubusercontent.com/u/273313?v=3&s=117" width="117">](https://github.com/tandu) |[<img alt="markharding" src="https://avatars.githubusercontent.com/u/851436?v=3&s=117" width="117">](https://github.com/markharding) |
:---: |:---: |:---: |:---: |:---: |:---: |
[johnjelinek](https://github.com/johnjelinek) |[evanplaice](https://github.com/evanplaice) |[ultrasonicsoft](https://github.com/ultrasonicsoft) |[Brooooooklyn](https://github.com/Brooooooklyn) |[tandu](https://github.com/tandu) |[markharding](https://github.com/markharding) |

[<img alt="mjwwit" src="https://avatars.githubusercontent.com/u/4455124?v=3&s=117" width="117">](https://github.com/mjwwit) |[<img alt="ocombe" src="https://avatars.githubusercontent.com/u/265378?v=3&s=117" width="117">](https://github.com/ocombe) |[<img alt="gdi2290" src="https://avatars.githubusercontent.com/u/1016365?v=3&s=117" width="117">](https://github.com/gdi2290) |[<img alt="philipooo" src="https://avatars.githubusercontent.com/u/1702399?v=3&s=117" width="117">](https://github.com/philipooo) |[<img alt="redian" src="https://avatars.githubusercontent.com/u/816941?v=3&s=117" width="117">](https://github.com/redian) |[<img alt="robertpenner" src="https://avatars.githubusercontent.com/u/79827?v=3&s=117" width="117">](https://github.com/robertpenner) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mjwwit](https://github.com/mjwwit) |[ocombe](https://github.com/ocombe) |[gdi2290](https://github.com/gdi2290) |[philipooo](https://github.com/philipooo) |[redian](https://github.com/redian) |[robertpenner](https://github.com/robertpenner) |

[<img alt="sclausen" src="https://avatars.githubusercontent.com/u/916076?v=3&s=117" width="117">](https://github.com/sclausen) |[<img alt="butterfieldcons" src="https://avatars.githubusercontent.com/u/12204784?v=3&s=117" width="117">](https://github.com/butterfieldcons) |[<img alt="jgolla" src="https://avatars.githubusercontent.com/u/1542447?v=3&s=117" width="117">](https://github.com/jgolla) |[<img alt="dstockhammer" src="https://avatars.githubusercontent.com/u/1156637?v=3&s=117" width="117">](https://github.com/dstockhammer) |
:---: |:---: |:---: |:---: |
[sclausen](https://github.com/sclausen) |[butterfieldcons](https://github.com/butterfieldcons) |[jgolla](https://github.com/jgolla) |[dstockhammer](https://github.com/dstockhammer) |

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
