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
        document.getElementById('navbardocument').innerHTML = '<p>Failed to load navbar. &#128577;</p>';
    });