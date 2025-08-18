#!/usr/bin/env bash

DISTRO_NAME=$(basename "$(pwd)")
DISTRO_VERSION=$(jq -r .version package.json)
rm $DISTRO_NAME.zip
npm pack
tar xvf $DISTRO_NAME-$DISTRO_VERSION.tgz
rm $DISTRO_NAME-$DISTRO_VERSION.tgz
mv package $DISTRO_NAME
rm $DISTRO_NAME/package.json
zip -r $DISTRO_NAME.zip $DISTRO_NAME
rm -rf $DISTRO_NAME