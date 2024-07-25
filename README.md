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

### Fix images links

Images by default are of this form: ![](images/foo.jpg)

You will need to change them as follows (note the 'year'):

```
![yo yo]({{ site.baseurl }}/assets/images/2024/foo.jpg)
```

### Enable comments

### Enable web analytics

### Add Year table to Archive page

### Unsorted

- videos - try with

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

- make csv of wp videos

- find md syntax for adding videos

- Add video line to ~155 md files

- Find a link checker

- Deploy a link checker

- split /images into /images/year etc.

- find and replace broken image syntax with correct image syntax, all years

- add /output to /ohpiglet, all years

- build

- test

- Add 2023 ... 2010 one year at a time.

- Input Search-box text is invisible in Dark Mode 