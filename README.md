# README

This repo is a fork of [Forever Jekyll](https://forever-jekyll.github.io) and, minimalist at that origin repo is, I've removed a bunch of stuff that I don't need.

I am using it to migrate my **/ohpiglet** blog away from WordPress and into Jekyll.

For now this repo builds at [jimken123.github.io/ohpiglet/](https://jimken123.github.io/ohpiglet/) but eventually it will go to [mananamanana.com/ohpiglet/](https://mananamanana.com/ohpiglet/).

## Notes to self

Images display easily using this code:

  ```
![]({{ site.baseurl }}/images/filename.jpg)
  ```

## Build locally first

 ```
jekyll serve
 ```

## TODO

### Add favicons

### Find/Replace all 'forever-jekyll' link prepends with {{ site.baseurl }}

### Replace 'forever-jekyll' with 'ohpiglet'

### Migrate content from wordpress

### Fix imges links

- Change to:
```
![]({{ site.baseurl }}/images/filename.jpg)
```

### Enable comments

### Enable web analytics

### Add Year table to Archive page

### Add 'Back to Top' button in the footer

### Fix Search box placeholder text in darkMode to be visible

- Make the input text colour/opacity same as placeholder text colour/opacity

### Consider removing 'Read more' button

- If I remove the 'Read more' functionality it will display all content by default.
- Easiest way to do this is set the 'Read more' number super high.

### Consider adding gradient div bar in the footer