;(function() {

  'use strict'

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  ctx.fillRect(25, 25, 100, 100)
  ctx.clearRect(50, 50, 50, 50)
  ctx.strokeRect(60, 60, 30, 30)

}())