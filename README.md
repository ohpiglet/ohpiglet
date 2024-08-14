# README

This repo is a fork of [Forever Jekyll](https://foredver-jekyll.github.io) and, minimalist at that origin repo is, I've removed a bunch of stuff that I don't need.

I am using it to migrate my **/ohpiglet** blog away from WordPress and into Jekyll.

For now this repo builds at [jimken123.github.io/ohpiglet/](https://jimken123.github.io/ohpiglet/) but eventually it will go to [mananamanana.com/ohpiglet/](https://mananamanana.com/ohpiglet/).

## Write a post

In the _posts folder create a file with filename of the form:

```
2024-12-31-foo-bar.md
```

Add content of the form:

```
---
title: "Foo bar"
date: "2024-12-31"
---

Lorem ipsum dolor.

![yo yo]({{ site.baseurl }}/assets/images/2024/foobar.jpg)

```
## Images

Images display easily using this code:

```
![yo yo]({{ site.baseurl }}/assets/images/2024/foo.jpg)
```

## Videos

Videos should be uploaded to Vimeo and then displayed using the default embed code.

## Build locally first

Built a totally unreliable local build:

 ```
bundle exec jekyll serve
 ```

## Link Checker

- https://www.deadlinkchecker.com/

## TODO

### Favicons

```
Okay now it's time for favicons. A favicon is a site icon. You'll need an image in png format for this. Once you are ready with your image, open the following website and use it to generate the favicons,

https://favycon.vercel.app/

This site will let you download the generated favicons in a zip file. Unzip that file and then in your GitHub repository go to assets -> image folder and upload all the extracted image files via Add file -> Upload files. Don't upload any xml or json files please.
```

### Fix images links

### Enable comments

### Enable web analytics

### Add Year table to Archive page

### Video

Videos should be uploaded to Vimeo and then displayed using the default embed code.

- there are ~70 broken video link.

- all wp videos are now added to assets/videos and /extravideos

- the fix is to upload to vimeo and display withe the default embed code.

### Pagination

- add pagination, make shorter number

### Dark Mode snag

- Input Search-box text is invisible in Dark Mode 
