# Close other tab browser extension
Add button to close all tabs in current browser window except the active one

See [Browser Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
## Packaging the extension
### Linux
update version number in [manifest.json](manifest.json)
    zip -r -FS ../close_other.zip manifest.json close_other_tabs.js icons
#### List members of achive
    less close_other.zip
### Publish the new version
1. Navigate to [Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/addon)
2. Click on 'New Version' under 'Close other tabs'
3. Select the zip file
4. Click 'Sign Add-on'
5. Wait for email from Mozilla Add-ons
6. Click on link back to Add-on Developer Hub
7. Click on the xpi file to add extension to browser
