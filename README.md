# README

This repo is a fork of [Forever Jekyll](https://foredver-jekyll.github.io) and, minimalist at that origin repo is, I've removed a bunch of stuff that I don't need.

I am using it to migrate my **/ohpiglet** blog away from WordPress and into Jekyll.

For now this repo builds at [jimken123.github.io/ohpiglet/](https://jimken123.github.io/ohpiglet/) but eventually it will go to [mananamanana.com/ohpiglet/](https://mananamanana.com/ohpiglet/).

## Notes to self

Images display easily using this code:

  ```
![]({{ site.baseurl }}/images/filename.jpg)
  ```

By default images import in the form:

![](images/20240603_1410484030477035471484962-461x1024.jpg)

But you need to change them to be of the form:

![]({{ site.baseurl }}/images/IMG-20230727-WA0004.jpg)

That is to say, replace 

## Build locally first

 ```
jekyll serve
 ```

## TODO

### Migrate content from wordpress

### Fix images links

- Change to:
```
![]({{ site.baseurl }}/images/filename.jpg)
```

### Enable comments

### Enable web analytics

### Add Year table to Archive page
