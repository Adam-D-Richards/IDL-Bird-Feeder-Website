let navbar_fallback = `<h3 class="navbar_title">Churchland Bird Feeder</h3>
<nav class="navbar_nav">
    <a class="navbar_link" href="/">Home</a> | <a class="navbar_link" href="/about">About</a>
</nav>
<hr class="navbar_divider">`;

alert("This page is in eary development\nFeatures may not work correctly or be broken alltogether.");
fetch('../pages/navbar.html')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load navbar html doc');
        return response.text(); // Get content as text
    })
    .then(html => {
        document.getElementById('navbardocument').innerHTML = html; // Insert content
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('navbardocument').innerHTML = navbar_fallback;
    });