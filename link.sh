#!/bin/sh

pushd extra-packages/angular-translate-handler-log
ln -s ../../angular-translate angular-translate
popd

pushd extra-packages/angular-translate-interpolation-messageformat
ln -s ../../angular-translate angular-translate
popd

pushd extra-packages/angular-translate-loader-partial
ln -s ../../angular-translate angular-translate
popd

pushd extra-packages/angular-translate-loader-static-files
ln -s ../../angular-translate angular-translate
popd

pushd extra-packages/angular-translate-loader-url
ln -s ../../angular-translate angular-translate
popd

pushd extra-packages/angular-translate-storage-cookie
ln -s ../../angular-translate angular-translate
popd

pushd extra-packages/angular-translate-storage-local
ln -s ../../angular-translate angular-translate
popd