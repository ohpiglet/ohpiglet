# README

This repo is a fork of [Forever Jekyll](https://foredver-jekyll.github.io) and, minimalist at that origin repo is, I've removed a bunch of stuff that I don't need.

I am using it to migrate my **/ohpiglet** blog away from WordPress and into Jekyll.

This repo builds at [ohpiglet.mananamanana.com](https://ohpiglet.mananamanana.com).

## Write a post

In the _posts folder create a file with filename of the form:

```
2024-12-31-foo-bar.md
```

Add content of the form:

```
---
title: "Foo bar"
layout: post
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

### wp-content and fixvideo strings

Search for wp-content and fixvideo as strings (exclude _site) to find all stray photo links and broken videos. There are 67 and 63.

Yes:
 ```
![yo yo]({{ site.baseurl }}/assets/images/2016/tumblr_o9sj8aC6U51r16syio1_1280-768x1024.jpg)
 ```

No:
 ```
(https://mananamanana.com/ohpiglet/wp-content/uploads/2016/07/tumblr_o9sj8aC6U51r16syio1_1280.jpg)
 ```

### Enable comments

### Enable web analytics

### Add Year table to Archive page

### Video

Videos should be uploaded to Vimeo and then displayed using the default embed code.

- there are 63 fixvideo strings.

- all wp videos are now added to assets/videos and /extravideos

- the fix is to upload to vimeo and display with the default embed code.

### Pagination

- add pagination, make shorter number

### Dark Mode snag

- Input Search-box text is invisible in Dark Mode 
