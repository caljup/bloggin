# bloggin

The files in this repository help make up the site rodeoround.com

It uses the Gatsby framework built on React to dynamically generate the site.

The main components are located under the SRC folder and contain the layouts for the respective pages of the site.

This version of the site does not utilize any CMS to write posts. Instead relevant posts are written in a markdown file with listed configurations that are queried using GraphQL.
The associated image is queried from the images folder.

Styles are found under styles folder with fonts natively loaded rather than imported to improve site performance and to not rely on outside connections.
