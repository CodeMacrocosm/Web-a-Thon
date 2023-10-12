document.addEventListener('DOMContentLoaded', function () {
  const btnSwitch = document.querySelector('.switch')

  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
  })
})
