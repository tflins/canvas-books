(() => {
  'use strict'

  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(10, 10, 55, 50)

  ctx.fillStyle = 'rgba(200, 0, 0, 0.5)'
  ctx.fillRect(20, 20, 55, 50)
})()