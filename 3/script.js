const x = document.getElementById('parentElement')
const h1 = document.createElement('h1')
h1.textContent = 'My First JavaScript Project'
x.insertBefore(h1,x.firstChild)
