function drive(direction) {
  const url = '/control/drive'
  const data = { direction }

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(response => {
    if (response !== true && response.error) {
      addAlert(response.error)
    }
  })
  .catch(error => console.error('Error:', error))
}

document.onkeydown = (e) => {
  e = e || window.event

  const directions = {
    32: 'stop',
    37: 'left',
    38: 'forward',
    39: 'right',
    40: 'back',
  }

  const direction = directions[e.keyCode]
  if (direction) {
    drive(direction)
  }
}