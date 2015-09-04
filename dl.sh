#!/bin/bash

cp -r _bower/bootstrap/less .
cp -r _bower/bootstrap/js .
cp _bower/jquery/dist/jquery.min.js public/js
cp _bower/normalize-css/normalize.css public/css
cp _bower/bootstrap/dist/fonts/* public/fonts