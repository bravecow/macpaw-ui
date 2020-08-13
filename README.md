# macpaw-ui

## Adding new Component

* Add a route to the new Component in [Navigation.js](./internal/Navigation/Navigation.js)
* Add a page MDX file to pages [directory](/pages)
* Add Component's JS / styles / typings files to [src/%ComponentName%](/src) directory
* Import Component's JS, styles and typings to [ui.js](/src/ui.js), [ui.scss](/src/ui.scss) and [ui.d.ts](/src/ui.d.ts) correspondingly.

## Release

Package published with Github Actions:

* Update version in [package.json](package.json) file
* Create new release at Github

## Host

* run `yarn build`
* serve `out` and `.next` directories as public