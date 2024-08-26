//select box custom
function selectBoxCustom() {
  $('.selectBox').each(function (index) {
    let btn = $(this).find('button')
    let optParent = $(this).find('ul')
    let opt = $(this).find('li')
    let sbWidth = $(this).width()

    $(optParent).width(sbWidth - 2)

    $(btn).on('click', function () {
      $(this).toggleClass('selected')

      if ($(this).hasClass('selected') == true) {
        $('.selectBox').find('ul').slideUp()
        $('.selectBox').find('button').removeClass('selected')
        $(btn).addClass('selected')
        $(this).next('ul').slideDown()
      } else {
        $(this).next('ul').slideUp()
      }
    })

    $(opt).on('click', function () {
      let val = $(this).text()
      $(btn).text(val).css({ color: '#222' }).removeClass('selected').attr('value', val)
      $(optParent).slideUp()
    })
  })
}

//file input custom
function fileUpload() {
  $("input[type='file']").on('change', function () {
    let fileVal = $(this).val()
    $(this).prev().prev('.fileName').val(fileVal).addClass('val')
  })
}

//toggle button
function toggleBtn() {
  $('.toggle').on('click', function () {
    $(this).toggleClass('off')
  })
}

//GNB,LNB
function Gnb() {
  $('nav.top').mouseenter(function () {
    $('.header').next('.subBg').show()
    $(this).find('ul.lnb').show()
    $(this).find('ul.user > li > div').css({ display: 'flex' })
  })

  $('.subBg').mouseleave(function () {
    $('.subBg, ul.lnb').hide()
    $('nav.top').find('ul.lnb, ul.user > li > div').hide()
  })

  $('ul.gnb > li').on('click', function () {
    $('ul.gnb > li').removeClass('current')
    $(this).addClass('current')
  })

  $('ul.lnb> li').on('click', function () {
    $('ul.lnb > li').removeClass('current')
    $(this).addClass('current')
  })
}

//2,3,4depth menu tab
function depthTab() {
  let navSelector = $("nav[class^='depth']")

  $(navSelector).each(function (index) {
    $(this)
      .find('a')
      .on('click', function () {
        $(this).parent('nav').find('a').removeClass('current')
        $(this).addClass('current')
      })
  })
}

//popup position
function popupPosition() {
  $('.popup').each(function (index) {
    let bodyWidth = $(window).width() / 2
    let bodyHeight = $(window).height() / 2.5
    let popLeft = bodyWidth - $(this).width() / 2
    let popTop = bodyHeight - $(this).height() / 2

    $(this).css({ left: popLeft, top: popTop })
    $(this).css({ 'z-index': '101' + index })
  })
}

//popup open
function popupOpen(popID) {
  popupPosition()
  let id = popID
  let index = $('#' + id).css('z-index') - 1
  let dim = "<div class='dim " + id + "' style='z-index:" + index + "'></div>"

  $(dim).appendTo('body')
  $('#' + id).show()
}

//popup close
function popupClose(popID) {
  let id = popID

  $('.' + id).remove()
  $('#' + id).hide()
}

//progress open, close
function progress(progID) {
  let id = progID
  let dim = "<div class='dim " + id + "'></dim>"
  let bar = $('#' + id)
    .find('progress')
    .val()

  $(dim).appendTo('body')
  $('#' + id).show()

  val = 0

  setInterval(function () {
    val += 5
    $('#' + id)
      .find('progress')
      .val(val)
    if (val == 100) {
      $('#' + id).hide()
      $('.' + id).remove()
    }
  }, 100)
}

//donut chart
function donutChart() {
  $('.pieChartWrap').each(function (i) {
    let chart = $(this).find(".pieCircle[class^='pieCircle']")

    let chartName = ['그래프그래프', '그래프와 도넛'] //그래프 명(순서대로)

    let chartData = [
      [25, 15, 24, 16, 20], //첫번째 그래프 데이터
      [50, 15, 15, 15, 5] // 두번째 그래프 데이터
    ] //데이터
    let realData = chartData[i]

    let cahrtLegend = [
      ['범례가', '범례나', '범례다', '범례마', '범례카'], //첫번째 그래프 범례
      ['범례바', '범례사', '범례아', '범례자', '범례차'] //두번째 그래프 범례
    ]
    let realLegend = cahrtLegend[i]

    let r = 75 //반지름
    let val = 2 * 3.1415926536 * r
    let rotate = 0

    $(chart).each(function (index) {
      let valCalc = val - val * (realData[index] / 100)

      if (index !== 0) {
        rotate += realData[index - 1]
      }
      let rotateVal = 3.6 * rotate
      $(this).css({
        'stroke-dashoffset': valCalc,
        'stroke-dasharray': val,
        transform: 'rotate(' + rotateVal + 'deg)'
      })

      $(this).parents('.pieChartWrap').find('.tooltip').attr({ 'aria-val': chartName[i] })

      $(this).mouseenter(function () {
        $(this)
          .parents('.pieChartWrap')
          .find('.tooltip')
          .attr({ 'aria-val': realLegend[index] + realData[index] + '%' })
      })

      $(this).mouseleave(function () {
        $(this).parents('.pieChartWrap').find('.tooltip').attr({ 'aria-val': chartName[i] })
      })
    })
  })
}

//login validation effect
function valiEffect() {
  $('fieldset')
    .find('button')
    .on('click', function () {
      if (!$('fieldset').hasClass('validation')) $('fieldset').addClass('validation')
    })
}
