var ua = navigator.userAgent.toLocaleLowerCase()
var isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(ua)

if (isMobile) {
  var width = window.innerWidth - 30
  $('#google-map').attr('width', width)
    .attr('height', width)

  var options = $('#revolutionSlider').attr('data-plugin-options')
  var reg = /('gridheight':\s\d+)/i
  
  options = options.replace(reg, '\'gridheight\': ' + 1170)
  $('#revolutionSlider').attr('data-plugin-options', options)
}