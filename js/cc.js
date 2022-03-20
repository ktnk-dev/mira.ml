author = document.createElement('div')
author.classList.add('aqwhd')
author.innerHTML = "Автор этого шикарного вебсайта:"

an = document.createElement('a')
an.classList.add('andhwdh')
an.href = "https://github.com/ktnk-dev"
an.innerHTML = "@ktnk-dev"

author.appendChild(an)
document.getElementsByTagName('body')[0].appendChild(author)