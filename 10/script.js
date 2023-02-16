let h1 = document.getElementById('color')
let p = document.createElement('p')
p.id = 'color'
p.textContent = "new replacement element"
h1.parentNode.replaceChild(p, h1)
