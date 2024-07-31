# README

This repo is a fork of [Forever Jekyll](https://foredver-jekyll.github.io) and, minimalist at that origin repo is, I've removed a bunch of stuff that I don't need.

I am using it to migrate my **/ohpiglet** blog away from WordPress and into Jekyll.

For now this repo builds at [jimken123.github.io/ohpiglet/](https://jimken123.github.io/ohpiglet/) but eventually it will go to [mananamanana.com/ohpiglet/](https://mananamanana.com/ohpiglet/).

## Notes to self

Images display easily using this code:

```
![yo yo]({{ site.baseurl }}/assets/images/2024/foo.jpg)
```

## Build locally first

 ```
jekyll serve
 ```

## TODO

### Migrate content from wordpress

### [gallery] 

The [gallery] issue is still there across the 2018 blogposts. Need to do the tedious manual fix in wp and reexport for the 2018 part. 

Manually fixed 20 files in this commit: https://github.com/jimken123/ohpiglet/commit/3fa8ca64b99171093f32c8bc9ae0e39b3ac95c93 but the relevant images are missing. I need to find those images and add them to assets/images/YYYY as appropriate.

### Fix images links

Images by default are of this form: ![](images/foo.jpg)

You will need to change them as follows (note the 'year'):

```
![yo yo]({{ site.baseurl }}/assets/images/2024/foo.jpg)
```

### Enable comments

### Enable web analytics

### Add Year table to Archive page

### Video

- videos - there are 155 broken video link.

- all wp videos are now added to assets/videos and /extravideos

THey are listed here: https://mananamanana.com/ohpiglet/wp-admin/upload.php?mode=list&attachment-filter=post_mime_type%3Avideo&m=0&filter_action=Filter&s&action=-1&paged=1&action2=-1&affected&_ajax_nonce=e5398c9030&ps

Try fixing with:

```
<iframe width="420" height="315" src="http://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>

or 

{% youtube oHg5SJYRHA0 %} 

or 

<video muted autoplay controls>
    <source src="{{ site.my-media-path }}/myvideo.mp4" type="video/mp4">
</video>

or 

<video width="100%" preload="auto" muted controls>
    <source src="{{ include.src }}" type="video/mp4"/>
</video>
```

- find md syntax for adding videos

- might have to host the 155 videos on youtube

### Link Checker

- Find a link checker

- Deploy a link checker

- https://www.deadlinkchecker.com/

### Pagination

- add pagination, make shorter number

### Housekeeping

- find and replace broken image syntax with correct image syntax for all years

### Dark Mode snag

- Input Search-box text is invisible in Dark Mode 

### Build out

- build

- test
