$(document).ready(function () {
  // Smoothing Scrolling
  $("a[href^='#']").click(function (e) {
    e.preventDefault()

    let position = $($(this).attr("href")).offset().top - 80;

    $("body, html").animate({
      scrollTop: position
    }, 1000)
  })

  // Ascii Color Rotate
  setInterval(function () {
    $('pre').animate( { color: '#284253' }, 100)
      .animate({ color: '#062437' }, 100)
      .animate({ color: '#F9F9FA' }, 100)
      .animate({ color: '#EBEEEF' }, 100)
      .animate({ color: '#DDE1E4' }, 100)
      .animate({ color: '#CED4D8' }, 100)
      .animate({ color: '#BDC5CA' }, 100)
      .animate({ color: '#AAB4BB' }, 100)
      .animate({ color: '#95A2AA' }, 100)
      .animate({ color: '#7C8B95' }, 100)
      .animate({ color: '#5B6F7B' }, 100)
      .animate({ color: '#7C8B95' }, 100)
      .animate({ color: '#95A2AA' }, 100)
      .animate({ color: '#AAB4BB' }, 100)
      .animate({ color: '#BDC5CA' }, 100)
      .animate({ color: '#CED4D8' }, 100)
      .animate({ color: '#DDE1E4' }, 100)
      .animate({ color: '#EBEEEF' }, 100)
      .animate({ color: '#F9F9FA' }, 100)
      .animate({ color: '#062437' }, 100)
  }, 100)
})

// GitHub API Call
let projectTile = document.querySelectorAll('.project-tile')

projectTile.forEach(t => {
  let title = t.querySelector('h3')
  let paragraph = t.querySelector('p')
  let small = t.querySelector('small')
  title = title.getAttribute('id')
  small.textContent = `(${small.textContent})`

  let url = `https://api.github.com/repos/rom-dos/${title}/languages`

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data)
      let total = 0
      let stats = document.createElement('div')

      function langStats (key, text) {
        let langColorSpan = document.createElement('span')
        let languageSpan = document.createElement('span')

        langColorSpan.classList.add('langColorSpan')

        switch (key) {
          case 'JavaScript':
            langColorSpan.classList.add('js')
            break
          case 'CSS':
            langColorSpan.classList.add('css')
            break
          case 'HTML':
            langColorSpan.classList.add('html')
            break
          case 'Shell':
            langColorSpan.classList.add('shell')
            break
          case 'LilyPond':
          default:
            langColorSpan.classList.add('default-color')
        }

        let languages = ''
        languages += text
        languageSpan.innerText = languages
        languageSpan.classList.add('stats')

        stats.append(langColorSpan, languageSpan)
      }
     
      for (key in data) {
        total += data[key]
      }
      
      for (key in data) {
        let percent = (data[key] / total).toFixed(2)
        if (percent < 0.1) {
          percent = percent.slice(3)
        } else if (percent == 1.00) {
          percent = 100
        } else {
          percent = percent.slice(2)
        }
        langStats(key, `${key}: ${percent}% \n`)
      }

      let lastOne = stats.querySelectorAll('span')
      lastOne = lastOne[lastOne.length - 1]
      // lastOne.textContent = lastOne.textContent.slice(0, lastOne.textContent.length - 2)

      let br = document.createElement('br')
      paragraph.append(br, stats)
    })
    .catch(function (error) {
      console.log(error)
    })
})
