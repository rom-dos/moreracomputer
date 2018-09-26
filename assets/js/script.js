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
  setInterval(function() {
    $('pre').animate( { color: '#284253' }, 100)
    .animate( { color: '#062437' }, 100)
    .animate( { color: '#F9F9FA' }, 100)
    .animate( { color: '#EBEEEF' }, 100)
    .animate( { color: '#DDE1E4' }, 100)
    .animate( { color: '#CED4D8' }, 100)
    .animate( { color: '#BDC5CA' }, 100)
    .animate( { color: '#AAB4BB' }, 100)
    .animate( { color: '#95A2AA' }, 100)
    .animate( { color: '#7C8B95' }, 100)
    .animate( { color: '#5B6F7B' }, 100)
    .animate( { color: '#7C8B95' }, 100)
    .animate( { color: '#95A2AA' }, 100)
    .animate( { color: '#AAB4BB' }, 100)
    .animate( { color: '#BDC5CA' }, 100)
    .animate( { color: '#CED4D8' }, 100)
    .animate( { color: '#DDE1E4' }, 100)
    .animate( { color: '#EBEEEF' }, 100)
    .animate( { color: '#F9F9FA' }, 100)
    .animate( { color: '#062437' }, 100);
  }, 100);
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
  console.log(url)

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let total = 0
      let languages = ''
      if (Object.keys(data).length === 1) {
        for (key in data) {
          languages += `${key}: 100% \t | `
        }
      } else {
        for (key in data) {
          total += data[key]
        }
        for (key in data) {
          let percent = (data[key] / total).toFixed(2)
          if (percent < 0.1) {
            percent = percent.slice(3)
          } else {
            percent = percent.slice(2)
          }
          languages += `${key}: ${percent}% \t | `
          // console.log(percent)
        }
        // console.log(languages)
      }
      let stats = document.createElement('p')
      stats.innerText = languages.slice(0, languages.length - 3)
      stats.classList.add('stats')
      let br = document.createElement('br')
      paragraph.append(br, stats)
    })
    .catch(function (error) {
      console.log(error)
    })
})
