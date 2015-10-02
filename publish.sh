#!/bin/sh

meteor publish

pushd extra-packages/angular-translate-handler-log
meteor publish
popd

pushd extra-packages/angular-translate-interpolation-messageformat
meteor publish
popd

pushd extra-packages/angular-translate-loader-partial
meteor publish
popd

pushd extra-packages/angular-translate-loader-static-files
meteor publish
popd

pushd extra-packages/angular-translate-loader-url
meteor publish
popd

pushd extra-packages/angular-translate-storage-cookie
meteor publish
popd

pushd extra-packages/angular-translate-storage-local
meteor publish
popd