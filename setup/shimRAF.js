// shim requestAnimationFrame to hide React 16 warning in test env
global.requestAnimationFrame = cb => setTimeout(cb, 0)
