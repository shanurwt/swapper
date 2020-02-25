const daynightcontainer = document.querySelector('.day-night-container')

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const currentRotation = parseInt(getComputedStyle(daynightcontainer).getPropertyValue('--rotation'))
  daynightcontainer.style.setProperty('--rotation', currentRotation + 180)
})