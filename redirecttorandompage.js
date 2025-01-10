function redirectToRandomPage() { 
    // Array of specific pages on the website 
    const pages = [ 
        'https://ohpiglet.github.io//ohpiglet/2011/08/06/due-date/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/06/hola-el-mundo/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/06/there-was-a-sustained-period-of-waiting-around/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/11/el-bebe-y-el-padre/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/11/first-look-and-the-importance-of-stripes/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/11/this-baby-has-a-strong-left-foot-or-maybe-a/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/13/green-no-stripes-posterized/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/13/green-no-stripes/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/13/la-mujer-y-el-bebe/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/13/mona-y-mono/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/13/more-sleeping-more-b-w/',
        'https://ohpiglet.github.io//ohpiglet/2011/08/13/rebecca-loves-b-w-photos/',
    ]; 
    // Generate a random index 
    const randomIndex = Math.floor(Math.random() * pages.length); 
    // Redirect to the randomly selected page 
    window.location.href = pages[randomIndex]; 
} 