$(function () {
  $('#container').highcharts({
      title: {
        text: null
      },
      yAxis: {
        title: {
          text: null
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 0,
          borderWidth: 0,
          pointWidth: 4
        },
        treemap: {
          layoutAlgorithm: "squarified"
        },
        bubble: {
          minSize: 5,
          maxSize: 25
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        shared: true,
        useHTML: true,
        headerFormat: "<small>\n  {point.x: %b %d}\n  <br/>\n</small>"
      },
      xAxis: {
        type: "datetime",
        showLastLabel: false,
        dateTimeLabelFormats: {
          month: "%B"
        }
      },
      series: [
        {
          name: "Record",
          data: [
            {
              dt: 1420070400000,
              serie: "Record",
              max: 62,
              min: -4,
              x: 1420070400000,
              low: -4,
              high: 62
            },
            {
              dt: 1420156800000,
              serie: "Record",
              max: 68,
              min: 2,
              x: 1420156800000,
              low: 2,
              high: 68
            },
            {
              dt: 1420243200000,
              serie: "Record",
              max: 64,
              min: -4,
              x: 1420243200000,
              low: -4,
              high: 64
            },
            {
              dt: 1420329600000,
              serie: "Record",
              max: 66,
              min: -3,
              x: 1420329600000,
              low: -3,
              high: 66
            },
            {
              dt: 1420416000000,
              serie: "Record",
              max: 64,
              min: -4,
              x: 1420416000000,
              low: -4,
              high: 64
            },
            {
              dt: 1420502400000,
              serie: "Record",
              max: 72,
              min: -2,
              x: 1420502400000,
              low: -2,
              high: 72
            },
            {
              dt: 1420588800000,
              serie: "Record",
              max: 64,
              min: 4,
              x: 1420588800000,
              low: 4,
              high: 64
            },
            {
              dt: 1420675200000,
              serie: "Record",
              max: 65,
              min: 2,
              x: 1420675200000,
              low: 2,
              high: 65
            },
            {
              dt: 1420761600000,
              serie: "Record",
              max: 64,
              min: -1,
              x: 1420761600000,
              low: -1,
              high: 64
            },
            {
              dt: 1420848000000,
              serie: "Record",
              max: 60,
              min: -6,
              x: 1420848000000,
              low: -6,
              high: 60
            },
            {
              dt: 1420934400000,
              serie: "Record",
              max: 63,
              min: 3,
              x: 1420934400000,
              low: 3,
              high: 63
            },
            {
              dt: 1421020800000,
              serie: "Record",
              max: 64,
              min: 2,
              x: 1421020800000,
              low: 2,
              high: 64
            },
            {
              dt: 1421107200000,
              serie: "Record",
              max: 68,
              min: -3,
              x: 1421107200000,
              low: -3,
              high: 68
            },
            {
              dt: 1421193600000,
              serie: "Record",
              max: 70,
              min: -5,
              x: 1421193600000,
              low: -5,
              high: 70
            },
            {
              dt: 1421280000000,
              serie: "Record",
              max: 67,
              min: 0,
              x: 1421280000000,
              low: 0,
              high: 67
            },
            {
              dt: 1421366400000,
              serie: "Record",
              max: 58,
              min: 1,
              x: 1421366400000,
              low: 1,
              high: 58
            },
            {
              dt: 1421452800000,
              serie: "Record",
              max: 63,
              min: -2,
              x: 1421452800000,
              low: -2,
              high: 63
            },
            {
              dt: 1421539200000,
              serie: "Record",
              max: 66,
              min: 0,
              x: 1421539200000,
              low: 0,
              high: 66
            },
            {
              dt: 1421625600000,
              serie: "Record",
              max: 64,
              min: -2,
              x: 1421625600000,
              low: -2,
              high: 64
            },
            {
              dt: 1421712000000,
              serie: "Record",
              max: 62,
              min: 0,
              x: 1421712000000,
              low: 0,
              high: 62
            },
            {
              dt: 1421798400000,
              serie: "Record",
              max: 63,
              min: -2,
              x: 1421798400000,
              low: -2,
              high: 63
            },
            {
              dt: 1421884800000,
              serie: "Record",
              max: 61,
              min: 0,
              x: 1421884800000,
              low: 0,
              high: 61
            },
            {
              dt: 1421971200000,
              serie: "Record",
              max: 62,
              min: -3,
              x: 1421971200000,
              low: -3,
              high: 62
            },
            {
              dt: 1422057600000,
              serie: "Record",
              max: 68,
              min: -6,
              x: 1422057600000,
              low: -6,
              high: 68
            },
            {
              dt: 1422144000000,
              serie: "Record",
              max: 60,
              min: 2,
              x: 1422144000000,
              low: 2,
              high: 60
            },
            {
              dt: 1422230400000,
              serie: "Record",
              max: 72,
              min: 1,
              x: 1422230400000,
              low: 1,
              high: 72
            },
            {
              dt: 1422316800000,
              serie: "Record",
              max: 69,
              min: -1,
              x: 1422316800000,
              low: -1,
              high: 69
            },
            {
              dt: 1422403200000,
              serie: "Record",
              max: 66,
              min: -2,
              x: 1422403200000,
              low: -2,
              high: 66
            },
            {
              dt: 1422489600000,
              serie: "Record",
              max: 69,
              min: 0,
              x: 1422489600000,
              low: 0,
              high: 69
            },
            {
              dt: 1422576000000,
              serie: "Record",
              max: 64,
              min: 2,
              x: 1422576000000,
              low: 2,
              high: 64
            },
            {
              dt: 1422662400000,
              serie: "Record",
              max: 63,
              min: -1,
              x: 1422662400000,
              low: -1,
              high: 63
            },
            {
              dt: 1422748800000,
              serie: "Record",
              max: 67,
              min: -2,
              x: 1422748800000,
              low: -2,
              high: 67
            },
            {
              dt: 1422835200000,
              serie: "Record",
              max: 59,
              min: -3,
              x: 1422835200000,
              low: -3,
              high: 59
            },
            {
              dt: 1422921600000,
              serie: "Record",
              max: 64,
              min: 0,
              x: 1422921600000,
              low: 0,
              high: 64
            },
            {
              dt: 1423008000000,
              serie: "Record",
              max: 68,
              min: 0,
              x: 1423008000000,
              low: 0,
              high: 68
            },
            {
              dt: 1423094400000,
              serie: "Record",
              max: 70,
              min: -6,
              x: 1423094400000,
              low: -6,
              high: 70
            },
            {
              dt: 1423180800000,
              serie: "Record",
              max: 68,
              min: -4,
              x: 1423180800000,
              low: -4,
              high: 68
            },
            {
              dt: 1423267200000,
              serie: "Record",
              max: 54,
              min: 1,
              x: 1423267200000,
              low: 1,
              high: 54
            },
            {
              dt: 1423353600000,
              serie: "Record",
              max: 61,
              min: -7,
              x: 1423353600000,
              low: -7,
              high: 61
            },
            {
              dt: 1423440000000,
              serie: "Record",
              max: 63,
              min: -15,
              x: 1423440000000,
              low: -15,
              high: 63
            },
            {
              dt: 1423526400000,
              serie: "Record",
              max: 61,
              min: -6,
              x: 1423526400000,
              low: -6,
              high: 61
            },
            {
              dt: 1423612800000,
              serie: "Record",
              max: 65,
              min: -2,
              x: 1423612800000,
              low: -2,
              high: 65
            },
            {
              dt: 1423699200000,
              serie: "Record",
              max: 62,
              min: -3,
              x: 1423699200000,
              low: -3,
              high: 62
            },
            {
              dt: 1423785600000,
              serie: "Record",
              max: 64,
              min: -1,
              x: 1423785600000,
              low: -1,
              high: 64
            },
            {
              dt: 1423872000000,
              serie: "Record",
              max: 63,
              min: 2,
              x: 1423872000000,
              low: 2,
              high: 63
            },
            {
              dt: 1423958400000,
              serie: "Record",
              max: 73,
              min: -8,
              x: 1423958400000,
              low: -8,
              high: 73
            },
            {
              dt: 1424044800000,
              serie: "Record",
              max: 71,
              min: 1,
              x: 1424044800000,
              low: 1,
              high: 71
            },
            {
              dt: 1424131200000,
              serie: "Record",
              max: 67,
              min: -5,
              x: 1424131200000,
              low: -5,
              high: 67
            },
            {
              dt: 1424217600000,
              serie: "Record",
              max: 68,
              min: 0,
              x: 1424217600000,
              low: 0,
              high: 68
            },
            {
              dt: 1424304000000,
              serie: "Record",
              max: 66,
              min: 1,
              x: 1424304000000,
              low: 1,
              high: 66
            },
            {
              dt: 1424390400000,
              serie: "Record",
              max: 69,
              min: 2,
              x: 1424390400000,
              low: 2,
              high: 69
            },
            {
              dt: 1424476800000,
              serie: "Record",
              max: 68,
              min: 4,
              x: 1424476800000,
              low: 4,
              high: 68
            },
            {
              dt: 1424563200000,
              serie: "Record",
              max: 69,
              min: 8,
              x: 1424563200000,
              low: 8,
              high: 69
            },
            {
              dt: 1424649600000,
              serie: "Record",
              max: 70,
              min: 5,
              x: 1424649600000,
              low: 5,
              high: 70
            },
            {
              dt: 1424736000000,
              serie: "Record",
              max: 75,
              min: -1,
              x: 1424736000000,
              low: -1,
              high: 75
            },
            {
              dt: 1424822400000,
              serie: "Record",
              max: 75,
              min: 1,
              x: 1424822400000,
              low: 1,
              high: 75
            },
            {
              dt: 1424908800000,
              serie: "Record",
              max: 65,
              min: 7,
              x: 1424908800000,
              low: 7,
              high: 65
            },
            {
              dt: 1424995200000,
              serie: "Record",
              max: 72,
              min: 5,
              x: 1424995200000,
              low: 5,
              high: 72
            },
            {
              dt: 1425081600000,
              serie: "Record",
              max: 67,
              min: 5,
              x: 1425081600000,
              low: 5,
              high: 67
            },
            {
              dt: 1425168000000,
              serie: "Record",
              max: 73,
              min: 4,
              x: 1425168000000,
              low: 4,
              high: 73
            },
            {
              dt: 1425254400000,
              serie: "Record",
              max: 72,
              min: 9,
              x: 1425254400000,
              low: 9,
              high: 72
            },
            {
              dt: 1425340800000,
              serie: "Record",
              max: 65,
              min: 11,
              x: 1425340800000,
              low: 11,
              high: 65
            },
            {
              dt: 1425427200000,
              serie: "Record",
              max: 70,
              min: 6,
              x: 1425427200000,
              low: 6,
              high: 70
            },
            {
              dt: 1425513600000,
              serie: "Record",
              max: 72,
              min: 3,
              x: 1425513600000,
              low: 3,
              high: 72
            },
            {
              dt: 1425600000000,
              serie: "Record",
              max: 68,
              min: 6,
              x: 1425600000000,
              low: 6,
              high: 68
            },
            {
              dt: 1425686400000,
              serie: "Record",
              max: 74,
              min: 7,
              x: 1425686400000,
              low: 7,
              high: 74
            },
            {
              dt: 1425772800000,
              serie: "Record",
              max: 76,
              min: 8,
              x: 1425772800000,
              low: 8,
              high: 76
            },
            {
              dt: 1425859200000,
              serie: "Record",
              max: 69,
              min: 11,
              x: 1425859200000,
              low: 11,
              high: 69
            },
            {
              dt: 1425945600000,
              serie: "Record",
              max: 74,
              min: 12,
              x: 1425945600000,
              low: 12,
              high: 74
            },
            {
              dt: 1426032000000,
              serie: "Record",
              max: 73,
              min: 14,
              x: 1426032000000,
              low: 14,
              high: 73
            },
            {
              dt: 1426118400000,
              serie: "Record",
              max: 71,
              min: 8,
              x: 1426118400000,
              low: 8,
              high: 71
            },
            {
              dt: 1426204800000,
              serie: "Record",
              max: 85,
              min: 6,
              x: 1426204800000,
              low: 6,
              high: 85
            },
            {
              dt: 1426291200000,
              serie: "Record",
              max: 75,
              min: 8,
              x: 1426291200000,
              low: 8,
              high: 75
            },
            {
              dt: 1426377600000,
              serie: "Record",
              max: 77,
              min: 14,
              x: 1426377600000,
              low: 14,
              high: 77
            },
            {
              dt: 1426464000000,
              serie: "Record",
              max: 82,
              min: 13,
              x: 1426464000000,
              low: 13,
              high: 82
            },
            {
              dt: 1426550400000,
              serie: "Record",
              max: 75,
              min: 9,
              x: 1426550400000,
              low: 9,
              high: 75
            },
            {
              dt: 1426636800000,
              serie: "Record",
              max: 77,
              min: 7,
              x: 1426636800000,
              low: 7,
              high: 77
            },
            {
              dt: 1426723200000,
              serie: "Record",
              max: 76,
              min: 8,
              x: 1426723200000,
              low: 8,
              high: 76
            },
            {
              dt: 1426809600000,
              serie: "Record",
              max: 83,
              min: 11,
              x: 1426809600000,
              low: 11,
              high: 83
            },
            {
              dt: 1426896000000,
              serie: "Record",
              max: 84,
              min: 10,
              x: 1426896000000,
              low: 10,
              high: 84
            },
            {
              dt: 1426982400000,
              serie: "Record",
              max: 78,
              min: 12,
              x: 1426982400000,
              low: 12,
              high: 78
            },
            {
              dt: 1427068800000,
              serie: "Record",
              max: 76,
              min: 12,
              x: 1427068800000,
              low: 12,
              high: 76
            },
            {
              dt: 1427155200000,
              serie: "Record",
              max: 76,
              min: 12,
              x: 1427155200000,
              low: 12,
              high: 76
            },
            {
              dt: 1427241600000,
              serie: "Record",
              max: 79,
              min: 13,
              x: 1427241600000,
              low: 13,
              high: 79
            },
            {
              dt: 1427328000000,
              serie: "Record",
              max: 76,
              min: 20,
              x: 1427328000000,
              low: 20,
              high: 76
            },
            {
              dt: 1427414400000,
              serie: "Record",
              max: 83,
              min: 20,
              x: 1427414400000,
              low: 20,
              high: 83
            },
            {
              dt: 1427500800000,
              serie: "Record",
              max: 84,
              min: 13,
              x: 1427500800000,
              low: 13,
              high: 84
            },
            {
              dt: 1427587200000,
              serie: "Record",
              max: 86,
              min: 10,
              x: 1427587200000,
              low: 10,
              high: 86
            },
            {
              dt: 1427673600000,
              serie: "Record",
              max: 82,
              min: 16,
              x: 1427673600000,
              low: 16,
              high: 82
            },
            {
              dt: 1427760000000,
              serie: "Record",
              max: 86,
              min: 14,
              x: 1427760000000,
              low: 14,
              high: 86
            },
            {
              dt: 1427846400000,
              serie: "Record",
              max: 83,
              min: 12,
              x: 1427846400000,
              low: 12,
              high: 83
            },
            {
              dt: 1427932800000,
              serie: "Record",
              max: 81,
              min: 22,
              x: 1427932800000,
              low: 22,
              high: 81
            },
            {
              dt: 1428019200000,
              serie: "Record",
              max: 81,
              min: 24,
              x: 1428019200000,
              low: 24,
              high: 81
            },
            {
              dt: 1428105600000,
              serie: "Record",
              max: 80,
              min: 21,
              x: 1428105600000,
              low: 21,
              high: 80
            },
            {
              dt: 1428192000000,
              serie: "Record",
              max: 80,
              min: 20,
              x: 1428192000000,
              low: 20,
              high: 80
            },
            {
              dt: 1428278400000,
              serie: "Record",
              max: 79,
              min: 21,
              x: 1428278400000,
              low: 21,
              high: 79
            },
            {
              dt: 1428364800000,
              serie: "Record",
              max: 92,
              min: 21,
              x: 1428364800000,
              low: 21,
              high: 92
            },
            {
              dt: 1428451200000,
              serie: "Record",
              max: 90,
              min: 25,
              x: 1428451200000,
              low: 25,
              high: 90
            },
            {
              dt: 1428537600000,
              serie: "Record",
              max: 86,
              min: 25,
              x: 1428537600000,
              low: 25,
              high: 86
            },
            {
              dt: 1428624000000,
              serie: "Record",
              max: 86,
              min: 28,
              x: 1428624000000,
              low: 28,
              high: 86
            },
            {
              dt: 1428710400000,
              serie: "Record",
              max: 84,
              min: 24,
              x: 1428710400000,
              low: 24,
              high: 84
            },
            {
              dt: 1428796800000,
              serie: "Record",
              max: 90,
              min: 22,
              x: 1428796800000,
              low: 22,
              high: 90
            },
            {
              dt: 1428883200000,
              serie: "Record",
              max: 88,
              min: 22,
              x: 1428883200000,
              low: 22,
              high: 88
            },
            {
              dt: 1428969600000,
              serie: "Record",
              max: 85,
              min: 26,
              x: 1428969600000,
              low: 26,
              high: 85
            },
            {
              dt: 1429056000000,
              serie: "Record",
              max: 87,
              min: 28,
              x: 1429056000000,
              low: 28,
              high: 87
            },
            {
              dt: 1429142400000,
              serie: "Record",
              max: 92,
              min: 29,
              x: 1429142400000,
              low: 29,
              high: 92
            },
            {
              dt: 1429228800000,
              serie: "Record",
              max: 96,
              min: 28,
              x: 1429228800000,
              low: 28,
              high: 96
            },
            {
              dt: 1429315200000,
              serie: "Record",
              max: 96,
              min: 25,
              x: 1429315200000,
              low: 25,
              high: 96
            },
            {
              dt: 1429401600000,
              serie: "Record",
              max: 92,
              min: 21,
              x: 1429401600000,
              low: 21,
              high: 92
            },
            {
              dt: 1429488000000,
              serie: "Record",
              max: 90,
              min: 24,
              x: 1429488000000,
              low: 24,
              high: 90
            },
            {
              dt: 1429574400000,
              serie: "Record",
              max: 87,
              min: 26,
              x: 1429574400000,
              low: 26,
              high: 87
            },
            {
              dt: 1429660800000,
              serie: "Record",
              max: 86,
              min: 33,
              x: 1429660800000,
              low: 33,
              high: 86
            },
            {
              dt: 1429747200000,
              serie: "Record",
              max: 86,
              min: 32,
              x: 1429747200000,
              low: 32,
              high: 86
            },
            {
              dt: 1429833600000,
              serie: "Record",
              max: 87,
              min: 31,
              x: 1429833600000,
              low: 31,
              high: 87
            },
            {
              dt: 1429920000000,
              serie: "Record",
              max: 91,
              min: 29,
              x: 1429920000000,
              low: 29,
              high: 91
            },
            {
              dt: 1430006400000,
              serie: "Record",
              max: 92,
              min: 31,
              x: 1430006400000,
              low: 31,
              high: 92
            },
            {
              dt: 1430092800000,
              serie: "Record",
              max: 92,
              min: 36,
              x: 1430092800000,
              low: 36,
              high: 92
            },
            {
              dt: 1430179200000,
              serie: "Record",
              max: 90,
              min: 31,
              x: 1430179200000,
              low: 31,
              high: 90
            },
            {
              dt: 1430265600000,
              serie: "Record",
              max: 89,
              min: 32,
              x: 1430265600000,
              low: 32,
              high: 89
            },
            {
              dt: 1430352000000,
              serie: "Record",
              max: 91,
              min: 30,
              x: 1430352000000,
              low: 30,
              high: 91
            },
            {
              dt: 1430438400000,
              serie: "Record",
              max: 87,
              min: 35,
              x: 1430438400000,
              low: 35,
              high: 87
            },
            {
              dt: 1430524800000,
              serie: "Record",
              max: 90,
              min: 37,
              x: 1430524800000,
              low: 37,
              high: 90
            },
            {
              dt: 1430611200000,
              serie: "Record",
              max: 90,
              min: 36,
              x: 1430611200000,
              low: 36,
              high: 90
            },
            {
              dt: 1430697600000,
              serie: "Record",
              max: 92,
              min: 38,
              x: 1430697600000,
              low: 38,
              high: 92
            },
            {
              dt: 1430784000000,
              serie: "Record",
              max: 90,
              min: 34,
              x: 1430784000000,
              low: 34,
              high: 90
            },
            {
              dt: 1430870400000,
              serie: "Record",
              max: 92,
              min: 32,
              x: 1430870400000,
              low: 32,
              high: 92
            },
            {
              dt: 1430956800000,
              serie: "Record",
              max: 93,
              min: 37,
              x: 1430956800000,
              low: 37,
              high: 93
            },
            {
              dt: 1431043200000,
              serie: "Record",
              max: 91,
              min: 37,
              x: 1431043200000,
              low: 37,
              high: 91
            },
            {
              dt: 1431129600000,
              serie: "Record",
              max: 94,
              min: 35,
              x: 1431129600000,
              low: 35,
              high: 94
            },
            {
              dt: 1431216000000,
              serie: "Record",
              max: 94,
              min: 36,
              x: 1431216000000,
              low: 36,
              high: 94
            },
            {
              dt: 1431302400000,
              serie: "Record",
              max: 92,
              min: 36,
              x: 1431302400000,
              low: 36,
              high: 92
            },
            {
              dt: 1431388800000,
              serie: "Record",
              max: 93,
              min: 40,
              x: 1431388800000,
              low: 40,
              high: 93
            },
            {
              dt: 1431475200000,
              serie: "Record",
              max: 89,
              min: 39,
              x: 1431475200000,
              low: 39,
              high: 89
            },
            {
              dt: 1431561600000,
              serie: "Record",
              max: 88,
              min: 40,
              x: 1431561600000,
              low: 40,
              high: 88
            },
            {
              dt: 1431648000000,
              serie: "Record",
              max: 90,
              min: 42,
              x: 1431648000000,
              low: 42,
              high: 90
            },
            {
              dt: 1431734400000,
              serie: "Record",
              max: 90,
              min: 42,
              x: 1431734400000,
              low: 42,
              high: 90
            },
            {
              dt: 1431820800000,
              serie: "Record",
              max: 92,
              min: 39,
              x: 1431820800000,
              low: 39,
              high: 92
            },
            {
              dt: 1431907200000,
              serie: "Record",
              max: 90,
              min: 41,
              x: 1431907200000,
              low: 41,
              high: 90
            },
            {
              dt: 1431993600000,
              serie: "Record",
              max: 99,
              min: 38,
              x: 1431993600000,
              low: 38,
              high: 99
            },
            {
              dt: 1432080000000,
              serie: "Record",
              max: 96,
              min: 43,
              x: 1432080000000,
              low: 43,
              high: 96
            },
            {
              dt: 1432166400000,
              serie: "Record",
              max: 93,
              min: 40,
              x: 1432166400000,
              low: 40,
              high: 93
            },
            {
              dt: 1432252800000,
              serie: "Record",
              max: 96,
              min: 44,
              x: 1432252800000,
              low: 44,
              high: 96
            },
            {
              dt: 1432339200000,
              serie: "Record",
              max: 94,
              min: 43,
              x: 1432339200000,
              low: 43,
              high: 94
            },
            {
              dt: 1432425600000,
              serie: "Record",
              max: 93,
              min: 39,
              x: 1432425600000,
              low: 39,
              high: 93
            },
            {
              dt: 1432512000000,
              serie: "Record",
              max: 95,
              min: 41,
              x: 1432512000000,
              low: 41,
              high: 95
            },
            {
              dt: 1432598400000,
              serie: "Record",
              max: 95,
              min: 42,
              x: 1432598400000,
              low: 42,
              high: 95
            },
            {
              dt: 1432684800000,
              serie: "Record",
              max: 96,
              min: 41,
              x: 1432684800000,
              low: 41,
              high: 96
            },
            {
              dt: 1432771200000,
              serie: "Record",
              max: 94,
              min: 43,
              x: 1432771200000,
              low: 43,
              high: 94
            },
            {
              dt: 1432857600000,
              serie: "Record",
              max: 97,
              min: 43,
              x: 1432857600000,
              low: 43,
              high: 97
            },
            {
              dt: 1432944000000,
              serie: "Record",
              max: 97,
              min: 42,
              x: 1432944000000,
              low: 42,
              high: 97
            },
            {
              dt: 1433030400000,
              serie: "Record",
              max: 96,
              min: 46,
              x: 1433030400000,
              low: 46,
              high: 96
            },
            {
              dt: 1433116800000,
              serie: "Record",
              max: 96,
              min: 44,
              x: 1433116800000,
              low: 44,
              high: 96
            },
            {
              dt: 1433203200000,
              serie: "Record",
              max: 96,
              min: 48,
              x: 1433203200000,
              low: 48,
              high: 96
            },
            {
              dt: 1433289600000,
              serie: "Record",
              max: 95,
              min: 45,
              x: 1433289600000,
              low: 45,
              high: 95
            },
            {
              dt: 1433376000000,
              serie: "Record",
              max: 99,
              min: 48,
              x: 1433376000000,
              low: 48,
              high: 99
            },
            {
              dt: 1433462400000,
              serie: "Record",
              max: 99,
              min: 47,
              x: 1433462400000,
              low: 47,
              high: 99
            },
            {
              dt: 1433548800000,
              serie: "Record",
              max: 98,
              min: 47,
              x: 1433548800000,
              low: 47,
              high: 98
            },
            {
              dt: 1433635200000,
              serie: "Record",
              max: 96,
              min: 47,
              x: 1433635200000,
              low: 47,
              high: 96
            },
            {
              dt: 1433721600000,
              serie: "Record",
              max: 95,
              min: 47,
              x: 1433721600000,
              low: 47,
              high: 95
            },
            {
              dt: 1433808000000,
              serie: "Record",
              max: 97,
              min: 47,
              x: 1433808000000,
              low: 47,
              high: 97
            },
            {
              dt: 1433894400000,
              serie: "Record",
              max: 96,
              min: 49,
              x: 1433894400000,
              low: 49,
              high: 96
            },
            {
              dt: 1433980800000,
              serie: "Record",
              max: 95,
              min: 46,
              x: 1433980800000,
              low: 46,
              high: 95
            },
            {
              dt: 1434067200000,
              serie: "Record",
              max: 93,
              min: 48,
              x: 1434067200000,
              low: 48,
              high: 93
            },
            {
              dt: 1434153600000,
              serie: "Record",
              max: 96,
              min: 51,
              x: 1434153600000,
              low: 51,
              high: 96
            },
            {
              dt: 1434240000000,
              serie: "Record",
              max: 99,
              min: 49,
              x: 1434240000000,
              low: 49,
              high: 99
            },
            {
              dt: 1434326400000,
              serie: "Record",
              max: 96,
              min: 48,
              x: 1434326400000,
              low: 48,
              high: 96
            },
            {
              dt: 1434412800000,
              serie: "Record",
              max: 97,
              min: 52,
              x: 1434412800000,
              low: 52,
              high: 97
            },
            {
              dt: 1434499200000,
              serie: "Record",
              max: 96,
              min: 51,
              x: 1434499200000,
              low: 51,
              high: 96
            },
            {
              dt: 1434585600000,
              serie: "Record",
              max: 95,
              min: 48,
              x: 1434585600000,
              low: 48,
              high: 95
            },
            {
              dt: 1434672000000,
              serie: "Record",
              max: 98,
              min: 52,
              x: 1434672000000,
              low: 52,
              high: 98
            },
            {
              dt: 1434758400000,
              serie: "Record",
              max: 98,
              min: 49,
              x: 1434758400000,
              low: 49,
              high: 98
            },
            {
              dt: 1434844800000,
              serie: "Record",
              max: 97,
              min: 49,
              x: 1434844800000,
              low: 49,
              high: 97
            },
            {
              dt: 1434931200000,
              serie: "Record",
              max: 98,
              min: 52,
              x: 1434931200000,
              low: 52,
              high: 98
            },
            {
              dt: 1435017600000,
              serie: "Record",
              max: 96,
              min: 49,
              x: 1435017600000,
              low: 49,
              high: 96
            },
            {
              dt: 1435104000000,
              serie: "Record",
              max: 96,
              min: 52,
              x: 1435104000000,
              low: 52,
              high: 96
            },
            {
              dt: 1435190400000,
              serie: "Record",
              max: 99,
              min: 50,
              x: 1435190400000,
              low: 50,
              high: 99
            },
            {
              dt: 1435276800000,
              serie: "Record",
              max: 100,
              min: 56,
              x: 1435276800000,
              low: 56,
              high: 100
            },
            {
              dt: 1435363200000,
              serie: "Record",
              max: 101,
              min: 55,
              x: 1435363200000,
              low: 55,
              high: 101
            },
            {
              dt: 1435449600000,
              serie: "Record",
              max: 96,
              min: 54,
              x: 1435449600000,
              low: 54,
              high: 96
            },
            {
              dt: 1435536000000,
              serie: "Record",
              max: 101,
              min: 52,
              x: 1435536000000,
              low: 52,
              high: 101
            },
            {
              dt: 1435622400000,
              serie: "Record",
              max: 99,
              min: 53,
              x: 1435622400000,
              low: 53,
              high: 99
            },
            {
              dt: 1435708800000,
              serie: "Record",
              max: 100,
              min: 52,
              x: 1435708800000,
              low: 52,
              high: 100
            },
            {
              dt: 1435795200000,
              serie: "Record",
              max: 100,
              min: 56,
              x: 1435795200000,
              low: 56,
              high: 100
            },
            {
              dt: 1435881600000,
              serie: "Record",
              max: 103,
              min: 54,
              x: 1435881600000,
              low: 54,
              high: 103
            },
            {
              dt: 1435968000000,
              serie: "Record",
              max: 102,
              min: 55,
              x: 1435968000000,
              low: 55,
              high: 102
            },
            {
              dt: 1436054400000,
              serie: "Record",
              max: 101,
              min: 53,
              x: 1436054400000,
              low: 53,
              high: 101
            },
            {
              dt: 1436140800000,
              serie: "Record",
              max: 103,
              min: 54,
              x: 1436140800000,
              low: 54,
              high: 103
            },
            {
              dt: 1436227200000,
              serie: "Record",
              max: 100,
              min: 56,
              x: 1436227200000,
              low: 56,
              high: 100
            },
            {
              dt: 1436313600000,
              serie: "Record",
              max: 100,
              min: 56,
              x: 1436313600000,
              low: 56,
              high: 100
            },
            {
              dt: 1436400000000,
              serie: "Record",
              max: 106,
              min: 54,
              x: 1436400000000,
              low: 54,
              high: 106
            },
            {
              dt: 1436486400000,
              serie: "Record",
              max: 102,
              min: 55,
              x: 1436486400000,
              low: 55,
              high: 102
            },
            {
              dt: 1436572800000,
              serie: "Record",
              max: 98,
              min: 57,
              x: 1436572800000,
              low: 57,
              high: 98
            },
            {
              dt: 1436659200000,
              serie: "Record",
              max: 99,
              min: 57,
              x: 1436659200000,
              low: 57,
              high: 99
            },
            {
              dt: 1436745600000,
              serie: "Record",
              max: 101,
              min: 54,
              x: 1436745600000,
              low: 54,
              high: 101
            },
            {
              dt: 1436832000000,
              serie: "Record",
              max: 100,
              min: 58,
              x: 1436832000000,
              low: 58,
              high: 100
            },
            {
              dt: 1436918400000,
              serie: "Record",
              max: 102,
              min: 57,
              x: 1436918400000,
              low: 57,
              high: 102
            },
            {
              dt: 1437004800000,
              serie: "Record",
              max: 99,
              min: 56,
              x: 1437004800000,
              low: 56,
              high: 99
            },
            {
              dt: 1437091200000,
              serie: "Record",
              max: 100,
              min: 57,
              x: 1437091200000,
              low: 57,
              high: 100
            },
            {
              dt: 1437177600000,
              serie: "Record",
              max: 101,
              min: 57,
              x: 1437177600000,
              low: 57,
              high: 101
            },
            {
              dt: 1437264000000,
              serie: "Record",
              max: 102,
              min: 57,
              x: 1437264000000,
              low: 57,
              high: 102
            },
            {
              dt: 1437350400000,
              serie: "Record",
              max: 101,
              min: 55,
              x: 1437350400000,
              low: 55,
              high: 101
            },
            {
              dt: 1437436800000,
              serie: "Record",
              max: 104,
              min: 55,
              x: 1437436800000,
              low: 55,
              high: 104
            },
            {
              dt: 1437523200000,
              serie: "Record",
              max: 104,
              min: 55,
              x: 1437523200000,
              low: 55,
              high: 104
            },
            {
              dt: 1437609600000,
              serie: "Record",
              max: 100,
              min: 58,
              x: 1437609600000,
              low: 58,
              high: 100
            },
            {
              dt: 1437696000000,
              serie: "Record",
              max: 97,
              min: 56,
              x: 1437696000000,
              low: 56,
              high: 97
            },
            {
              dt: 1437782400000,
              serie: "Record",
              max: 97,
              min: 57,
              x: 1437782400000,
              low: 57,
              high: 97
            },
            {
              dt: 1437868800000,
              serie: "Record",
              max: 98,
              min: 55,
              x: 1437868800000,
              low: 55,
              high: 98
            },
            {
              dt: 1437955200000,
              serie: "Record",
              max: 98,
              min: 55,
              x: 1437955200000,
              low: 55,
              high: 98
            },
            {
              dt: 1438041600000,
              serie: "Record",
              max: 97,
              min: 57,
              x: 1438041600000,
              low: 57,
              high: 97
            },
            {
              dt: 1438128000000,
              serie: "Record",
              max: 99,
              min: 59,
              x: 1438128000000,
              low: 59,
              high: 99
            },
            {
              dt: 1438214400000,
              serie: "Record",
              max: 98,
              min: 57,
              x: 1438214400000,
              low: 57,
              high: 98
            },
            {
              dt: 1438300800000,
              serie: "Record",
              max: 102,
              min: 57,
              x: 1438300800000,
              low: 57,
              high: 102
            },
            {
              dt: 1438387200000,
              serie: "Record",
              max: 100,
              min: 59,
              x: 1438387200000,
              low: 59,
              high: 100
            },
            {
              dt: 1438473600000,
              serie: "Record",
              max: 100,
              min: 58,
              x: 1438473600000,
              low: 58,
              high: 100
            },
            {
              dt: 1438560000000,
              serie: "Record",
              max: 97,
              min: 55,
              x: 1438560000000,
              low: 55,
              high: 97
            },
            {
              dt: 1438646400000,
              serie: "Record",
              max: 100,
              min: 56,
              x: 1438646400000,
              low: 56,
              high: 100
            },
            {
              dt: 1438732800000,
              serie: "Record",
              max: 101,
              min: 56,
              x: 1438732800000,
              low: 56,
              high: 101
            },
            {
              dt: 1438819200000,
              serie: "Record",
              max: 97,
              min: 57,
              x: 1438819200000,
              low: 57,
              high: 97
            },
            {
              dt: 1438905600000,
              serie: "Record",
              max: 104,
              min: 57,
              x: 1438905600000,
              low: 57,
              high: 104
            },
            {
              dt: 1438992000000,
              serie: "Record",
              max: 99,
              min: 54,
              x: 1438992000000,
              low: 54,
              high: 99
            },
            {
              dt: 1439078400000,
              serie: "Record",
              max: 103,
              min: 57,
              x: 1439078400000,
              low: 57,
              high: 103
            },
            {
              dt: 1439164800000,
              serie: "Record",
              max: 98,
              min: 55,
              x: 1439164800000,
              low: 55,
              high: 98
            },
            {
              dt: 1439251200000,
              serie: "Record",
              max: 102,
              min: 56,
              x: 1439251200000,
              low: 56,
              high: 102
            },
            {
              dt: 1439337600000,
              serie: "Record",
              max: 97,
              min: 55,
              x: 1439337600000,
              low: 55,
              high: 97
            },
            {
              dt: 1439424000000,
              serie: "Record",
              max: 99,
              min: 55,
              x: 1439424000000,
              low: 55,
              high: 99
            },
            {
              dt: 1439510400000,
              serie: "Record",
              max: 99,
              min: 54,
              x: 1439510400000,
              low: 54,
              high: 99
            },
            {
              dt: 1439596800000,
              serie: "Record",
              max: 97,
              min: 54,
              x: 1439596800000,
              low: 54,
              high: 97
            },
            {
              dt: 1439683200000,
              serie: "Record",
              max: 96,
              min: 55,
              x: 1439683200000,
              low: 55,
              high: 96
            },
            {
              dt: 1439769600000,
              serie: "Record",
              max: 95,
              min: 56,
              x: 1439769600000,
              low: 56,
              high: 95
            },
            {
              dt: 1439856000000,
              serie: "Record",
              max: 94,
              min: 55,
              x: 1439856000000,
              low: 55,
              high: 94
            },
            {
              dt: 1439942400000,
              serie: "Record",
              max: 94,
              min: 55,
              x: 1439942400000,
              low: 55,
              high: 94
            },
            {
              dt: 1440028800000,
              serie: "Record",
              max: 97,
              min: 55,
              x: 1440028800000,
              low: 55,
              high: 97
            },
            {
              dt: 1440115200000,
              serie: "Record",
              max: 96,
              min: 53,
              x: 1440115200000,
              low: 53,
              high: 96
            },
            {
              dt: 1440201600000,
              serie: "Record",
              max: 95,
              min: 52,
              x: 1440201600000,
              low: 52,
              high: 95
            },
            {
              dt: 1440288000000,
              serie: "Record",
              max: 92,
              min: 51,
              x: 1440288000000,
              low: 51,
              high: 92
            },
            {
              dt: 1440374400000,
              serie: "Record",
              max: 94,
              min: 52,
              x: 1440374400000,
              low: 52,
              high: 94
            },
            {
              dt: 1440460800000,
              serie: "Record",
              max: 95,
              min: 52,
              x: 1440460800000,
              low: 52,
              high: 95
            },
            {
              dt: 1440547200000,
              serie: "Record",
              max: 103,
              min: 53,
              x: 1440547200000,
              low: 53,
              high: 103
            },
            {
              dt: 1440633600000,
              serie: "Record",
              max: 101,
              min: 50,
              x: 1440633600000,
              low: 50,
              high: 101
            },
            {
              dt: 1440720000000,
              serie: "Record",
              max: 100,
              min: 50,
              x: 1440720000000,
              low: 50,
              high: 100
            },
            {
              dt: 1440806400000,
              serie: "Record",
              max: 99,
              min: 50,
              x: 1440806400000,
              low: 50,
              high: 99
            },
            {
              dt: 1440892800000,
              serie: "Record",
              max: 98,
              min: 50,
              x: 1440892800000,
              low: 50,
              high: 98
            },
            {
              dt: 1440979200000,
              serie: "Record",
              max: 100,
              min: 50,
              x: 1440979200000,
              low: 50,
              high: 100
            },
            {
              dt: 1441065600000,
              serie: "Record",
              max: 97,
              min: 52,
              x: 1441065600000,
              low: 52,
              high: 97
            },
            {
              dt: 1441152000000,
              serie: "Record",
              max: 102,
              min: 51,
              x: 1441152000000,
              low: 51,
              high: 102
            },
            {
              dt: 1441238400000,
              serie: "Record",
              max: 99,
              min: 50,
              x: 1441238400000,
              low: 50,
              high: 99
            },
            {
              dt: 1441324800000,
              serie: "Record",
              max: 97,
              min: 47,
              x: 1441324800000,
              low: 47,
              high: 97
            },
            {
              dt: 1441411200000,
              serie: "Record",
              max: 94,
              min: 51,
              x: 1441411200000,
              low: 51,
              high: 94
            },
            {
              dt: 1441497600000,
              serie: "Record",
              max: 97,
              min: 48,
              x: 1441497600000,
              low: 48,
              high: 97
            },
            {
              dt: 1441584000000,
              serie: "Record",
              max: 101,
              min: 46,
              x: 1441584000000,
              low: 46,
              high: 101
            },
            {
              dt: 1441670400000,
              serie: "Record",
              max: 97,
              min: 54,
              x: 1441670400000,
              low: 54,
              high: 97
            },
            {
              dt: 1441756800000,
              serie: "Record",
              max: 94,
              min: 48,
              x: 1441756800000,
              low: 48,
              high: 94
            },
            {
              dt: 1441843200000,
              serie: "Record",
              max: 97,
              min: 43,
              x: 1441843200000,
              low: 43,
              high: 97
            },
            {
              dt: 1441929600000,
              serie: "Record",
              max: 99,
              min: 43,
              x: 1441929600000,
              low: 43,
              high: 99
            },
            {
              dt: 1442016000000,
              serie: "Record",
              max: 94,
              min: 46,
              x: 1442016000000,
              low: 46,
              high: 94
            },
            {
              dt: 1442102400000,
              serie: "Record",
              max: 94,
              min: 46,
              x: 1442102400000,
              low: 46,
              high: 94
            },
            {
              dt: 1442188800000,
              serie: "Record",
              max: 93,
              min: 46,
              x: 1442188800000,
              low: 46,
              high: 93
            },
            {
              dt: 1442275200000,
              serie: "Record",
              max: 92,
              min: 44,
              x: 1442275200000,
              low: 44,
              high: 92
            },
            {
              dt: 1442361600000,
              serie: "Record",
              max: 93,
              min: 47,
              x: 1442361600000,
              low: 47,
              high: 93
            },
            {
              dt: 1442448000000,
              serie: "Record",
              max: 93,
              min: 45,
              x: 1442448000000,
              low: 45,
              high: 93
            },
            {
              dt: 1442534400000,
              serie: "Record",
              max: 91,
              min: 44,
              x: 1442534400000,
              low: 44,
              high: 91
            },
            {
              dt: 1442620800000,
              serie: "Record",
              max: 94,
              min: 44,
              x: 1442620800000,
              low: 44,
              high: 94
            },
            {
              dt: 1442707200000,
              serie: "Record",
              max: 93,
              min: 44,
              x: 1442707200000,
              low: 44,
              high: 93
            },
            {
              dt: 1442793600000,
              serie: "Record",
              max: 95,
              min: 40,
              x: 1442793600000,
              low: 40,
              high: 95
            },
            {
              dt: 1442880000000,
              serie: "Record",
              max: 95,
              min: 41,
              x: 1442880000000,
              low: 41,
              high: 95
            },
            {
              dt: 1442966400000,
              serie: "Record",
              max: 97,
              min: 41,
              x: 1442966400000,
              low: 41,
              high: 97
            },
            {
              dt: 1443052800000,
              serie: "Record",
              max: 89,
              min: 40,
              x: 1443052800000,
              low: 40,
              high: 89
            },
            {
              dt: 1443139200000,
              serie: "Record",
              max: 90,
              min: 40,
              x: 1443139200000,
              low: 40,
              high: 90
            },
            {
              dt: 1443225600000,
              serie: "Record",
              max: 91,
              min: 42,
              x: 1443225600000,
              low: 42,
              high: 91
            },
            {
              dt: 1443312000000,
              serie: "Record",
              max: 90,
              min: 41,
              x: 1443312000000,
              low: 41,
              high: 90
            },
            {
              dt: 1443398400000,
              serie: "Record",
              max: 88,
              min: 41,
              x: 1443398400000,
              low: 41,
              high: 88
            },
            {
              dt: 1443484800000,
              serie: "Record",
              max: 88,
              min: 42,
              x: 1443484800000,
              low: 42,
              high: 88
            },
            {
              dt: 1443571200000,
              serie: "Record",
              max: 89,
              min: 39,
              x: 1443571200000,
              low: 39,
              high: 89
            },
            {
              dt: 1443657600000,
              serie: "Record",
              max: 88,
              min: 36,
              x: 1443657600000,
              low: 36,
              high: 88
            },
            {
              dt: 1443744000000,
              serie: "Record",
              max: 90,
              min: 39,
              x: 1443744000000,
              low: 39,
              high: 90
            },
            {
              dt: 1443830400000,
              serie: "Record",
              max: 87,
              min: 38,
              x: 1443830400000,
              low: 38,
              high: 87
            },
            {
              dt: 1443916800000,
              serie: "Record",
              max: 88,
              min: 37,
              x: 1443916800000,
              low: 37,
              high: 88
            },
            {
              dt: 1444003200000,
              serie: "Record",
              max: 94,
              min: 35,
              x: 1444003200000,
              low: 35,
              high: 94
            },
            {
              dt: 1444089600000,
              serie: "Record",
              max: 90,
              min: 36,
              x: 1444089600000,
              low: 36,
              high: 90
            },
            {
              dt: 1444176000000,
              serie: "Record",
              max: 88,
              min: 39,
              x: 1444176000000,
              low: 39,
              high: 88
            },
            {
              dt: 1444262400000,
              serie: "Record",
              max: 87,
              min: 37,
              x: 1444262400000,
              low: 37,
              high: 87
            },
            {
              dt: 1444348800000,
              serie: "Record",
              max: 86,
              min: 37,
              x: 1444348800000,
              low: 37,
              high: 86
            },
            {
              dt: 1444435200000,
              serie: "Record",
              max: 91,
              min: 35,
              x: 1444435200000,
              low: 35,
              high: 91
            },
            {
              dt: 1444521600000,
              serie: "Record",
              max: 85,
              min: 34,
              x: 1444521600000,
              low: 34,
              high: 85
            },
            {
              dt: 1444608000000,
              serie: "Record",
              max: 86,
              min: 35,
              x: 1444608000000,
              low: 35,
              high: 86
            },
            {
              dt: 1444694400000,
              serie: "Record",
              max: 87,
              min: 34,
              x: 1444694400000,
              low: 34,
              high: 87
            },
            {
              dt: 1444780800000,
              serie: "Record",
              max: 84,
              min: 37,
              x: 1444780800000,
              low: 37,
              high: 84
            },
            {
              dt: 1444867200000,
              serie: "Record",
              max: 84,
              min: 32,
              x: 1444867200000,
              low: 32,
              high: 84
            },
            {
              dt: 1444953600000,
              serie: "Record",
              max: 87,
              min: 34,
              x: 1444953600000,
              low: 34,
              high: 87
            },
            {
              dt: 1445040000000,
              serie: "Record",
              max: 90,
              min: 33,
              x: 1445040000000,
              low: 33,
              high: 90
            },
            {
              dt: 1445126400000,
              serie: "Record",
              max: 82,
              min: 35,
              x: 1445126400000,
              low: 35,
              high: 82
            },
            {
              dt: 1445212800000,
              serie: "Record",
              max: 83,
              min: 30,
              x: 1445212800000,
              low: 30,
              high: 83
            },
            {
              dt: 1445299200000,
              serie: "Record",
              max: 80,
              min: 31,
              x: 1445299200000,
              low: 31,
              high: 80
            },
            {
              dt: 1445385600000,
              serie: "Record",
              max: 84,
              min: 31,
              x: 1445385600000,
              low: 31,
              high: 84
            },
            {
              dt: 1445472000000,
              serie: "Record",
              max: 88,
              min: 30,
              x: 1445472000000,
              low: 30,
              high: 88
            },
            {
              dt: 1445558400000,
              serie: "Record",
              max: 85,
              min: 32,
              x: 1445558400000,
              low: 32,
              high: 85
            },
            {
              dt: 1445644800000,
              serie: "Record",
              max: 79,
              min: 31,
              x: 1445644800000,
              low: 31,
              high: 79
            },
            {
              dt: 1445731200000,
              serie: "Record",
              max: 79,
              min: 29,
              x: 1445731200000,
              low: 29,
              high: 79
            },
            {
              dt: 1445817600000,
              serie: "Record",
              max: 78,
              min: 30,
              x: 1445817600000,
              low: 30,
              high: 78
            },
            {
              dt: 1445904000000,
              serie: "Record",
              max: 82,
              min: 28,
              x: 1445904000000,
              low: 28,
              high: 82
            },
            {
              dt: 1445990400000,
              serie: "Record",
              max: 83,
              min: 29,
              x: 1445990400000,
              low: 29,
              high: 83
            },
            {
              dt: 1446076800000,
              serie: "Record",
              max: 78,
              min: 31,
              x: 1446076800000,
              low: 31,
              high: 78
            },
            {
              dt: 1446163200000,
              serie: "Record",
              max: 82,
              min: 31,
              x: 1446163200000,
              low: 31,
              high: 82
            },
            {
              dt: 1446249600000,
              serie: "Record",
              max: 81,
              min: 29,
              x: 1446249600000,
              low: 29,
              high: 81
            },
            {
              dt: 1446336000000,
              serie: "Record",
              max: 84,
              min: 30,
              x: 1446336000000,
              low: 30,
              high: 84
            },
            {
              dt: 1446422400000,
              serie: "Record",
              max: 83,
              min: 30,
              x: 1446422400000,
              low: 30,
              high: 83
            },
            {
              dt: 1446508800000,
              serie: "Record",
              max: 79,
              min: 28,
              x: 1446508800000,
              low: 28,
              high: 79
            },
            {
              dt: 1446595200000,
              serie: "Record",
              max: 78,
              min: 25,
              x: 1446595200000,
              low: 25,
              high: 78
            },
            {
              dt: 1446681600000,
              serie: "Record",
              max: 78,
              min: 23,
              x: 1446681600000,
              low: 23,
              high: 78
            },
            {
              dt: 1446768000000,
              serie: "Record",
              max: 74,
              min: 27,
              x: 1446768000000,
              low: 27,
              high: 74
            },
            {
              dt: 1446854400000,
              serie: "Record",
              max: 78,
              min: 29,
              x: 1446854400000,
              low: 29,
              high: 78
            },
            {
              dt: 1446940800000,
              serie: "Record",
              max: 76,
              min: 29,
              x: 1446940800000,
              low: 29,
              high: 76
            },
            {
              dt: 1447027200000,
              serie: "Record",
              max: 75,
              min: 24,
              x: 1447027200000,
              low: 24,
              high: 75
            },
            {
              dt: 1447113600000,
              serie: "Record",
              max: 73,
              min: 27,
              x: 1447113600000,
              low: 27,
              high: 73
            },
            {
              dt: 1447200000000,
              serie: "Record",
              max: 74,
              min: 28,
              x: 1447200000000,
              low: 28,
              high: 74
            },
            {
              dt: 1447286400000,
              serie: "Record",
              max: 76,
              min: 26,
              x: 1447286400000,
              low: 26,
              high: 76
            },
            {
              dt: 1447372800000,
              serie: "Record",
              max: 73,
              min: 22,
              x: 1447372800000,
              low: 22,
              high: 73
            },
            {
              dt: 1447459200000,
              serie: "Record",
              max: 72,
              min: 20,
              x: 1447459200000,
              low: 20,
              high: 72
            },
            {
              dt: 1447545600000,
              serie: "Record",
              max: 80,
              min: 20,
              x: 1447545600000,
              low: 20,
              high: 80
            },
            {
              dt: 1447632000000,
              serie: "Record",
              max: 72,
              min: 17,
              x: 1447632000000,
              low: 17,
              high: 72
            },
            {
              dt: 1447718400000,
              serie: "Record",
              max: 71,
              min: 19,
              x: 1447718400000,
              low: 19,
              high: 71
            },
            {
              dt: 1447804800000,
              serie: "Record",
              max: 73,
              min: 18,
              x: 1447804800000,
              low: 18,
              high: 73
            },
            {
              dt: 1447891200000,
              serie: "Record",
              max: 72,
              min: 18,
              x: 1447891200000,
              low: 18,
              high: 72
            },
            {
              dt: 1447977600000,
              serie: "Record",
              max: 77,
              min: 20,
              x: 1447977600000,
              low: 20,
              high: 77
            },
            {
              dt: 1448064000000,
              serie: "Record",
              max: 74,
              min: 16,
              x: 1448064000000,
              low: 16,
              high: 74
            },
            {
              dt: 1448150400000,
              serie: "Record",
              max: 72,
              min: 13,
              x: 1448150400000,
              low: 13,
              high: 72
            },
            {
              dt: 1448236800000,
              serie: "Record",
              max: 72,
              min: 14,
              x: 1448236800000,
              low: 14,
              high: 72
            },
            {
              dt: 1448323200000,
              serie: "Record",
              max: 73,
              min: 14,
              x: 1448323200000,
              low: 14,
              high: 73
            },
            {
              dt: 1448409600000,
              serie: "Record",
              max: 73,
              min: 19,
              x: 1448409600000,
              low: 19,
              high: 73
            },
            {
              dt: 1448496000000,
              serie: "Record",
              max: 67,
              min: 16,
              x: 1448496000000,
              low: 16,
              high: 67
            },
            {
              dt: 1448582400000,
              serie: "Record",
              max: 72,
              min: 12,
              x: 1448582400000,
              low: 12,
              high: 72
            },
            {
              dt: 1448668800000,
              serie: "Record",
              max: 70,
              min: 15,
              x: 1448668800000,
              low: 15,
              high: 70
            },
            {
              dt: 1448755200000,
              serie: "Record",
              max: 69,
              min: 14,
              x: 1448755200000,
              low: 14,
              high: 69
            },
            {
              dt: 1448841600000,
              serie: "Record",
              max: 70,
              min: 7,
              x: 1448841600000,
              low: 7,
              high: 70
            },
            {
              dt: 1448928000000,
              serie: "Record",
              max: 70,
              min: 8,
              x: 1448928000000,
              low: 8,
              high: 70
            },
            {
              dt: 1449014400000,
              serie: "Record",
              max: 66,
              min: 11,
              x: 1449014400000,
              low: 11,
              high: 66
            },
            {
              dt: 1449100800000,
              serie: "Record",
              max: 69,
              min: 9,
              x: 1449100800000,
              low: 9,
              high: 69
            },
            {
              dt: 1449187200000,
              serie: "Record",
              max: 74,
              min: 10,
              x: 1449187200000,
              low: 10,
              high: 74
            },
            {
              dt: 1449273600000,
              serie: "Record",
              max: 70,
              min: 11,
              x: 1449273600000,
              low: 11,
              high: 70
            },
            {
              dt: 1449360000000,
              serie: "Record",
              max: 71,
              min: 11,
              x: 1449360000000,
              low: 11,
              high: 71
            },
            {
              dt: 1449446400000,
              serie: "Record",
              max: 75,
              min: 10,
              x: 1449446400000,
              low: 10,
              high: 75
            },
            {
              dt: 1449532800000,
              serie: "Record",
              max: 65,
              min: 4,
              x: 1449532800000,
              low: 4,
              high: 65
            },
            {
              dt: 1449619200000,
              serie: "Record",
              max: 66,
              min: 7,
              x: 1449619200000,
              low: 7,
              high: 66
            },
            {
              dt: 1449705600000,
              serie: "Record",
              max: 70,
              min: 3,
              x: 1449705600000,
              low: 3,
              high: 70
            },
            {
              dt: 1449792000000,
              serie: "Record",
              max: 64,
              min: 6,
              x: 1449792000000,
              low: 6,
              high: 64
            },
            {
              dt: 1449878400000,
              serie: "Record",
              max: 68,
              min: 5,
              x: 1449878400000,
              low: 5,
              high: 68
            },
            {
              dt: 1449964800000,
              serie: "Record",
              max: 67,
              min: 8,
              x: 1449964800000,
              low: 8,
              high: 67
            },
            {
              dt: 1450051200000,
              serie: "Record",
              max: 67,
              min: 12,
              x: 1450051200000,
              low: 12,
              high: 67
            },
            {
              dt: 1450137600000,
              serie: "Record",
              max: 68,
              min: 8,
              x: 1450137600000,
              low: 8,
              high: 68
            },
            {
              dt: 1450224000000,
              serie: "Record",
              max: 63,
              min: 7,
              x: 1450224000000,
              low: 7,
              high: 63
            },
            {
              dt: 1450310400000,
              serie: "Record",
              max: 62,
              min: 1,
              x: 1450310400000,
              low: 1,
              high: 62
            },
            {
              dt: 1450396800000,
              serie: "Record",
              max: 63,
              min: -1,
              x: 1450396800000,
              low: -1,
              high: 63
            },
            {
              dt: 1450483200000,
              serie: "Record",
              max: 58,
              min: -1,
              x: 1450483200000,
              low: -1,
              high: 58
            },
            {
              dt: 1450569600000,
              serie: "Record",
              max: 60,
              min: -4,
              x: 1450569600000,
              low: -4,
              high: 60
            },
            {
              dt: 1450656000000,
              serie: "Record",
              max: 65,
              min: -2,
              x: 1450656000000,
              low: -2,
              high: 65
            },
            {
              dt: 1450742400000,
              serie: "Record",
              max: 71,
              min: 2,
              x: 1450742400000,
              low: 2,
              high: 71
            },
            {
              dt: 1450828800000,
              serie: "Record",
              max: 66,
              min: -1,
              x: 1450828800000,
              low: -1,
              high: 66
            },
            {
              dt: 1450915200000,
              serie: "Record",
              max: 72,
              min: 6,
              x: 1450915200000,
              low: 6,
              high: 72
            },
            {
              dt: 1451001600000,
              serie: "Record",
              max: 66,
              min: -1,
              x: 1451001600000,
              low: -1,
              high: 66
            },
            {
              dt: 1451088000000,
              serie: "Record",
              max: 63,
              min: 3,
              x: 1451088000000,
              low: 3,
              high: 63
            },
            {
              dt: 1451174400000,
              serie: "Record",
              max: 63,
              min: 6,
              x: 1451174400000,
              low: 6,
              high: 63
            },
            {
              dt: 1451260800000,
              serie: "Record",
              max: 65,
              min: 8,
              x: 1451260800000,
              low: 8,
              high: 65
            },
            {
              dt: 1451347200000,
              serie: "Record",
              max: 70,
              min: -6,
              x: 1451347200000,
              low: -6,
              high: 70
            },
            {
              dt: 1451433600000,
              serie: "Record",
              max: 65,
              min: -13,
              x: 1451433600000,
              low: -13,
              high: 65
            },
            {
              dt: 1451520000000,
              serie: "Record",
              max: 63,
              min: -7,
              x: 1451520000000,
              low: -7,
              high: 63
            }
          ],
          type: "columnrange",
          color: "#ECEBE3"
        },
        {
          name: "Normal",
          data: [
            {
              dt: 1420070400000,
              serie: "Normal",
              max: 39,
              min: 28,
              x: 1420070400000,
              low: 28,
              high: 39
            },
            {
              dt: 1420156800000,
              serie: "Normal",
              max: 39,
              min: 28,
              x: 1420156800000,
              low: 28,
              high: 39
            },
            {
              dt: 1420243200000,
              serie: "Normal",
              max: 39,
              min: 28,
              x: 1420243200000,
              low: 28,
              high: 39
            },
            {
              dt: 1420329600000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1420329600000,
              low: 27,
              high: 39
            },
            {
              dt: 1420416000000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420416000000,
              low: 27,
              high: 38
            },
            {
              dt: 1420502400000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420502400000,
              low: 27,
              high: 38
            },
            {
              dt: 1420588800000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420588800000,
              low: 27,
              high: 38
            },
            {
              dt: 1420675200000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420675200000,
              low: 27,
              high: 38
            },
            {
              dt: 1420761600000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420761600000,
              low: 27,
              high: 38
            },
            {
              dt: 1420848000000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420848000000,
              low: 27,
              high: 38
            },
            {
              dt: 1420934400000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1420934400000,
              low: 27,
              high: 38
            },
            {
              dt: 1421020800000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421020800000,
              low: 27,
              high: 38
            },
            {
              dt: 1421107200000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421107200000,
              low: 27,
              high: 38
            },
            {
              dt: 1421193600000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421193600000,
              low: 27,
              high: 38
            },
            {
              dt: 1421280000000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421280000000,
              low: 27,
              high: 38
            },
            {
              dt: 1421366400000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421366400000,
              low: 27,
              high: 38
            },
            {
              dt: 1421452800000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421452800000,
              low: 27,
              high: 38
            },
            {
              dt: 1421539200000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421539200000,
              low: 27,
              high: 38
            },
            {
              dt: 1421625600000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421625600000,
              low: 27,
              high: 38
            },
            {
              dt: 1421712000000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421712000000,
              low: 27,
              high: 38
            },
            {
              dt: 1421798400000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421798400000,
              low: 27,
              high: 38
            },
            {
              dt: 1421884800000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421884800000,
              low: 27,
              high: 38
            },
            {
              dt: 1421971200000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1421971200000,
              low: 27,
              high: 38
            },
            {
              dt: 1422057600000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1422057600000,
              low: 27,
              high: 38
            },
            {
              dt: 1422144000000,
              serie: "Normal",
              max: 38,
              min: 27,
              x: 1422144000000,
              low: 27,
              high: 38
            },
            {
              dt: 1422230400000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422230400000,
              low: 27,
              high: 39
            },
            {
              dt: 1422316800000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422316800000,
              low: 27,
              high: 39
            },
            {
              dt: 1422403200000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422403200000,
              low: 27,
              high: 39
            },
            {
              dt: 1422489600000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422489600000,
              low: 27,
              high: 39
            },
            {
              dt: 1422576000000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422576000000,
              low: 27,
              high: 39
            },
            {
              dt: 1422662400000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422662400000,
              low: 27,
              high: 39
            },
            {
              dt: 1422748800000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422748800000,
              low: 27,
              high: 39
            },
            {
              dt: 1422835200000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422835200000,
              low: 27,
              high: 39
            },
            {
              dt: 1422921600000,
              serie: "Normal",
              max: 39,
              min: 27,
              x: 1422921600000,
              low: 27,
              high: 39
            },
            {
              dt: 1423008000000,
              serie: "Normal",
              max: 40,
              min: 28,
              x: 1423008000000,
              low: 28,
              high: 40
            },
            {
              dt: 1423094400000,
              serie: "Normal",
              max: 40,
              min: 28,
              x: 1423094400000,
              low: 28,
              high: 40
            },
            {
              dt: 1423180800000,
              serie: "Normal",
              max: 40,
              min: 28,
              x: 1423180800000,
              low: 28,
              high: 40
            },
            {
              dt: 1423267200000,
              serie: "Normal",
              max: 40,
              min: 28,
              x: 1423267200000,
              low: 28,
              high: 40
            },
            {
              dt: 1423353600000,
              serie: "Normal",
              max: 40,
              min: 28,
              x: 1423353600000,
              low: 28,
              high: 40
            },
            {
              dt: 1423440000000,
              serie: "Normal",
              max: 40,
              min: 28,
              x: 1423440000000,
              low: 28,
              high: 40
            },
            {
              dt: 1423526400000,
              serie: "Normal",
              max: 41,
              min: 28,
              x: 1423526400000,
              low: 28,
              high: 41
            },
            {
              dt: 1423612800000,
              serie: "Normal",
              max: 41,
              min: 28,
              x: 1423612800000,
              low: 28,
              high: 41
            },
            {
              dt: 1423699200000,
              serie: "Normal",
              max: 41,
              min: 28,
              x: 1423699200000,
              low: 28,
              high: 41
            },
            {
              dt: 1423785600000,
              serie: "Normal",
              max: 41,
              min: 29,
              x: 1423785600000,
              low: 29,
              high: 41
            },
            {
              dt: 1423872000000,
              serie: "Normal",
              max: 41,
              min: 29,
              x: 1423872000000,
              low: 29,
              high: 41
            },
            {
              dt: 1423958400000,
              serie: "Normal",
              max: 42,
              min: 29,
              x: 1423958400000,
              low: 29,
              high: 42
            },
            {
              dt: 1424044800000,
              serie: "Normal",
              max: 42,
              min: 29,
              x: 1424044800000,
              low: 29,
              high: 42
            },
            {
              dt: 1424131200000,
              serie: "Normal",
              max: 42,
              min: 29,
              x: 1424131200000,
              low: 29,
              high: 42
            },
            {
              dt: 1424217600000,
              serie: "Normal",
              max: 42,
              min: 29,
              x: 1424217600000,
              low: 29,
              high: 42
            },
            {
              dt: 1424304000000,
              serie: "Normal",
              max: 42,
              min: 30,
              x: 1424304000000,
              low: 30,
              high: 42
            },
            {
              dt: 1424390400000,
              serie: "Normal",
              max: 43,
              min: 30,
              x: 1424390400000,
              low: 30,
              high: 43
            },
            {
              dt: 1424476800000,
              serie: "Normal",
              max: 43,
              min: 30,
              x: 1424476800000,
              low: 30,
              high: 43
            },
            {
              dt: 1424563200000,
              serie: "Normal",
              max: 43,
              min: 30,
              x: 1424563200000,
              low: 30,
              high: 43
            },
            {
              dt: 1424649600000,
              serie: "Normal",
              max: 43,
              min: 30,
              x: 1424649600000,
              low: 30,
              high: 43
            },
            {
              dt: 1424736000000,
              serie: "Normal",
              max: 44,
              min: 30,
              x: 1424736000000,
              low: 30,
              high: 44
            },
            {
              dt: 1424822400000,
              serie: "Normal",
              max: 44,
              min: 31,
              x: 1424822400000,
              low: 31,
              high: 44
            },
            {
              dt: 1424908800000,
              serie: "Normal",
              max: 44,
              min: 31,
              x: 1424908800000,
              low: 31,
              high: 44
            },
            {
              dt: 1424995200000,
              serie: "Normal",
              max: 44,
              min: 31,
              x: 1424995200000,
              low: 31,
              high: 44
            },
            {
              dt: 1425081600000,
              serie: "Normal",
              max: 45,
              min: 31,
              x: 1425081600000,
              low: 31,
              high: 45
            },
            {
              dt: 1425168000000,
              serie: "Normal",
              max: 45,
              min: 31,
              x: 1425168000000,
              low: 31,
              high: 45
            },
            {
              dt: 1425254400000,
              serie: "Normal",
              max: 45,
              min: 32,
              x: 1425254400000,
              low: 32,
              high: 45
            },
            {
              dt: 1425340800000,
              serie: "Normal",
              max: 45,
              min: 32,
              x: 1425340800000,
              low: 32,
              high: 45
            },
            {
              dt: 1425427200000,
              serie: "Normal",
              max: 46,
              min: 32,
              x: 1425427200000,
              low: 32,
              high: 46
            },
            {
              dt: 1425513600000,
              serie: "Normal",
              max: 46,
              min: 32,
              x: 1425513600000,
              low: 32,
              high: 46
            },
            {
              dt: 1425600000000,
              serie: "Normal",
              max: 46,
              min: 32,
              x: 1425600000000,
              low: 32,
              high: 46
            },
            {
              dt: 1425686400000,
              serie: "Normal",
              max: 47,
              min: 33,
              x: 1425686400000,
              low: 33,
              high: 47
            },
            {
              dt: 1425772800000,
              serie: "Normal",
              max: 47,
              min: 33,
              x: 1425772800000,
              low: 33,
              high: 47
            },
            {
              dt: 1425859200000,
              serie: "Normal",
              max: 47,
              min: 33,
              x: 1425859200000,
              low: 33,
              high: 47
            },
            {
              dt: 1425945600000,
              serie: "Normal",
              max: 48,
              min: 33,
              x: 1425945600000,
              low: 33,
              high: 48
            },
            {
              dt: 1426032000000,
              serie: "Normal",
              max: 48,
              min: 34,
              x: 1426032000000,
              low: 34,
              high: 48
            },
            {
              dt: 1426118400000,
              serie: "Normal",
              max: 48,
              min: 34,
              x: 1426118400000,
              low: 34,
              high: 48
            },
            {
              dt: 1426204800000,
              serie: "Normal",
              max: 49,
              min: 34,
              x: 1426204800000,
              low: 34,
              high: 49
            },
            {
              dt: 1426291200000,
              serie: "Normal",
              max: 49,
              min: 35,
              x: 1426291200000,
              low: 35,
              high: 49
            },
            {
              dt: 1426377600000,
              serie: "Normal",
              max: 49,
              min: 35,
              x: 1426377600000,
              low: 35,
              high: 49
            },
            {
              dt: 1426464000000,
              serie: "Normal",
              max: 50,
              min: 35,
              x: 1426464000000,
              low: 35,
              high: 50
            },
            {
              dt: 1426550400000,
              serie: "Normal",
              max: 50,
              min: 35,
              x: 1426550400000,
              low: 35,
              high: 50
            },
            {
              dt: 1426636800000,
              serie: "Normal",
              max: 50,
              min: 36,
              x: 1426636800000,
              low: 36,
              high: 50
            },
            {
              dt: 1426723200000,
              serie: "Normal",
              max: 51,
              min: 36,
              x: 1426723200000,
              low: 36,
              high: 51
            },
            {
              dt: 1426809600000,
              serie: "Normal",
              max: 51,
              min: 36,
              x: 1426809600000,
              low: 36,
              high: 51
            },
            {
              dt: 1426896000000,
              serie: "Normal",
              max: 51,
              min: 37,
              x: 1426896000000,
              low: 37,
              high: 51
            },
            {
              dt: 1426982400000,
              serie: "Normal",
              max: 52,
              min: 37,
              x: 1426982400000,
              low: 37,
              high: 52
            },
            {
              dt: 1427068800000,
              serie: "Normal",
              max: 52,
              min: 37,
              x: 1427068800000,
              low: 37,
              high: 52
            },
            {
              dt: 1427155200000,
              serie: "Normal",
              max: 52,
              min: 37,
              x: 1427155200000,
              low: 37,
              high: 52
            },
            {
              dt: 1427241600000,
              serie: "Normal",
              max: 53,
              min: 38,
              x: 1427241600000,
              low: 38,
              high: 53
            },
            {
              dt: 1427328000000,
              serie: "Normal",
              max: 53,
              min: 38,
              x: 1427328000000,
              low: 38,
              high: 53
            },
            {
              dt: 1427414400000,
              serie: "Normal",
              max: 54,
              min: 38,
              x: 1427414400000,
              low: 38,
              high: 54
            },
            {
              dt: 1427500800000,
              serie: "Normal",
              max: 54,
              min: 39,
              x: 1427500800000,
              low: 39,
              high: 54
            },
            {
              dt: 1427587200000,
              serie: "Normal",
              max: 54,
              min: 39,
              x: 1427587200000,
              low: 39,
              high: 54
            },
            {
              dt: 1427673600000,
              serie: "Normal",
              max: 55,
              min: 39,
              x: 1427673600000,
              low: 39,
              high: 55
            },
            {
              dt: 1427760000000,
              serie: "Normal",
              max: 55,
              min: 40,
              x: 1427760000000,
              low: 40,
              high: 55
            },
            {
              dt: 1427846400000,
              serie: "Normal",
              max: 56,
              min: 40,
              x: 1427846400000,
              low: 40,
              high: 56
            },
            {
              dt: 1427932800000,
              serie: "Normal",
              max: 56,
              min: 40,
              x: 1427932800000,
              low: 40,
              high: 56
            },
            {
              dt: 1428019200000,
              serie: "Normal",
              max: 56,
              min: 41,
              x: 1428019200000,
              low: 41,
              high: 56
            },
            {
              dt: 1428105600000,
              serie: "Normal",
              max: 57,
              min: 41,
              x: 1428105600000,
              low: 41,
              high: 57
            },
            {
              dt: 1428192000000,
              serie: "Normal",
              max: 57,
              min: 41,
              x: 1428192000000,
              low: 41,
              high: 57
            },
            {
              dt: 1428278400000,
              serie: "Normal",
              max: 58,
              min: 42,
              x: 1428278400000,
              low: 42,
              high: 58
            },
            {
              dt: 1428364800000,
              serie: "Normal",
              max: 58,
              min: 42,
              x: 1428364800000,
              low: 42,
              high: 58
            },
            {
              dt: 1428451200000,
              serie: "Normal",
              max: 58,
              min: 42,
              x: 1428451200000,
              low: 42,
              high: 58
            },
            {
              dt: 1428537600000,
              serie: "Normal",
              max: 59,
              min: 43,
              x: 1428537600000,
              low: 43,
              high: 59
            },
            {
              dt: 1428624000000,
              serie: "Normal",
              max: 59,
              min: 43,
              x: 1428624000000,
              low: 43,
              high: 59
            },
            {
              dt: 1428710400000,
              serie: "Normal",
              max: 60,
              min: 43,
              x: 1428710400000,
              low: 43,
              high: 60
            },
            {
              dt: 1428796800000,
              serie: "Normal",
              max: 60,
              min: 44,
              x: 1428796800000,
              low: 44,
              high: 60
            },
            {
              dt: 1428883200000,
              serie: "Normal",
              max: 60,
              min: 44,
              x: 1428883200000,
              low: 44,
              high: 60
            },
            {
              dt: 1428969600000,
              serie: "Normal",
              max: 61,
              min: 44,
              x: 1428969600000,
              low: 44,
              high: 61
            },
            {
              dt: 1429056000000,
              serie: "Normal",
              max: 61,
              min: 45,
              x: 1429056000000,
              low: 45,
              high: 61
            },
            {
              dt: 1429142400000,
              serie: "Normal",
              max: 62,
              min: 45,
              x: 1429142400000,
              low: 45,
              high: 62
            },
            {
              dt: 1429228800000,
              serie: "Normal",
              max: 62,
              min: 45,
              x: 1429228800000,
              low: 45,
              high: 62
            },
            {
              dt: 1429315200000,
              serie: "Normal",
              max: 62,
              min: 46,
              x: 1429315200000,
              low: 46,
              high: 62
            },
            {
              dt: 1429401600000,
              serie: "Normal",
              max: 63,
              min: 46,
              x: 1429401600000,
              low: 46,
              high: 63
            },
            {
              dt: 1429488000000,
              serie: "Normal",
              max: 63,
              min: 46,
              x: 1429488000000,
              low: 46,
              high: 63
            },
            {
              dt: 1429574400000,
              serie: "Normal",
              max: 63,
              min: 47,
              x: 1429574400000,
              low: 47,
              high: 63
            },
            {
              dt: 1429660800000,
              serie: "Normal",
              max: 64,
              min: 47,
              x: 1429660800000,
              low: 47,
              high: 64
            },
            {
              dt: 1429747200000,
              serie: "Normal",
              max: 64,
              min: 47,
              x: 1429747200000,
              low: 47,
              high: 64
            },
            {
              dt: 1429833600000,
              serie: "Normal",
              max: 64,
              min: 48,
              x: 1429833600000,
              low: 48,
              high: 64
            },
            {
              dt: 1429920000000,
              serie: "Normal",
              max: 65,
              min: 48,
              x: 1429920000000,
              low: 48,
              high: 65
            },
            {
              dt: 1430006400000,
              serie: "Normal",
              max: 65,
              min: 48,
              x: 1430006400000,
              low: 48,
              high: 65
            },
            {
              dt: 1430092800000,
              serie: "Normal",
              max: 65,
              min: 48,
              x: 1430092800000,
              low: 48,
              high: 65
            },
            {
              dt: 1430179200000,
              serie: "Normal",
              max: 66,
              min: 49,
              x: 1430179200000,
              low: 49,
              high: 66
            },
            {
              dt: 1430265600000,
              serie: "Normal",
              max: 66,
              min: 49,
              x: 1430265600000,
              low: 49,
              high: 66
            },
            {
              dt: 1430352000000,
              serie: "Normal",
              max: 66,
              min: 49,
              x: 1430352000000,
              low: 49,
              high: 66
            },
            {
              dt: 1430438400000,
              serie: "Normal",
              max: 67,
              min: 50,
              x: 1430438400000,
              low: 50,
              high: 67
            },
            {
              dt: 1430524800000,
              serie: "Normal",
              max: 67,
              min: 50,
              x: 1430524800000,
              low: 50,
              high: 67
            },
            {
              dt: 1430611200000,
              serie: "Normal",
              max: 67,
              min: 50,
              x: 1430611200000,
              low: 50,
              high: 67
            },
            {
              dt: 1430697600000,
              serie: "Normal",
              max: 68,
              min: 50,
              x: 1430697600000,
              low: 50,
              high: 68
            },
            {
              dt: 1430784000000,
              serie: "Normal",
              max: 68,
              min: 51,
              x: 1430784000000,
              low: 51,
              high: 68
            },
            {
              dt: 1430870400000,
              serie: "Normal",
              max: 68,
              min: 51,
              x: 1430870400000,
              low: 51,
              high: 68
            },
            {
              dt: 1430956800000,
              serie: "Normal",
              max: 68,
              min: 51,
              x: 1430956800000,
              low: 51,
              high: 68
            },
            {
              dt: 1431043200000,
              serie: "Normal",
              max: 69,
              min: 52,
              x: 1431043200000,
              low: 52,
              high: 69
            },
            {
              dt: 1431129600000,
              serie: "Normal",
              max: 69,
              min: 52,
              x: 1431129600000,
              low: 52,
              high: 69
            },
            {
              dt: 1431216000000,
              serie: "Normal",
              max: 69,
              min: 52,
              x: 1431216000000,
              low: 52,
              high: 69
            },
            {
              dt: 1431302400000,
              serie: "Normal",
              max: 70,
              min: 52,
              x: 1431302400000,
              low: 52,
              high: 70
            },
            {
              dt: 1431388800000,
              serie: "Normal",
              max: 70,
              min: 53,
              x: 1431388800000,
              low: 53,
              high: 70
            },
            {
              dt: 1431475200000,
              serie: "Normal",
              max: 70,
              min: 53,
              x: 1431475200000,
              low: 53,
              high: 70
            },
            {
              dt: 1431561600000,
              serie: "Normal",
              max: 70,
              min: 53,
              x: 1431561600000,
              low: 53,
              high: 70
            },
            {
              dt: 1431648000000,
              serie: "Normal",
              max: 71,
              min: 54,
              x: 1431648000000,
              low: 54,
              high: 71
            },
            {
              dt: 1431734400000,
              serie: "Normal",
              max: 71,
              min: 54,
              x: 1431734400000,
              low: 54,
              high: 71
            },
            {
              dt: 1431820800000,
              serie: "Normal",
              max: 71,
              min: 54,
              x: 1431820800000,
              low: 54,
              high: 71
            },
            {
              dt: 1431907200000,
              serie: "Normal",
              max: 71,
              min: 55,
              x: 1431907200000,
              low: 55,
              high: 71
            },
            {
              dt: 1431993600000,
              serie: "Normal",
              max: 72,
              min: 55,
              x: 1431993600000,
              low: 55,
              high: 72
            },
            {
              dt: 1432080000000,
              serie: "Normal",
              max: 72,
              min: 55,
              x: 1432080000000,
              low: 55,
              high: 72
            },
            {
              dt: 1432166400000,
              serie: "Normal",
              max: 72,
              min: 55,
              x: 1432166400000,
              low: 55,
              high: 72
            },
            {
              dt: 1432252800000,
              serie: "Normal",
              max: 72,
              min: 56,
              x: 1432252800000,
              low: 56,
              high: 72
            },
            {
              dt: 1432339200000,
              serie: "Normal",
              max: 73,
              min: 56,
              x: 1432339200000,
              low: 56,
              high: 73
            },
            {
              dt: 1432425600000,
              serie: "Normal",
              max: 73,
              min: 56,
              x: 1432425600000,
              low: 56,
              high: 73
            },
            {
              dt: 1432512000000,
              serie: "Normal",
              max: 73,
              min: 57,
              x: 1432512000000,
              low: 57,
              high: 73
            },
            {
              dt: 1432598400000,
              serie: "Normal",
              max: 74,
              min: 57,
              x: 1432598400000,
              low: 57,
              high: 74
            },
            {
              dt: 1432684800000,
              serie: "Normal",
              max: 74,
              min: 57,
              x: 1432684800000,
              low: 57,
              high: 74
            },
            {
              dt: 1432771200000,
              serie: "Normal",
              max: 74,
              min: 58,
              x: 1432771200000,
              low: 58,
              high: 74
            },
            {
              dt: 1432857600000,
              serie: "Normal",
              max: 74,
              min: 58,
              x: 1432857600000,
              low: 58,
              high: 74
            },
            {
              dt: 1432944000000,
              serie: "Normal",
              max: 75,
              min: 58,
              x: 1432944000000,
              low: 58,
              high: 75
            },
            {
              dt: 1433030400000,
              serie: "Normal",
              max: 75,
              min: 59,
              x: 1433030400000,
              low: 59,
              high: 75
            },
            {
              dt: 1433116800000,
              serie: "Normal",
              max: 75,
              min: 59,
              x: 1433116800000,
              low: 59,
              high: 75
            },
            {
              dt: 1433203200000,
              serie: "Normal",
              max: 76,
              min: 59,
              x: 1433203200000,
              low: 59,
              high: 76
            },
            {
              dt: 1433289600000,
              serie: "Normal",
              max: 76,
              min: 60,
              x: 1433289600000,
              low: 60,
              high: 76
            },
            {
              dt: 1433376000000,
              serie: "Normal",
              max: 76,
              min: 60,
              x: 1433376000000,
              low: 60,
              high: 76
            },
            {
              dt: 1433462400000,
              serie: "Normal",
              max: 76,
              min: 60,
              x: 1433462400000,
              low: 60,
              high: 76
            },
            {
              dt: 1433548800000,
              serie: "Normal",
              max: 77,
              min: 61,
              x: 1433548800000,
              low: 61,
              high: 77
            },
            {
              dt: 1433635200000,
              serie: "Normal",
              max: 77,
              min: 61,
              x: 1433635200000,
              low: 61,
              high: 77
            },
            {
              dt: 1433721600000,
              serie: "Normal",
              max: 77,
              min: 61,
              x: 1433721600000,
              low: 61,
              high: 77
            },
            {
              dt: 1433808000000,
              serie: "Normal",
              max: 78,
              min: 62,
              x: 1433808000000,
              low: 62,
              high: 78
            },
            {
              dt: 1433894400000,
              serie: "Normal",
              max: 78,
              min: 62,
              x: 1433894400000,
              low: 62,
              high: 78
            },
            {
              dt: 1433980800000,
              serie: "Normal",
              max: 78,
              min: 62,
              x: 1433980800000,
              low: 62,
              high: 78
            },
            {
              dt: 1434067200000,
              serie: "Normal",
              max: 78,
              min: 63,
              x: 1434067200000,
              low: 63,
              high: 78
            },
            {
              dt: 1434153600000,
              serie: "Normal",
              max: 79,
              min: 63,
              x: 1434153600000,
              low: 63,
              high: 79
            },
            {
              dt: 1434240000000,
              serie: "Normal",
              max: 79,
              min: 63,
              x: 1434240000000,
              low: 63,
              high: 79
            },
            {
              dt: 1434326400000,
              serie: "Normal",
              max: 79,
              min: 64,
              x: 1434326400000,
              low: 64,
              high: 79
            },
            {
              dt: 1434412800000,
              serie: "Normal",
              max: 80,
              min: 64,
              x: 1434412800000,
              low: 64,
              high: 80
            },
            {
              dt: 1434499200000,
              serie: "Normal",
              max: 80,
              min: 64,
              x: 1434499200000,
              low: 64,
              high: 80
            },
            {
              dt: 1434585600000,
              serie: "Normal",
              max: 80,
              min: 65,
              x: 1434585600000,
              low: 65,
              high: 80
            },
            {
              dt: 1434672000000,
              serie: "Normal",
              max: 80,
              min: 65,
              x: 1434672000000,
              low: 65,
              high: 80
            },
            {
              dt: 1434758400000,
              serie: "Normal",
              max: 81,
              min: 65,
              x: 1434758400000,
              low: 65,
              high: 81
            },
            {
              dt: 1434844800000,
              serie: "Normal",
              max: 81,
              min: 65,
              x: 1434844800000,
              low: 65,
              high: 81
            },
            {
              dt: 1434931200000,
              serie: "Normal",
              max: 81,
              min: 66,
              x: 1434931200000,
              low: 66,
              high: 81
            },
            {
              dt: 1435017600000,
              serie: "Normal",
              max: 81,
              min: 66,
              x: 1435017600000,
              low: 66,
              high: 81
            },
            {
              dt: 1435104000000,
              serie: "Normal",
              max: 82,
              min: 66,
              x: 1435104000000,
              low: 66,
              high: 82
            },
            {
              dt: 1435190400000,
              serie: "Normal",
              max: 82,
              min: 66,
              x: 1435190400000,
              low: 66,
              high: 82
            },
            {
              dt: 1435276800000,
              serie: "Normal",
              max: 82,
              min: 67,
              x: 1435276800000,
              low: 67,
              high: 82
            },
            {
              dt: 1435363200000,
              serie: "Normal",
              max: 82,
              min: 67,
              x: 1435363200000,
              low: 67,
              high: 82
            },
            {
              dt: 1435449600000,
              serie: "Normal",
              max: 83,
              min: 67,
              x: 1435449600000,
              low: 67,
              high: 83
            },
            {
              dt: 1435536000000,
              serie: "Normal",
              max: 83,
              min: 67,
              x: 1435536000000,
              low: 67,
              high: 83
            },
            {
              dt: 1435622400000,
              serie: "Normal",
              max: 83,
              min: 67,
              x: 1435622400000,
              low: 67,
              high: 83
            },
            {
              dt: 1435708800000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1435708800000,
              low: 68,
              high: 83
            },
            {
              dt: 1435795200000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1435795200000,
              low: 68,
              high: 83
            },
            {
              dt: 1435881600000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1435881600000,
              low: 68,
              high: 83
            },
            {
              dt: 1435968000000,
              serie: "Normal",
              max: 84,
              min: 68,
              x: 1435968000000,
              low: 68,
              high: 84
            },
            {
              dt: 1436054400000,
              serie: "Normal",
              max: 84,
              min: 68,
              x: 1436054400000,
              low: 68,
              high: 84
            },
            {
              dt: 1436140800000,
              serie: "Normal",
              max: 84,
              min: 68,
              x: 1436140800000,
              low: 68,
              high: 84
            },
            {
              dt: 1436227200000,
              serie: "Normal",
              max: 84,
              min: 68,
              x: 1436227200000,
              low: 68,
              high: 84
            },
            {
              dt: 1436313600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436313600000,
              low: 69,
              high: 84
            },
            {
              dt: 1436400000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436400000000,
              low: 69,
              high: 84
            },
            {
              dt: 1436486400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436486400000,
              low: 69,
              high: 84
            },
            {
              dt: 1436572800000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436572800000,
              low: 69,
              high: 84
            },
            {
              dt: 1436659200000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436659200000,
              low: 69,
              high: 84
            },
            {
              dt: 1436745600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436745600000,
              low: 69,
              high: 84
            },
            {
              dt: 1436832000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436832000000,
              low: 69,
              high: 84
            },
            {
              dt: 1436918400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1436918400000,
              low: 69,
              high: 84
            },
            {
              dt: 1437004800000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437004800000,
              low: 69,
              high: 84
            },
            {
              dt: 1437091200000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437091200000,
              low: 69,
              high: 84
            },
            {
              dt: 1437177600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437177600000,
              low: 69,
              high: 84
            },
            {
              dt: 1437264000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437264000000,
              low: 69,
              high: 84
            },
            {
              dt: 1437350400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437350400000,
              low: 69,
              high: 84
            },
            {
              dt: 1437436800000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437436800000,
              low: 69,
              high: 84
            },
            {
              dt: 1437523200000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437523200000,
              low: 69,
              high: 84
            },
            {
              dt: 1437609600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437609600000,
              low: 69,
              high: 84
            },
            {
              dt: 1437696000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437696000000,
              low: 69,
              high: 84
            },
            {
              dt: 1437782400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437782400000,
              low: 69,
              high: 84
            },
            {
              dt: 1437868800000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437868800000,
              low: 69,
              high: 84
            },
            {
              dt: 1437955200000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1437955200000,
              low: 69,
              high: 84
            },
            {
              dt: 1438041600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438041600000,
              low: 69,
              high: 84
            },
            {
              dt: 1438128000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438128000000,
              low: 69,
              high: 84
            },
            {
              dt: 1438214400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438214400000,
              low: 69,
              high: 84
            },
            {
              dt: 1438300800000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438300800000,
              low: 69,
              high: 84
            },
            {
              dt: 1438387200000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438387200000,
              low: 69,
              high: 84
            },
            {
              dt: 1438473600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438473600000,
              low: 69,
              high: 84
            },
            {
              dt: 1438560000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438560000000,
              low: 69,
              high: 84
            },
            {
              dt: 1438646400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438646400000,
              low: 69,
              high: 84
            },
            {
              dt: 1438732800000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438732800000,
              low: 69,
              high: 84
            },
            {
              dt: 1438819200000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438819200000,
              low: 69,
              high: 84
            },
            {
              dt: 1438905600000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438905600000,
              low: 69,
              high: 84
            },
            {
              dt: 1438992000000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1438992000000,
              low: 69,
              high: 84
            },
            {
              dt: 1439078400000,
              serie: "Normal",
              max: 84,
              min: 69,
              x: 1439078400000,
              low: 69,
              high: 84
            },
            {
              dt: 1439164800000,
              serie: "Normal",
              max: 83,
              min: 69,
              x: 1439164800000,
              low: 69,
              high: 83
            },
            {
              dt: 1439251200000,
              serie: "Normal",
              max: 83,
              min: 69,
              x: 1439251200000,
              low: 69,
              high: 83
            },
            {
              dt: 1439337600000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439337600000,
              low: 68,
              high: 83
            },
            {
              dt: 1439424000000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439424000000,
              low: 68,
              high: 83
            },
            {
              dt: 1439510400000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439510400000,
              low: 68,
              high: 83
            },
            {
              dt: 1439596800000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439596800000,
              low: 68,
              high: 83
            },
            {
              dt: 1439683200000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439683200000,
              low: 68,
              high: 83
            },
            {
              dt: 1439769600000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439769600000,
              low: 68,
              high: 83
            },
            {
              dt: 1439856000000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439856000000,
              low: 68,
              high: 83
            },
            {
              dt: 1439942400000,
              serie: "Normal",
              max: 83,
              min: 68,
              x: 1439942400000,
              low: 68,
              high: 83
            },
            {
              dt: 1440028800000,
              serie: "Normal",
              max: 82,
              min: 68,
              x: 1440028800000,
              low: 68,
              high: 82
            },
            {
              dt: 1440115200000,
              serie: "Normal",
              max: 82,
              min: 68,
              x: 1440115200000,
              low: 68,
              high: 82
            },
            {
              dt: 1440201600000,
              serie: "Normal",
              max: 82,
              min: 67,
              x: 1440201600000,
              low: 67,
              high: 82
            },
            {
              dt: 1440288000000,
              serie: "Normal",
              max: 82,
              min: 67,
              x: 1440288000000,
              low: 67,
              high: 82
            },
            {
              dt: 1440374400000,
              serie: "Normal",
              max: 82,
              min: 67,
              x: 1440374400000,
              low: 67,
              high: 82
            },
            {
              dt: 1440460800000,
              serie: "Normal",
              max: 82,
              min: 67,
              x: 1440460800000,
              low: 67,
              high: 82
            },
            {
              dt: 1440547200000,
              serie: "Normal",
              max: 81,
              min: 67,
              x: 1440547200000,
              low: 67,
              high: 81
            },
            {
              dt: 1440633600000,
              serie: "Normal",
              max: 81,
              min: 67,
              x: 1440633600000,
              low: 67,
              high: 81
            },
            {
              dt: 1440720000000,
              serie: "Normal",
              max: 81,
              min: 66,
              x: 1440720000000,
              low: 66,
              high: 81
            },
            {
              dt: 1440806400000,
              serie: "Normal",
              max: 81,
              min: 66,
              x: 1440806400000,
              low: 66,
              high: 81
            },
            {
              dt: 1440892800000,
              serie: "Normal",
              max: 81,
              min: 66,
              x: 1440892800000,
              low: 66,
              high: 81
            },
            {
              dt: 1440979200000,
              serie: "Normal",
              max: 80,
              min: 66,
              x: 1440979200000,
              low: 66,
              high: 80
            },
            {
              dt: 1441065600000,
              serie: "Normal",
              max: 80,
              min: 66,
              x: 1441065600000,
              low: 66,
              high: 80
            },
            {
              dt: 1441152000000,
              serie: "Normal",
              max: 80,
              min: 65,
              x: 1441152000000,
              low: 65,
              high: 80
            },
            {
              dt: 1441238400000,
              serie: "Normal",
              max: 80,
              min: 65,
              x: 1441238400000,
              low: 65,
              high: 80
            },
            {
              dt: 1441324800000,
              serie: "Normal",
              max: 79,
              min: 65,
              x: 1441324800000,
              low: 65,
              high: 79
            },
            {
              dt: 1441411200000,
              serie: "Normal",
              max: 79,
              min: 64,
              x: 1441411200000,
              low: 64,
              high: 79
            },
            {
              dt: 1441497600000,
              serie: "Normal",
              max: 79,
              min: 64,
              x: 1441497600000,
              low: 64,
              high: 79
            },
            {
              dt: 1441584000000,
              serie: "Normal",
              max: 78,
              min: 64,
              x: 1441584000000,
              low: 64,
              high: 78
            },
            {
              dt: 1441670400000,
              serie: "Normal",
              max: 78,
              min: 64,
              x: 1441670400000,
              low: 64,
              high: 78
            },
            {
              dt: 1441756800000,
              serie: "Normal",
              max: 78,
              min: 63,
              x: 1441756800000,
              low: 63,
              high: 78
            },
            {
              dt: 1441843200000,
              serie: "Normal",
              max: 77,
              min: 63,
              x: 1441843200000,
              low: 63,
              high: 77
            },
            {
              dt: 1441929600000,
              serie: "Normal",
              max: 77,
              min: 63,
              x: 1441929600000,
              low: 63,
              high: 77
            },
            {
              dt: 1442016000000,
              serie: "Normal",
              max: 77,
              min: 62,
              x: 1442016000000,
              low: 62,
              high: 77
            },
            {
              dt: 1442102400000,
              serie: "Normal",
              max: 76,
              min: 62,
              x: 1442102400000,
              low: 62,
              high: 76
            },
            {
              dt: 1442188800000,
              serie: "Normal",
              max: 76,
              min: 62,
              x: 1442188800000,
              low: 62,
              high: 76
            },
            {
              dt: 1442275200000,
              serie: "Normal",
              max: 76,
              min: 61,
              x: 1442275200000,
              low: 61,
              high: 76
            },
            {
              dt: 1442361600000,
              serie: "Normal",
              max: 75,
              min: 61,
              x: 1442361600000,
              low: 61,
              high: 75
            },
            {
              dt: 1442448000000,
              serie: "Normal",
              max: 75,
              min: 61,
              x: 1442448000000,
              low: 61,
              high: 75
            },
            {
              dt: 1442534400000,
              serie: "Normal",
              max: 75,
              min: 60,
              x: 1442534400000,
              low: 60,
              high: 75
            },
            {
              dt: 1442620800000,
              serie: "Normal",
              max: 74,
              min: 60,
              x: 1442620800000,
              low: 60,
              high: 74
            },
            {
              dt: 1442707200000,
              serie: "Normal",
              max: 74,
              min: 59,
              x: 1442707200000,
              low: 59,
              high: 74
            },
            {
              dt: 1442793600000,
              serie: "Normal",
              max: 73,
              min: 59,
              x: 1442793600000,
              low: 59,
              high: 73
            },
            {
              dt: 1442880000000,
              serie: "Normal",
              max: 73,
              min: 59,
              x: 1442880000000,
              low: 59,
              high: 73
            },
            {
              dt: 1442966400000,
              serie: "Normal",
              max: 73,
              min: 58,
              x: 1442966400000,
              low: 58,
              high: 73
            },
            {
              dt: 1443052800000,
              serie: "Normal",
              max: 72,
              min: 58,
              x: 1443052800000,
              low: 58,
              high: 72
            },
            {
              dt: 1443139200000,
              serie: "Normal",
              max: 72,
              min: 57,
              x: 1443139200000,
              low: 57,
              high: 72
            },
            {
              dt: 1443225600000,
              serie: "Normal",
              max: 71,
              min: 57,
              x: 1443225600000,
              low: 57,
              high: 71
            },
            {
              dt: 1443312000000,
              serie: "Normal",
              max: 71,
              min: 57,
              x: 1443312000000,
              low: 57,
              high: 71
            },
            {
              dt: 1443398400000,
              serie: "Normal",
              max: 70,
              min: 56,
              x: 1443398400000,
              low: 56,
              high: 70
            },
            {
              dt: 1443484800000,
              serie: "Normal",
              max: 70,
              min: 56,
              x: 1443484800000,
              low: 56,
              high: 70
            },
            {
              dt: 1443571200000,
              serie: "Normal",
              max: 70,
              min: 55,
              x: 1443571200000,
              low: 55,
              high: 70
            },
            {
              dt: 1443657600000,
              serie: "Normal",
              max: 69,
              min: 55,
              x: 1443657600000,
              low: 55,
              high: 69
            },
            {
              dt: 1443744000000,
              serie: "Normal",
              max: 69,
              min: 55,
              x: 1443744000000,
              low: 55,
              high: 69
            },
            {
              dt: 1443830400000,
              serie: "Normal",
              max: 68,
              min: 54,
              x: 1443830400000,
              low: 54,
              high: 68
            },
            {
              dt: 1443916800000,
              serie: "Normal",
              max: 68,
              min: 54,
              x: 1443916800000,
              low: 54,
              high: 68
            },
            {
              dt: 1444003200000,
              serie: "Normal",
              max: 68,
              min: 54,
              x: 1444003200000,
              low: 54,
              high: 68
            },
            {
              dt: 1444089600000,
              serie: "Normal",
              max: 67,
              min: 53,
              x: 1444089600000,
              low: 53,
              high: 67
            },
            {
              dt: 1444176000000,
              serie: "Normal",
              max: 67,
              min: 53,
              x: 1444176000000,
              low: 53,
              high: 67
            },
            {
              dt: 1444262400000,
              serie: "Normal",
              max: 67,
              min: 52,
              x: 1444262400000,
              low: 52,
              high: 67
            },
            {
              dt: 1444348800000,
              serie: "Normal",
              max: 66,
              min: 52,
              x: 1444348800000,
              low: 52,
              high: 66
            },
            {
              dt: 1444435200000,
              serie: "Normal",
              max: 66,
              min: 52,
              x: 1444435200000,
              low: 52,
              high: 66
            },
            {
              dt: 1444521600000,
              serie: "Normal",
              max: 65,
              min: 51,
              x: 1444521600000,
              low: 51,
              high: 65
            },
            {
              dt: 1444608000000,
              serie: "Normal",
              max: 65,
              min: 51,
              x: 1444608000000,
              low: 51,
              high: 65
            },
            {
              dt: 1444694400000,
              serie: "Normal",
              max: 65,
              min: 51,
              x: 1444694400000,
              low: 51,
              high: 65
            },
            {
              dt: 1444780800000,
              serie: "Normal",
              max: 64,
              min: 50,
              x: 1444780800000,
              low: 50,
              high: 64
            },
            {
              dt: 1444867200000,
              serie: "Normal",
              max: 64,
              min: 50,
              x: 1444867200000,
              low: 50,
              high: 64
            },
            {
              dt: 1444953600000,
              serie: "Normal",
              max: 64,
              min: 50,
              x: 1444953600000,
              low: 50,
              high: 64
            },
            {
              dt: 1445040000000,
              serie: "Normal",
              max: 63,
              min: 50,
              x: 1445040000000,
              low: 50,
              high: 63
            },
            {
              dt: 1445126400000,
              serie: "Normal",
              max: 63,
              min: 49,
              x: 1445126400000,
              low: 49,
              high: 63
            },
            {
              dt: 1445212800000,
              serie: "Normal",
              max: 63,
              min: 49,
              x: 1445212800000,
              low: 49,
              high: 63
            },
            {
              dt: 1445299200000,
              serie: "Normal",
              max: 62,
              min: 49,
              x: 1445299200000,
              low: 49,
              high: 62
            },
            {
              dt: 1445385600000,
              serie: "Normal",
              max: 62,
              min: 48,
              x: 1445385600000,
              low: 48,
              high: 62
            },
            {
              dt: 1445472000000,
              serie: "Normal",
              max: 62,
              min: 48,
              x: 1445472000000,
              low: 48,
              high: 62
            },
            {
              dt: 1445558400000,
              serie: "Normal",
              max: 61,
              min: 48,
              x: 1445558400000,
              low: 48,
              high: 61
            },
            {
              dt: 1445644800000,
              serie: "Normal",
              max: 61,
              min: 48,
              x: 1445644800000,
              low: 48,
              high: 61
            },
            {
              dt: 1445731200000,
              serie: "Normal",
              max: 61,
              min: 47,
              x: 1445731200000,
              low: 47,
              high: 61
            },
            {
              dt: 1445817600000,
              serie: "Normal",
              max: 61,
              min: 47,
              x: 1445817600000,
              low: 47,
              high: 61
            },
            {
              dt: 1445904000000,
              serie: "Normal",
              max: 60,
              min: 47,
              x: 1445904000000,
              low: 47,
              high: 60
            },
            {
              dt: 1445990400000,
              serie: "Normal",
              max: 60,
              min: 47,
              x: 1445990400000,
              low: 47,
              high: 60
            },
            {
              dt: 1446076800000,
              serie: "Normal",
              max: 60,
              min: 46,
              x: 1446076800000,
              low: 46,
              high: 60
            },
            {
              dt: 1446163200000,
              serie: "Normal",
              max: 59,
              min: 46,
              x: 1446163200000,
              low: 46,
              high: 59
            },
            {
              dt: 1446249600000,
              serie: "Normal",
              max: 59,
              min: 46,
              x: 1446249600000,
              low: 46,
              high: 59
            },
            {
              dt: 1446336000000,
              serie: "Normal",
              max: 59,
              min: 46,
              x: 1446336000000,
              low: 46,
              high: 59
            },
            {
              dt: 1446422400000,
              serie: "Normal",
              max: 58,
              min: 45,
              x: 1446422400000,
              low: 45,
              high: 58
            },
            {
              dt: 1446508800000,
              serie: "Normal",
              max: 58,
              min: 45,
              x: 1446508800000,
              low: 45,
              high: 58
            },
            {
              dt: 1446595200000,
              serie: "Normal",
              max: 58,
              min: 45,
              x: 1446595200000,
              low: 45,
              high: 58
            },
            {
              dt: 1446681600000,
              serie: "Normal",
              max: 57,
              min: 45,
              x: 1446681600000,
              low: 45,
              high: 57
            },
            {
              dt: 1446768000000,
              serie: "Normal",
              max: 57,
              min: 44,
              x: 1446768000000,
              low: 44,
              high: 57
            },
            {
              dt: 1446854400000,
              serie: "Normal",
              max: 57,
              min: 44,
              x: 1446854400000,
              low: 44,
              high: 57
            },
            {
              dt: 1446940800000,
              serie: "Normal",
              max: 57,
              min: 44,
              x: 1446940800000,
              low: 44,
              high: 57
            },
            {
              dt: 1447027200000,
              serie: "Normal",
              max: 56,
              min: 44,
              x: 1447027200000,
              low: 44,
              high: 56
            },
            {
              dt: 1447113600000,
              serie: "Normal",
              max: 56,
              min: 43,
              x: 1447113600000,
              low: 43,
              high: 56
            },
            {
              dt: 1447200000000,
              serie: "Normal",
              max: 56,
              min: 43,
              x: 1447200000000,
              low: 43,
              high: 56
            },
            {
              dt: 1447286400000,
              serie: "Normal",
              max: 55,
              min: 43,
              x: 1447286400000,
              low: 43,
              high: 55
            },
            {
              dt: 1447372800000,
              serie: "Normal",
              max: 55,
              min: 43,
              x: 1447372800000,
              low: 43,
              high: 55
            },
            {
              dt: 1447459200000,
              serie: "Normal",
              max: 55,
              min: 42,
              x: 1447459200000,
              low: 42,
              high: 55
            },
            {
              dt: 1447545600000,
              serie: "Normal",
              max: 54,
              min: 42,
              x: 1447545600000,
              low: 42,
              high: 54
            },
            {
              dt: 1447632000000,
              serie: "Normal",
              max: 54,
              min: 42,
              x: 1447632000000,
              low: 42,
              high: 54
            },
            {
              dt: 1447718400000,
              serie: "Normal",
              max: 53,
              min: 41,
              x: 1447718400000,
              low: 41,
              high: 53
            },
            {
              dt: 1447804800000,
              serie: "Normal",
              max: 53,
              min: 41,
              x: 1447804800000,
              low: 41,
              high: 53
            },
            {
              dt: 1447891200000,
              serie: "Normal",
              max: 53,
              min: 41,
              x: 1447891200000,
              low: 41,
              high: 53
            },
            {
              dt: 1447977600000,
              serie: "Normal",
              max: 52,
              min: 40,
              x: 1447977600000,
              low: 40,
              high: 52
            },
            {
              dt: 1448064000000,
              serie: "Normal",
              max: 52,
              min: 40,
              x: 1448064000000,
              low: 40,
              high: 52
            },
            {
              dt: 1448150400000,
              serie: "Normal",
              max: 52,
              min: 40,
              x: 1448150400000,
              low: 40,
              high: 52
            },
            {
              dt: 1448236800000,
              serie: "Normal",
              max: 51,
              min: 40,
              x: 1448236800000,
              low: 40,
              high: 51
            },
            {
              dt: 1448323200000,
              serie: "Normal",
              max: 51,
              min: 39,
              x: 1448323200000,
              low: 39,
              high: 51
            },
            {
              dt: 1448409600000,
              serie: "Normal",
              max: 50,
              min: 39,
              x: 1448409600000,
              low: 39,
              high: 50
            },
            {
              dt: 1448496000000,
              serie: "Normal",
              max: 50,
              min: 39,
              x: 1448496000000,
              low: 39,
              high: 50
            },
            {
              dt: 1448582400000,
              serie: "Normal",
              max: 50,
              min: 38,
              x: 1448582400000,
              low: 38,
              high: 50
            },
            {
              dt: 1448668800000,
              serie: "Normal",
              max: 49,
              min: 38,
              x: 1448668800000,
              low: 38,
              high: 49
            },
            {
              dt: 1448755200000,
              serie: "Normal",
              max: 49,
              min: 38,
              x: 1448755200000,
              low: 38,
              high: 49
            },
            {
              dt: 1448841600000,
              serie: "Normal",
              max: 49,
              min: 37,
              x: 1448841600000,
              low: 37,
              high: 49
            },
            {
              dt: 1448928000000,
              serie: "Normal",
              max: 48,
              min: 37,
              x: 1448928000000,
              low: 37,
              high: 48
            },
            {
              dt: 1449014400000,
              serie: "Normal",
              max: 48,
              min: 37,
              x: 1449014400000,
              low: 37,
              high: 48
            },
            {
              dt: 1449100800000,
              serie: "Normal",
              max: 47,
              min: 36,
              x: 1449100800000,
              low: 36,
              high: 47
            },
            {
              dt: 1449187200000,
              serie: "Normal",
              max: 47,
              min: 36,
              x: 1449187200000,
              low: 36,
              high: 47
            },
            {
              dt: 1449273600000,
              serie: "Normal",
              max: 47,
              min: 35,
              x: 1449273600000,
              low: 35,
              high: 47
            },
            {
              dt: 1449360000000,
              serie: "Normal",
              max: 46,
              min: 35,
              x: 1449360000000,
              low: 35,
              high: 46
            },
            {
              dt: 1449446400000,
              serie: "Normal",
              max: 46,
              min: 35,
              x: 1449446400000,
              low: 35,
              high: 46
            },
            {
              dt: 1449532800000,
              serie: "Normal",
              max: 45,
              min: 34,
              x: 1449532800000,
              low: 34,
              high: 45
            },
            {
              dt: 1449619200000,
              serie: "Normal",
              max: 45,
              min: 34,
              x: 1449619200000,
              low: 34,
              high: 45
            },
            {
              dt: 1449705600000,
              serie: "Normal",
              max: 45,
              min: 34,
              x: 1449705600000,
              low: 34,
              high: 45
            },
            {
              dt: 1449792000000,
              serie: "Normal",
              max: 44,
              min: 33,
              x: 1449792000000,
              low: 33,
              high: 44
            },
            {
              dt: 1449878400000,
              serie: "Normal",
              max: 44,
              min: 33,
              x: 1449878400000,
              low: 33,
              high: 44
            },
            {
              dt: 1449964800000,
              serie: "Normal",
              max: 44,
              min: 33,
              x: 1449964800000,
              low: 33,
              high: 44
            },
            {
              dt: 1450051200000,
              serie: "Normal",
              max: 43,
              min: 32,
              x: 1450051200000,
              low: 32,
              high: 43
            },
            {
              dt: 1450137600000,
              serie: "Normal",
              max: 43,
              min: 32,
              x: 1450137600000,
              low: 32,
              high: 43
            },
            {
              dt: 1450224000000,
              serie: "Normal",
              max: 43,
              min: 32,
              x: 1450224000000,
              low: 32,
              high: 43
            },
            {
              dt: 1450310400000,
              serie: "Normal",
              max: 42,
              min: 32,
              x: 1450310400000,
              low: 32,
              high: 42
            },
            {
              dt: 1450396800000,
              serie: "Normal",
              max: 42,
              min: 31,
              x: 1450396800000,
              low: 31,
              high: 42
            },
            {
              dt: 1450483200000,
              serie: "Normal",
              max: 42,
              min: 31,
              x: 1450483200000,
              low: 31,
              high: 42
            },
            {
              dt: 1450569600000,
              serie: "Normal",
              max: 42,
              min: 31,
              x: 1450569600000,
              low: 31,
              high: 42
            },
            {
              dt: 1450656000000,
              serie: "Normal",
              max: 41,
              min: 30,
              x: 1450656000000,
              low: 30,
              high: 41
            },
            {
              dt: 1450742400000,
              serie: "Normal",
              max: 41,
              min: 30,
              x: 1450742400000,
              low: 30,
              high: 41
            },
            {
              dt: 1450828800000,
              serie: "Normal",
              max: 41,
              min: 30,
              x: 1450828800000,
              low: 30,
              high: 41
            },
            {
              dt: 1450915200000,
              serie: "Normal",
              max: 41,
              min: 30,
              x: 1450915200000,
              low: 30,
              high: 41
            },
            {
              dt: 1451001600000,
              serie: "Normal",
              max: 40,
              min: 29,
              x: 1451001600000,
              low: 29,
              high: 40
            },
            {
              dt: 1451088000000,
              serie: "Normal",
              max: 40,
              min: 29,
              x: 1451088000000,
              low: 29,
              high: 40
            },
            {
              dt: 1451174400000,
              serie: "Normal",
              max: 40,
              min: 29,
              x: 1451174400000,
              low: 29,
              high: 40
            },
            {
              dt: 1451260800000,
              serie: "Normal",
              max: 40,
              min: 29,
              x: 1451260800000,
              low: 29,
              high: 40
            },
            {
              dt: 1451347200000,
              serie: "Normal",
              max: 39,
              min: 28,
              x: 1451347200000,
              low: 28,
              high: 39
            },
            {
              dt: 1451433600000,
              serie: "Normal",
              max: 39,
              min: 28,
              x: 1451433600000,
              low: 28,
              high: 39
            },
            {
              dt: 1451520000000,
              serie: "Normal",
              max: 39,
              min: 28,
              x: 1451520000000,
              low: 28,
              high: 39
            }
          ],
          type: "columnrange",
          color: "#C8B8B9"
        },
        {
          name: "Observed",
          data: [
            {
              dt: 1420070400000,
              serie: "Observed",
              max: 39,
              min: 27,
              x: 1420070400000,
              low: 27,
              high: 39
            },
            {
              dt: 1420156800000,
              serie: "Observed",
              max: 42,
              min: 35,
              x: 1420156800000,
              low: 35,
              high: 42
            },
            {
              dt: 1420243200000,
              serie: "Observed",
              max: 42,
              min: 33,
              x: 1420243200000,
              low: 33,
              high: 42
            },
            {
              dt: 1420329600000,
              serie: "Observed",
              max: 56,
              min: 41,
              x: 1420329600000,
              low: 41,
              high: 56
            },
            {
              dt: 1420416000000,
              serie: "Observed",
              max: 49,
              min: 21,
              x: 1420416000000,
              low: 21,
              high: 49
            },
            {
              dt: 1420502400000,
              serie: "Observed",
              max: 22,
              min: 19,
              x: 1420502400000,
              low: 19,
              high: 22
            },
            {
              dt: 1420588800000,
              serie: "Observed",
              max: 23,
              min: 9,
              x: 1420588800000,
              low: 9,
              high: 23
            },
            {
              dt: 1420675200000,
              serie: "Observed",
              max: 21,
              min: 8,
              x: 1420675200000,
              low: 8,
              high: 21
            },
            {
              dt: 1420761600000,
              serie: "Observed",
              max: 33,
              min: 19,
              x: 1420761600000,
              low: 19,
              high: 33
            },
            {
              dt: 1420848000000,
              serie: "Observed",
              max: 23,
              min: 16,
              x: 1420848000000,
              low: 16,
              high: 23
            },
            {
              dt: 1420934400000,
              serie: "Observed",
              max: 37,
              min: 18,
              x: 1420934400000,
              low: 18,
              high: 37
            },
            {
              dt: 1421020800000,
              serie: "Observed",
              max: 39,
              min: 35,
              x: 1421020800000,
              low: 35,
              high: 39
            },
            {
              dt: 1421107200000,
              serie: "Observed",
              max: 36,
              min: 17,
              x: 1421107200000,
              low: 17,
              high: 36
            },
            {
              dt: 1421193600000,
              serie: "Observed",
              max: 32,
              min: 16,
              x: 1421193600000,
              low: 16,
              high: 32
            },
            {
              dt: 1421280000000,
              serie: "Observed",
              max: 35,
              min: 25,
              x: 1421280000000,
              low: 25,
              high: 35
            },
            {
              dt: 1421366400000,
              serie: "Observed",
              max: 43,
              min: 20,
              x: 1421366400000,
              low: 20,
              high: 43
            },
            {
              dt: 1421452800000,
              serie: "Observed",
              max: 32,
              min: 17,
              x: 1421452800000,
              low: 17,
              high: 32
            },
            {
              dt: 1421539200000,
              serie: "Observed",
              max: 42,
              min: 31,
              x: 1421539200000,
              low: 31,
              high: 42
            },
            {
              dt: 1421625600000,
              serie: "Observed",
              max: 42,
              min: 36,
              x: 1421625600000,
              low: 36,
              high: 42
            },
            {
              dt: 1421712000000,
              serie: "Observed",
              max: 40,
              min: 32,
              x: 1421712000000,
              low: 32,
              high: 40
            },
            {
              dt: 1421798400000,
              serie: "Observed",
              max: 36,
              min: 25,
              x: 1421798400000,
              low: 25,
              high: 36
            },
            {
              dt: 1421884800000,
              serie: "Observed",
              max: 40,
              min: 31,
              x: 1421884800000,
              low: 31,
              high: 40
            },
            {
              dt: 1421971200000,
              serie: "Observed",
              max: 39,
              min: 28,
              x: 1421971200000,
              low: 28,
              high: 39
            },
            {
              dt: 1422057600000,
              serie: "Observed",
              max: 39,
              min: 33,
              x: 1422057600000,
              low: 33,
              high: 39
            },
            {
              dt: 1422144000000,
              serie: "Observed",
              max: 42,
              min: 31,
              x: 1422144000000,
              low: 31,
              high: 42
            },
            {
              dt: 1422230400000,
              serie: "Observed",
              max: 31,
              min: 22,
              x: 1422230400000,
              low: 22,
              high: 31
            },
            {
              dt: 1422316800000,
              serie: "Observed",
              max: 30,
              min: 20,
              x: 1422316800000,
              low: 20,
              high: 30
            },
            {
              dt: 1422403200000,
              serie: "Observed",
              max: 34,
              min: 16,
              x: 1422403200000,
              low: 16,
              high: 34
            },
            {
              dt: 1422489600000,
              serie: "Observed",
              max: 36,
              min: 19,
              x: 1422489600000,
              low: 19,
              high: 36
            },
            {
              dt: 1422576000000,
              serie: "Observed",
              max: 38,
              min: 19,
              x: 1422576000000,
              low: 19,
              high: 38
            },
            {
              dt: 1422662400000,
              serie: "Observed",
              max: 26,
              min: 13,
              x: 1422662400000,
              low: 13,
              high: 26
            },
            {
              dt: 1422748800000,
              serie: "Observed",
              max: 36,
              min: 20,
              x: 1422748800000,
              low: 20,
              high: 36
            },
            {
              dt: 1422835200000,
              serie: "Observed",
              max: 34,
              min: 14,
              x: 1422835200000,
              low: 14,
              high: 34
            },
            {
              dt: 1422921600000,
              serie: "Observed",
              max: 26,
              min: 13,
              x: 1422921600000,
              low: 13,
              high: 26
            },
            {
              dt: 1423008000000,
              serie: "Observed",
              max: 43,
              min: 24,
              x: 1423008000000,
              low: 24,
              high: 43
            },
            {
              dt: 1423094400000,
              serie: "Observed",
              max: 42,
              min: 14,
              x: 1423094400000,
              low: 14,
              high: 42
            },
            {
              dt: 1423180800000,
              serie: "Observed",
              max: 27,
              min: 12,
              x: 1423180800000,
              low: 12,
              high: 27
            },
            {
              dt: 1423267200000,
              serie: "Observed",
              max: 40,
              min: 25,
              x: 1423267200000,
              low: 25,
              high: 40
            },
            {
              dt: 1423353600000,
              serie: "Observed",
              max: 37,
              min: 29,
              x: 1423353600000,
              low: 29,
              high: 37
            },
            {
              dt: 1423440000000,
              serie: "Observed",
              max: 29,
              min: 25,
              x: 1423440000000,
              low: 25,
              high: 29
            },
            {
              dt: 1423526400000,
              serie: "Observed",
              max: 40,
              min: 26,
              x: 1423526400000,
              low: 26,
              high: 40
            },
            {
              dt: 1423612800000,
              serie: "Observed",
              max: 34,
              min: 22,
              x: 1423612800000,
              low: 22,
              high: 34
            },
            {
              dt: 1423699200000,
              serie: "Observed",
              max: 40,
              min: 16,
              x: 1423699200000,
              low: 16,
              high: 40
            },
            {
              dt: 1423785600000,
              serie: "Observed",
              max: 21,
              min: 8,
              x: 1423785600000,
              low: 8,
              high: 21
            },
            {
              dt: 1423872000000,
              serie: "Observed",
              max: 32,
              min: 16,
              x: 1423872000000,
              low: 16,
              high: 32
            },
            {
              dt: 1423958400000,
              serie: "Observed",
              max: 25,
              min: 4,
              x: 1423958400000,
              low: 4,
              high: 25
            },
            {
              dt: 1424044800000,
              serie: "Observed",
              max: 21,
              min: 3,
              x: 1424044800000,
              low: 3,
              high: 21
            },
            {
              dt: 1424131200000,
              serie: "Observed",
              max: 27,
              min: 14,
              x: 1424131200000,
              low: 14,
              high: 27
            },
            {
              dt: 1424217600000,
              serie: "Observed",
              max: 33,
              min: 19,
              x: 1424217600000,
              low: 19,
              high: 33
            },
            {
              dt: 1424304000000,
              serie: "Observed",
              max: 27,
              min: 8,
              x: 1424304000000,
              low: 8,
              high: 27
            },
            {
              dt: 1424390400000,
              serie: "Observed",
              max: 19,
              min: 2,
              x: 1424390400000,
              low: 2,
              high: 19
            },
            {
              dt: 1424476800000,
              serie: "Observed",
              max: 32,
              min: 13,
              x: 1424476800000,
              low: 13,
              high: 32
            },
            {
              dt: 1424563200000,
              serie: "Observed",
              max: 43,
              min: 32,
              x: 1424563200000,
              low: 32,
              high: 43
            },
            {
              dt: 1424649600000,
              serie: "Observed",
              max: 38,
              min: 8,
              x: 1424649600000,
              low: 8,
              high: 38
            },
            {
              dt: 1424736000000,
              serie: "Observed",
              max: 24,
              min: 4,
              x: 1424736000000,
              low: 4,
              high: 24
            },
            {
              dt: 1424822400000,
              serie: "Observed",
              max: 37,
              min: 20,
              x: 1424822400000,
              low: 20,
              high: 37
            },
            {
              dt: 1424908800000,
              serie: "Observed",
              max: 32,
              min: 21,
              x: 1424908800000,
              low: 21,
              high: 32
            },
            {
              dt: 1424995200000,
              serie: "Observed",
              max: 30,
              min: 18,
              x: 1424995200000,
              low: 18,
              high: 30
            },
            {
              dt: 1425081600000,
              serie: "Observed",
              max: 29,
              min: 13,
              x: 1425081600000,
              low: 13,
              high: 29
            },
            {
              dt: 1425168000000,
              serie: "Observed",
              max: 31,
              min: 24,
              x: 1425168000000,
              low: 24,
              high: 31
            },
            {
              dt: 1425254400000,
              serie: "Observed",
              max: 39,
              min: 27,
              x: 1425254400000,
              low: 27,
              high: 39
            },
            {
              dt: 1425340800000,
              serie: "Observed",
              max: 37,
              min: 22,
              x: 1425340800000,
              low: 22,
              high: 37
            },
            {
              dt: 1425427200000,
              serie: "Observed",
              max: 45,
              min: 35,
              x: 1425427200000,
              low: 35,
              high: 45
            },
            {
              dt: 1425513600000,
              serie: "Observed",
              max: 40,
              min: 19,
              x: 1425513600000,
              low: 19,
              high: 40
            },
            {
              dt: 1425600000000,
              serie: "Observed",
              max: 27,
              min: 12,
              x: 1425600000000,
              low: 12,
              high: 27
            },
            {
              dt: 1425686400000,
              serie: "Observed",
              max: 38,
              min: 18,
              x: 1425686400000,
              low: 18,
              high: 38
            },
            {
              dt: 1425772800000,
              serie: "Observed",
              max: 49,
              min: 37,
              x: 1425772800000,
              low: 37,
              high: 49
            },
            {
              dt: 1425859200000,
              serie: "Observed",
              max: 54,
              min: 40,
              x: 1425859200000,
              low: 40,
              high: 54
            },
            {
              dt: 1425945600000,
              serie: "Observed",
              max: 53,
              min: 39,
              x: 1425945600000,
              low: 39,
              high: 53
            },
            {
              dt: 1426032000000,
              serie: "Observed",
              max: 59,
              min: 44,
              x: 1426032000000,
              low: 44,
              high: 59
            },
            {
              dt: 1426118400000,
              serie: "Observed",
              max: 47,
              min: 36,
              x: 1426118400000,
              low: 36,
              high: 47
            },
            {
              dt: 1426204800000,
              serie: "Observed",
              max: 43,
              min: 31,
              x: 1426204800000,
              low: 31,
              high: 43
            },
            {
              dt: 1426291200000,
              serie: "Observed",
              max: 51,
              min: 40,
              x: 1426291200000,
              low: 40,
              high: 51
            },
            {
              dt: 1426377600000,
              serie: "Observed",
              max: 44,
              min: 36,
              x: 1426377600000,
              low: 36,
              high: 44
            },
            {
              dt: 1426464000000,
              serie: "Observed",
              max: 52,
              min: 35,
              x: 1426464000000,
              low: 35,
              high: 52
            },
            {
              dt: 1426550400000,
              serie: "Observed",
              max: 57,
              min: 34,
              x: 1426550400000,
              low: 34,
              high: 57
            },
            {
              dt: 1426636800000,
              serie: "Observed",
              max: 39,
              min: 29,
              x: 1426636800000,
              low: 29,
              high: 39
            },
            {
              dt: 1426723200000,
              serie: "Observed",
              max: 43,
              min: 29,
              x: 1426723200000,
              low: 29,
              high: 43
            },
            {
              dt: 1426809600000,
              serie: "Observed",
              max: 38,
              min: 29,
              x: 1426809600000,
              low: 29,
              high: 38
            },
            {
              dt: 1426896000000,
              serie: "Observed",
              max: 47,
              min: 29,
              x: 1426896000000,
              low: 29,
              high: 47
            },
            {
              dt: 1426982400000,
              serie: "Observed",
              max: 43,
              min: 28,
              x: 1426982400000,
              low: 28,
              high: 43
            },
            {
              dt: 1427068800000,
              serie: "Observed",
              max: 38,
              min: 23,
              x: 1427068800000,
              low: 23,
              high: 38
            },
            {
              dt: 1427155200000,
              serie: "Observed",
              max: 45,
              min: 26,
              x: 1427155200000,
              low: 26,
              high: 45
            },
            {
              dt: 1427241600000,
              serie: "Observed",
              max: 49,
              min: 34,
              x: 1427241600000,
              low: 34,
              high: 49
            },
            {
              dt: 1427328000000,
              serie: "Observed",
              max: 62,
              min: 42,
              x: 1427328000000,
              low: 42,
              high: 62
            },
            {
              dt: 1427414400000,
              serie: "Observed",
              max: 46,
              min: 39,
              x: 1427414400000,
              low: 39,
              high: 46
            },
            {
              dt: 1427500800000,
              serie: "Observed",
              max: 40,
              min: 26,
              x: 1427500800000,
              low: 26,
              high: 40
            },
            {
              dt: 1427587200000,
              serie: "Observed",
              max: 46,
              min: 25,
              x: 1427587200000,
              low: 25,
              high: 46
            },
            {
              dt: 1427673600000,
              serie: "Observed",
              max: 54,
              min: 36,
              x: 1427673600000,
              low: 36,
              high: 54
            },
            {
              dt: 1427760000000,
              serie: "Observed",
              max: 47,
              min: 35,
              x: 1427760000000,
              low: 35,
              high: 47
            },
            {
              dt: 1427846400000,
              serie: "Observed",
              max: 51,
              min: 32,
              x: 1427846400000,
              low: 32,
              high: 51
            },
            {
              dt: 1427932800000,
              serie: "Observed",
              max: 67,
              min: 41,
              x: 1427932800000,
              low: 41,
              high: 67
            },
            {
              dt: 1428019200000,
              serie: "Observed",
              max: 64,
              min: 59,
              x: 1428019200000,
              low: 59,
              high: 64
            },
            {
              dt: 1428105600000,
              serie: "Observed",
              max: 60,
              min: 42,
              x: 1428105600000,
              low: 42,
              high: 60
            },
            {
              dt: 1428192000000,
              serie: "Observed",
              max: 61,
              min: 42,
              x: 1428192000000,
              low: 42,
              high: 61
            },
            {
              dt: 1428278400000,
              serie: "Observed",
              max: 63,
              min: 42,
              x: 1428278400000,
              low: 42,
              high: 63
            },
            {
              dt: 1428364800000,
              serie: "Observed",
              max: 62,
              min: 42,
              x: 1428364800000,
              low: 42,
              high: 62
            },
            {
              dt: 1428451200000,
              serie: "Observed",
              max: 45,
              min: 37,
              x: 1428451200000,
              low: 37,
              high: 45
            },
            {
              dt: 1428537600000,
              serie: "Observed",
              max: 43,
              min: 37,
              x: 1428537600000,
              low: 37,
              high: 43
            },
            {
              dt: 1428624000000,
              serie: "Observed",
              max: 56,
              min: 39,
              x: 1428624000000,
              low: 39,
              high: 56
            },
            {
              dt: 1428710400000,
              serie: "Observed",
              max: 57,
              min: 44,
              x: 1428710400000,
              low: 44,
              high: 57
            },
            {
              dt: 1428796800000,
              serie: "Observed",
              max: 66,
              min: 43,
              x: 1428796800000,
              low: 43,
              high: 66
            },
            {
              dt: 1428883200000,
              serie: "Observed",
              max: 68,
              min: 50,
              x: 1428883200000,
              low: 50,
              high: 68
            },
            {
              dt: 1428969600000,
              serie: "Observed",
              max: 65,
              min: 55,
              x: 1428969600000,
              low: 55,
              high: 65
            },
            {
              dt: 1429056000000,
              serie: "Observed",
              max: 72,
              min: 51,
              x: 1429056000000,
              low: 51,
              high: 72
            },
            {
              dt: 1429142400000,
              serie: "Observed",
              max: 64,
              min: 52,
              x: 1429142400000,
              low: 52,
              high: 64
            },
            {
              dt: 1429228800000,
              serie: "Observed",
              max: 71,
              min: 55,
              x: 1429228800000,
              low: 55,
              high: 71
            },
            {
              dt: 1429315200000,
              serie: "Observed",
              max: 80,
              min: 59,
              x: 1429315200000,
              low: 59,
              high: 80
            },
            {
              dt: 1429401600000,
              serie: "Observed",
              max: 64,
              min: 48,
              x: 1429401600000,
              low: 48,
              high: 64
            },
            {
              dt: 1429488000000,
              serie: "Observed",
              max: 57,
              min: 46,
              x: 1429488000000,
              low: 46,
              high: 57
            },
            {
              dt: 1429574400000,
              serie: "Observed",
              max: 65,
              min: 52,
              x: 1429574400000,
              low: 52,
              high: 65
            },
            {
              dt: 1429660800000,
              serie: "Observed",
              max: 69,
              min: 48,
              x: 1429660800000,
              low: 48,
              high: 69
            },
            {
              dt: 1429747200000,
              serie: "Observed",
              max: 52,
              min: 41,
              x: 1429747200000,
              low: 41,
              high: 52
            },
            {
              dt: 1429833600000,
              serie: "Observed",
              max: 52,
              min: 39,
              x: 1429833600000,
              low: 39,
              high: 52
            },
            {
              dt: 1429920000000,
              serie: "Observed",
              max: 62,
              min: 38,
              x: 1429920000000,
              low: 38,
              high: 62
            },
            {
              dt: 1430006400000,
              serie: "Observed",
              max: 64,
              min: 46,
              x: 1430006400000,
              low: 46,
              high: 64
            },
            {
              dt: 1430092800000,
              serie: "Observed",
              max: 62,
              min: 49,
              x: 1430092800000,
              low: 49,
              high: 62
            },
            {
              dt: 1430179200000,
              serie: "Observed",
              max: 71,
              min: 50,
              x: 1430179200000,
              low: 50,
              high: 71
            },
            {
              dt: 1430265600000,
              serie: "Observed",
              max: 78,
              min: 50,
              x: 1430265600000,
              low: 50,
              high: 78
            },
            {
              dt: 1430352000000,
              serie: "Observed",
              max: 67,
              min: 48,
              x: 1430352000000,
              low: 48,
              high: 67
            },
            {
              dt: 1430438400000,
              serie: "Observed",
              max: 63,
              min: 49,
              x: 1430438400000,
              low: 49,
              high: 63
            },
            {
              dt: 1430524800000,
              serie: "Observed",
              max: 74,
              min: 48,
              x: 1430524800000,
              low: 48,
              high: 74
            },
            {
              dt: 1430611200000,
              serie: "Observed",
              max: 80,
              min: 51,
              x: 1430611200000,
              low: 51,
              high: 80
            },
            {
              dt: 1430697600000,
              serie: "Observed",
              max: 85,
              min: 57,
              x: 1430697600000,
              low: 57,
              high: 85
            },
            {
              dt: 1430784000000,
              serie: "Observed",
              max: 85,
              min: 66,
              x: 1430784000000,
              low: 66,
              high: 85
            },
            {
              dt: 1430870400000,
              serie: "Observed",
              max: 73,
              min: 59,
              x: 1430870400000,
              low: 59,
              high: 73
            },
            {
              dt: 1430956800000,
              serie: "Observed",
              max: 80,
              min: 56,
              x: 1430956800000,
              low: 56,
              high: 80
            },
            {
              dt: 1431043200000,
              serie: "Observed",
              max: 82,
              min: 56,
              x: 1431043200000,
              low: 56,
              high: 82
            },
            {
              dt: 1431129600000,
              serie: "Observed",
              max: 70,
              min: 57,
              x: 1431129600000,
              low: 57,
              high: 70
            },
            {
              dt: 1431216000000,
              serie: "Observed",
              max: 83,
              min: 61,
              x: 1431216000000,
              low: 61,
              high: 83
            },
            {
              dt: 1431302400000,
              serie: "Observed",
              max: 84,
              min: 70,
              x: 1431302400000,
              low: 70,
              high: 84
            },
            {
              dt: 1431388800000,
              serie: "Observed",
              max: 86,
              min: 64,
              x: 1431388800000,
              low: 64,
              high: 86
            },
            {
              dt: 1431475200000,
              serie: "Observed",
              max: 70,
              min: 53,
              x: 1431475200000,
              low: 53,
              high: 70
            },
            {
              dt: 1431561600000,
              serie: "Observed",
              max: 73,
              min: 50,
              x: 1431561600000,
              low: 50,
              high: 73
            },
            {
              dt: 1431648000000,
              serie: "Observed",
              max: 75,
              min: 55,
              x: 1431648000000,
              low: 55,
              high: 75
            },
            {
              dt: 1431734400000,
              serie: "Observed",
              max: 75,
              min: 57,
              x: 1431734400000,
              low: 57,
              high: 75
            },
            {
              dt: 1431820800000,
              serie: "Observed",
              max: 83,
              min: 64,
              x: 1431820800000,
              low: 64,
              high: 83
            },
            {
              dt: 1431907200000,
              serie: "Observed",
              max: 75,
              min: 60,
              x: 1431907200000,
              low: 60,
              high: 75
            },
            {
              dt: 1431993600000,
              serie: "Observed",
              max: 80,
              min: 59,
              x: 1431993600000,
              low: 59,
              high: 80
            },
            {
              dt: 1432080000000,
              serie: "Observed",
              max: 67,
              min: 54,
              x: 1432080000000,
              low: 54,
              high: 67
            },
            {
              dt: 1432166400000,
              serie: "Observed",
              max: 62,
              min: 52,
              x: 1432166400000,
              low: 52,
              high: 62
            },
            {
              dt: 1432252800000,
              serie: "Observed",
              max: 74,
              min: 55,
              x: 1432252800000,
              low: 55,
              high: 74
            },
            {
              dt: 1432339200000,
              serie: "Observed",
              max: 70,
              min: 49,
              x: 1432339200000,
              low: 49,
              high: 70
            },
            {
              dt: 1432425600000,
              serie: "Observed",
              max: 81,
              min: 56,
              x: 1432425600000,
              low: 56,
              high: 81
            },
            {
              dt: 1432512000000,
              serie: "Observed",
              max: 85,
              min: 64,
              x: 1432512000000,
              low: 64,
              high: 85
            },
            {
              dt: 1432598400000,
              serie: "Observed",
              max: 88,
              min: 67,
              x: 1432598400000,
              low: 67,
              high: 88
            },
            {
              dt: 1432684800000,
              serie: "Observed",
              max: 85,
              min: 70,
              x: 1432684800000,
              low: 70,
              high: 85
            },
            {
              dt: 1432771200000,
              serie: "Observed",
              max: 85,
              min: 70,
              x: 1432771200000,
              low: 70,
              high: 85
            },
            {
              dt: 1432857600000,
              serie: "Observed",
              max: 85,
              min: 65,
              x: 1432857600000,
              low: 65,
              high: 85
            },
            {
              dt: 1432944000000,
              serie: "Observed",
              max: 85,
              min: 67,
              x: 1432944000000,
              low: 67,
              high: 85
            },
            {
              dt: 1433030400000,
              serie: "Observed",
              max: 87,
              min: 57,
              x: 1433030400000,
              low: 57,
              high: 87
            },
            {
              dt: 1433116800000,
              serie: "Observed",
              max: 58,
              min: 51,
              x: 1433116800000,
              low: 51,
              high: 58
            },
            {
              dt: 1433203200000,
              serie: "Observed",
              max: 55,
              min: 50,
              x: 1433203200000,
              low: 50,
              high: 55
            },
            {
              dt: 1433289600000,
              serie: "Observed",
              max: 70,
              min: 52,
              x: 1433289600000,
              low: 52,
              high: 70
            },
            {
              dt: 1433376000000,
              serie: "Observed",
              max: 65,
              min: 54,
              x: 1433376000000,
              low: 54,
              high: 65
            },
            {
              dt: 1433462400000,
              serie: "Observed",
              max: 70,
              min: 55,
              x: 1433462400000,
              low: 55,
              high: 70
            },
            {
              dt: 1433548800000,
              serie: "Observed",
              max: 76,
              min: 60,
              x: 1433548800000,
              low: 60,
              high: 76
            },
            {
              dt: 1433635200000,
              serie: "Observed",
              max: 74,
              min: 55,
              x: 1433635200000,
              low: 55,
              high: 74
            },
            {
              dt: 1433721600000,
              serie: "Observed",
              max: 79,
              min: 63,
              x: 1433721600000,
              low: 63,
              high: 79
            },
            {
              dt: 1433808000000,
              serie: "Observed",
              max: 83,
              min: 68,
              x: 1433808000000,
              low: 68,
              high: 83
            },
            {
              dt: 1433894400000,
              serie: "Observed",
              max: 82,
              min: 65,
              x: 1433894400000,
              low: 65,
              high: 82
            },
            {
              dt: 1433980800000,
              serie: "Observed",
              max: 89,
              min: 72,
              x: 1433980800000,
              low: 72,
              high: 89
            },
            {
              dt: 1434067200000,
              serie: "Observed",
              max: 88,
              min: 73,
              x: 1434067200000,
              low: 73,
              high: 88
            },
            {
              dt: 1434153600000,
              serie: "Observed",
              max: 86,
              min: 72,
              x: 1434153600000,
              low: 72,
              high: 86
            },
            {
              dt: 1434240000000,
              serie: "Observed",
              max: 88,
              min: 66,
              x: 1434240000000,
              low: 66,
              high: 88
            },
            {
              dt: 1434326400000,
              serie: "Observed",
              max: 83,
              min: 64,
              x: 1434326400000,
              low: 64,
              high: 83
            },
            {
              dt: 1434412800000,
              serie: "Observed",
              max: 79,
              min: 65,
              x: 1434412800000,
              low: 65,
              high: 79
            },
            {
              dt: 1434499200000,
              serie: "Observed",
              max: 82,
              min: 66,
              x: 1434499200000,
              low: 66,
              high: 82
            },
            {
              dt: 1434585600000,
              serie: "Observed",
              max: 71,
              min: 64,
              x: 1434585600000,
              low: 64,
              high: 71
            },
            {
              dt: 1434672000000,
              serie: "Observed",
              max: 87,
              min: 68,
              x: 1434672000000,
              low: 68,
              high: 87
            },
            {
              dt: 1434758400000,
              serie: "Observed",
              max: 75,
              min: 64,
              x: 1434758400000,
              low: 64,
              high: 75
            },
            {
              dt: 1434844800000,
              serie: "Observed",
              max: 88,
              min: 71,
              x: 1434844800000,
              low: 71,
              high: 88
            },
            {
              dt: 1434931200000,
              serie: "Observed",
              max: 87,
              min: 70,
              x: 1434931200000,
              low: 70,
              high: 87
            },
            {
              dt: 1435017600000,
              serie: "Observed",
              max: 90,
              min: 75,
              x: 1435017600000,
              low: 75,
              high: 90
            },
            {
              dt: 1435104000000,
              serie: "Observed",
              max: 84,
              min: 68,
              x: 1435104000000,
              low: 68,
              high: 84
            },
            {
              dt: 1435190400000,
              serie: "Observed",
              max: 83,
              min: 65,
              x: 1435190400000,
              low: 65,
              high: 83
            },
            {
              dt: 1435276800000,
              serie: "Observed",
              max: 81,
              min: 69,
              x: 1435276800000,
              low: 69,
              high: 81
            },
            {
              dt: 1435363200000,
              serie: "Observed",
              max: 71,
              min: 58,
              x: 1435363200000,
              low: 58,
              high: 71
            },
            {
              dt: 1435449600000,
              serie: "Observed",
              max: 73,
              min: 62,
              x: 1435449600000,
              low: 62,
              high: 73
            },
            {
              dt: 1435536000000,
              serie: "Observed",
              max: 76,
              min: 63,
              x: 1435536000000,
              low: 63,
              high: 76
            },
            {
              dt: 1435622400000,
              serie: "Observed",
              max: 82,
              min: 68,
              x: 1435622400000,
              low: 68,
              high: 82
            },
            {
              dt: 1435708800000,
              serie: "Observed",
              max: 82,
              min: 69,
              x: 1435708800000,
              low: 69,
              high: 82
            },
            {
              dt: 1435795200000,
              serie: "Observed",
              max: 80,
              min: 69,
              x: 1435795200000,
              low: 69,
              high: 80
            },
            {
              dt: 1435881600000,
              serie: "Observed",
              max: 82,
              min: 66,
              x: 1435881600000,
              low: 66,
              high: 82
            },
            {
              dt: 1435968000000,
              serie: "Observed",
              max: 75,
              min: 69,
              x: 1435968000000,
              low: 69,
              high: 75
            },
            {
              dt: 1436054400000,
              serie: "Observed",
              max: 83,
              min: 68,
              x: 1436054400000,
              low: 68,
              high: 83
            },
            {
              dt: 1436140800000,
              serie: "Observed",
              max: 83,
              min: 72,
              x: 1436140800000,
              low: 72,
              high: 83
            },
            {
              dt: 1436227200000,
              serie: "Observed",
              max: 88,
              min: 75,
              x: 1436227200000,
              low: 75,
              high: 88
            },
            {
              dt: 1436313600000,
              serie: "Observed",
              max: 88,
              min: 77,
              x: 1436313600000,
              low: 77,
              high: 88
            },
            {
              dt: 1436400000000,
              serie: "Observed",
              max: 79,
              min: 68,
              x: 1436400000000,
              low: 68,
              high: 79
            },
            {
              dt: 1436486400000,
              serie: "Observed",
              max: 84,
              min: 72,
              x: 1436486400000,
              low: 72,
              high: 84
            },
            {
              dt: 1436572800000,
              serie: "Observed",
              max: 88,
              min: 69,
              x: 1436572800000,
              low: 69,
              high: 88
            },
            {
              dt: 1436659200000,
              serie: "Observed",
              max: 89,
              min: 72,
              x: 1436659200000,
              low: 72,
              high: 89
            },
            {
              dt: 1436745600000,
              serie: "Observed",
              max: 88,
              min: 73,
              x: 1436745600000,
              low: 73,
              high: 88
            },
            {
              dt: 1436832000000,
              serie: "Observed",
              max: 82,
              min: 73,
              x: 1436832000000,
              low: 73,
              high: 82
            },
            {
              dt: 1436918400000,
              serie: "Observed",
              max: 81,
              min: 72,
              x: 1436918400000,
              low: 72,
              high: 81
            },
            {
              dt: 1437004800000,
              serie: "Observed",
              max: 80,
              min: 64,
              x: 1437004800000,
              low: 64,
              high: 80
            },
            {
              dt: 1437091200000,
              serie: "Observed",
              max: 81,
              min: 67,
              x: 1437091200000,
              low: 67,
              high: 81
            },
            {
              dt: 1437177600000,
              serie: "Observed",
              max: 85,
              min: 71,
              x: 1437177600000,
              low: 71,
              high: 85
            },
            {
              dt: 1437264000000,
              serie: "Observed",
              max: 93,
              min: 78,
              x: 1437264000000,
              low: 78,
              high: 93
            },
            {
              dt: 1437350400000,
              serie: "Observed",
              max: 94,
              min: 82,
              x: 1437350400000,
              low: 82,
              high: 94
            },
            {
              dt: 1437436800000,
              serie: "Observed",
              max: 89,
              min: 74,
              x: 1437436800000,
              low: 74,
              high: 89
            },
            {
              dt: 1437523200000,
              serie: "Observed",
              max: 85,
              min: 69,
              x: 1437523200000,
              low: 69,
              high: 85
            },
            {
              dt: 1437609600000,
              serie: "Observed",
              max: 86,
              min: 68,
              x: 1437609600000,
              low: 68,
              high: 86
            },
            {
              dt: 1437696000000,
              serie: "Observed",
              max: 87,
              min: 70,
              x: 1437696000000,
              low: 70,
              high: 87
            },
            {
              dt: 1437782400000,
              serie: "Observed",
              max: 88,
              min: 69,
              x: 1437782400000,
              low: 69,
              high: 88
            },
            {
              dt: 1437868800000,
              serie: "Observed",
              max: 90,
              min: 74,
              x: 1437868800000,
              low: 74,
              high: 90
            },
            {
              dt: 1437955200000,
              serie: "Observed",
              max: 86,
              min: 71,
              x: 1437955200000,
              low: 71,
              high: 86
            },
            {
              dt: 1438041600000,
              serie: "Observed",
              max: 95,
              min: 75,
              x: 1438041600000,
              low: 75,
              high: 95
            },
            {
              dt: 1438128000000,
              serie: "Observed",
              max: 96,
              min: 78,
              x: 1438128000000,
              low: 78,
              high: 96
            },
            {
              dt: 1438214400000,
              serie: "Observed",
              max: 87,
              min: 76,
              x: 1438214400000,
              low: 76,
              high: 87
            },
            {
              dt: 1438300800000,
              serie: "Observed",
              max: 89,
              min: 72,
              x: 1438300800000,
              low: 72,
              high: 89
            },
            {
              dt: 1438387200000,
              serie: "Observed",
              max: 89,
              min: 75,
              x: 1438387200000,
              low: 75,
              high: 89
            },
            {
              dt: 1438473600000,
              serie: "Observed",
              max: 89,
              min: 71,
              x: 1438473600000,
              low: 71,
              high: 89
            },
            {
              dt: 1438560000000,
              serie: "Observed",
              max: 90,
              min: 75,
              x: 1438560000000,
              low: 75,
              high: 90
            },
            {
              dt: 1438646400000,
              serie: "Observed",
              max: 89,
              min: 69,
              x: 1438646400000,
              low: 69,
              high: 89
            },
            {
              dt: 1438732800000,
              serie: "Observed",
              max: 87,
              min: 72,
              x: 1438732800000,
              low: 72,
              high: 87
            },
            {
              dt: 1438819200000,
              serie: "Observed",
              max: 83,
              min: 67,
              x: 1438819200000,
              low: 67,
              high: 83
            },
            {
              dt: 1438905600000,
              serie: "Observed",
              max: 84,
              min: 69,
              x: 1438905600000,
              low: 69,
              high: 84
            },
            {
              dt: 1438992000000,
              serie: "Observed",
              max: 82,
              min: 68,
              x: 1438992000000,
              low: 68,
              high: 82
            },
            {
              dt: 1439078400000,
              serie: "Observed",
              max: 85,
              min: 68,
              x: 1439078400000,
              low: 68,
              high: 85
            },
            {
              dt: 1439164800000,
              serie: "Observed",
              max: 84,
              min: 70,
              x: 1439164800000,
              low: 70,
              high: 84
            },
            {
              dt: 1439251200000,
              serie: "Observed",
              max: 81,
              min: 71,
              x: 1439251200000,
              low: 71,
              high: 81
            },
            {
              dt: 1439337600000,
              serie: "Observed",
              max: 85,
              min: 71,
              x: 1439337600000,
              low: 71,
              high: 85
            },
            {
              dt: 1439424000000,
              serie: "Observed",
              max: 83,
              min: 67,
              x: 1439424000000,
              low: 67,
              high: 83
            },
            {
              dt: 1439510400000,
              serie: "Observed",
              max: 88,
              min: 67,
              x: 1439510400000,
              low: 67,
              high: 88
            },
            {
              dt: 1439596800000,
              serie: "Observed",
              max: 92,
              min: 73,
              x: 1439596800000,
              low: 73,
              high: 92
            },
            {
              dt: 1439683200000,
              serie: "Observed",
              max: 93,
              min: 76,
              x: 1439683200000,
              low: 76,
              high: 93
            },
            {
              dt: 1439769600000,
              serie: "Observed",
              max: 95,
              min: 78,
              x: 1439769600000,
              low: 78,
              high: 95
            },
            {
              dt: 1439856000000,
              serie: "Observed",
              max: 90,
              min: 73,
              x: 1439856000000,
              low: 73,
              high: 90
            },
            {
              dt: 1439942400000,
              serie: "Observed",
              max: 87,
              min: 77,
              x: 1439942400000,
              low: 77,
              high: 87
            },
            {
              dt: 1440028800000,
              serie: "Observed",
              max: 86,
              min: 77,
              x: 1440028800000,
              low: 77,
              high: 86
            },
            {
              dt: 1440115200000,
              serie: "Observed",
              max: 87,
              min: 71,
              x: 1440115200000,
              low: 71,
              high: 87
            },
            {
              dt: 1440201600000,
              serie: "Observed",
              max: 86,
              min: 69,
              x: 1440201600000,
              low: 69,
              high: 86
            },
            {
              dt: 1440288000000,
              serie: "Observed",
              max: 85,
              min: 70,
              x: 1440288000000,
              low: 70,
              high: 85
            },
            {
              dt: 1440374400000,
              serie: "Observed",
              max: 87,
              min: 73,
              x: 1440374400000,
              low: 73,
              high: 87
            },
            {
              dt: 1440460800000,
              serie: "Observed",
              max: 90,
              min: 73,
              x: 1440460800000,
              low: 73,
              high: 90
            },
            {
              dt: 1440547200000,
              serie: "Observed",
              max: 85,
              min: 67,
              x: 1440547200000,
              low: 67,
              high: 85
            },
            {
              dt: 1440633600000,
              serie: "Observed",
              max: 82,
              min: 67,
              x: 1440633600000,
              low: 67,
              high: 82
            },
            {
              dt: 1440720000000,
              serie: "Observed",
              max: 82,
              min: 63,
              x: 1440720000000,
              low: 63,
              high: 82
            },
            {
              dt: 1440806400000,
              serie: "Observed",
              max: 87,
              min: 67,
              x: 1440806400000,
              low: 67,
              high: 87
            },
            {
              dt: 1440892800000,
              serie: "Observed",
              max: 90,
              min: 72,
              x: 1440892800000,
              low: 72,
              high: 90
            },
            {
              dt: 1440979200000,
              serie: "Observed",
              max: 91,
              min: 76,
              x: 1440979200000,
              low: 76,
              high: 91
            },
            {
              dt: 1441065600000,
              serie: "Observed",
              max: 90,
              min: 76,
              x: 1441065600000,
              low: 76,
              high: 90
            },
            {
              dt: 1441152000000,
              serie: "Observed",
              max: 91,
              min: 74,
              x: 1441152000000,
              low: 74,
              high: 91
            },
            {
              dt: 1441238400000,
              serie: "Observed",
              max: 93,
              min: 74,
              x: 1441238400000,
              low: 74,
              high: 93
            },
            {
              dt: 1441324800000,
              serie: "Observed",
              max: 85,
              min: 72,
              x: 1441324800000,
              low: 72,
              high: 85
            },
            {
              dt: 1441411200000,
              serie: "Observed",
              max: 83,
              min: 67,
              x: 1441411200000,
              low: 67,
              high: 83
            },
            {
              dt: 1441497600000,
              serie: "Observed",
              max: 87,
              min: 65,
              x: 1441497600000,
              low: 65,
              high: 87
            },
            {
              dt: 1441584000000,
              serie: "Observed",
              max: 92,
              min: 70,
              x: 1441584000000,
              low: 70,
              high: 92
            },
            {
              dt: 1441670400000,
              serie: "Observed",
              max: 97,
              min: 76,
              x: 1441670400000,
              low: 76,
              high: 97
            },
            {
              dt: 1441756800000,
              serie: "Observed",
              max: 90,
              min: 76,
              x: 1441756800000,
              low: 76,
              high: 90
            },
            {
              dt: 1441843200000,
              serie: "Observed",
              max: 79,
              min: 70,
              x: 1441843200000,
              low: 70,
              high: 79
            },
            {
              dt: 1441929600000,
              serie: "Observed",
              max: 81,
              min: 66,
              x: 1441929600000,
              low: 66,
              high: 81
            },
            {
              dt: 1442016000000,
              serie: "Observed",
              max: 79,
              min: 69,
              x: 1442016000000,
              low: 69,
              high: 79
            },
            {
              dt: 1442102400000,
              serie: "Observed",
              max: 80,
              min: 62,
              x: 1442102400000,
              low: 62,
              high: 80
            },
            {
              dt: 1442188800000,
              serie: "Observed",
              max: 77,
              min: 59,
              x: 1442188800000,
              low: 59,
              high: 77
            },
            {
              dt: 1442275200000,
              serie: "Observed",
              max: 84,
              min: 62,
              x: 1442275200000,
              low: 62,
              high: 84
            },
            {
              dt: 1442361600000,
              serie: "Observed",
              max: 88,
              min: 66,
              x: 1442361600000,
              low: 66,
              high: 88
            },
            {
              dt: 1442448000000,
              serie: "Observed",
              max: 89,
              min: 68,
              x: 1442448000000,
              low: 68,
              high: 89
            },
            {
              dt: 1442534400000,
              serie: "Observed",
              max: 87,
              min: 68,
              x: 1442534400000,
              low: 68,
              high: 87
            },
            {
              dt: 1442620800000,
              serie: "Observed",
              max: 83,
              min: 68,
              x: 1442620800000,
              low: 68,
              high: 83
            },
            {
              dt: 1442707200000,
              serie: "Observed",
              max: 79,
              min: 64,
              x: 1442707200000,
              low: 64,
              high: 79
            },
            {
              dt: 1442793600000,
              serie: "Observed",
              max: 73,
              min: 59,
              x: 1442793600000,
              low: 59,
              high: 73
            },
            {
              dt: 1442880000000,
              serie: "Observed",
              max: 71,
              min: 62,
              x: 1442880000000,
              low: 62,
              high: 71
            },
            {
              dt: 1442966400000,
              serie: "Observed",
              max: 80,
              min: 59,
              x: 1442966400000,
              low: 59,
              high: 80
            },
            {
              dt: 1443052800000,
              serie: "Observed",
              max: 82,
              min: 60,
              x: 1443052800000,
              low: 60,
              high: 82
            },
            {
              dt: 1443139200000,
              serie: "Observed",
              max: 76,
              min: 63,
              x: 1443139200000,
              low: 63,
              high: 76
            },
            {
              dt: 1443225600000,
              serie: "Observed",
              max: 72,
              min: 61,
              x: 1443225600000,
              low: 61,
              high: 72
            },
            {
              dt: 1443312000000,
              serie: "Observed",
              max: 71,
              min: 56,
              x: 1443312000000,
              low: 56,
              high: 71
            },
            {
              dt: 1443398400000,
              serie: "Observed",
              max: 78,
              min: 65,
              x: 1443398400000,
              low: 65,
              high: 78
            },
            {
              dt: 1443484800000,
              serie: "Observed",
              max: 83,
              min: 72,
              x: 1443484800000,
              low: 72,
              high: 83
            },
            {
              dt: 1443571200000,
              serie: "Observed",
              max: 79,
              min: 59,
              x: 1443571200000,
              low: 59,
              high: 79
            },
            {
              dt: 1443657600000,
              serie: "Observed",
              max: 64,
              min: 56,
              x: 1443657600000,
              low: 56,
              high: 64
            },
            {
              dt: 1443744000000,
              serie: "Observed",
              max: 57,
              min: 48,
              x: 1443744000000,
              low: 48,
              high: 57
            },
            {
              dt: 1443830400000,
              serie: "Observed",
              max: 55,
              min: 49,
              x: 1443830400000,
              low: 49,
              high: 55
            },
            {
              dt: 1443916800000,
              serie: "Observed",
              max: 63,
              min: 53,
              x: 1443916800000,
              low: 53,
              high: 63
            },
            {
              dt: 1444003200000,
              serie: "Observed",
              max: 67,
              min: 52,
              x: 1444003200000,
              low: 52,
              high: 67
            },
            {
              dt: 1444089600000,
              serie: "Observed",
              max: 73,
              min: 52,
              x: 1444089600000,
              low: 52,
              high: 73
            },
            {
              dt: 1444176000000,
              serie: "Observed",
              max: 73,
              min: 58,
              x: 1444176000000,
              low: 58,
              high: 73
            },
            {
              dt: 1444262400000,
              serie: "Observed",
              max: 72,
              min: 59,
              x: 1444262400000,
              low: 59,
              high: 72
            },
            {
              dt: 1444348800000,
              serie: "Observed",
              max: 78,
              min: 61,
              x: 1444348800000,
              low: 61,
              high: 78
            },
            {
              dt: 1444435200000,
              serie: "Observed",
              max: 65,
              min: 50,
              x: 1444435200000,
              low: 50,
              high: 65
            },
            {
              dt: 1444521600000,
              serie: "Observed",
              max: 69,
              min: 53,
              x: 1444521600000,
              low: 53,
              high: 69
            },
            {
              dt: 1444608000000,
              serie: "Observed",
              max: 77,
              min: 56,
              x: 1444608000000,
              low: 56,
              high: 77
            },
            {
              dt: 1444694400000,
              serie: "Observed",
              max: 72,
              min: 61,
              x: 1444694400000,
              low: 61,
              high: 72
            },
            {
              dt: 1444780800000,
              serie: "Observed",
              max: 69,
              min: 57,
              x: 1444780800000,
              low: 57,
              high: 69
            },
            {
              dt: 1444867200000,
              serie: "Observed",
              max: 64,
              min: 51,
              x: 1444867200000,
              low: 51,
              high: 64
            },
            {
              dt: 1444953600000,
              serie: "Observed",
              max: 64,
              min: 53,
              x: 1444953600000,
              low: 53,
              high: 64
            },
            {
              dt: 1445040000000,
              serie: "Observed",
              max: 56,
              min: 42,
              x: 1445040000000,
              low: 42,
              high: 56
            },
            {
              dt: 1445126400000,
              serie: "Observed",
              max: 50,
              min: 38,
              x: 1445126400000,
              low: 38,
              high: 50
            },
            {
              dt: 1445212800000,
              serie: "Observed",
              max: 53,
              min: 35,
              x: 1445212800000,
              low: 35,
              high: 53
            },
            {
              dt: 1445299200000,
              serie: "Observed",
              max: 70,
              min: 48,
              x: 1445299200000,
              low: 48,
              high: 70
            },
            {
              dt: 1445385600000,
              serie: "Observed",
              max: 76,
              min: 57,
              x: 1445385600000,
              low: 57,
              high: 76
            },
            {
              dt: 1445472000000,
              serie: "Observed",
              max: 75,
              min: 58,
              x: 1445472000000,
              low: 58,
              high: 75
            },
            {
              dt: 1445558400000,
              serie: "Observed",
              max: 65,
              min: 45,
              x: 1445558400000,
              low: 45,
              high: 65
            },
            {
              dt: 1445644800000,
              serie: "Observed",
              max: 57,
              min: 40,
              x: 1445644800000,
              low: 40,
              high: 57
            },
            {
              dt: 1445731200000,
              serie: "Observed",
              max: 68,
              min: 48,
              x: 1445731200000,
              low: 48,
              high: 68
            },
            {
              dt: 1445817600000,
              serie: "Observed",
              max: 58,
              min: 46,
              x: 1445817600000,
              low: 46,
              high: 58
            },
            {
              dt: 1445904000000,
              serie: "Observed",
              max: 59,
              min: 45,
              x: 1445904000000,
              low: 45,
              high: 59
            },
            {
              dt: 1445990400000,
              serie: "Observed",
              max: 69,
              min: 53,
              x: 1445990400000,
              low: 53,
              high: 69
            },
            {
              dt: 1446076800000,
              serie: "Observed",
              max: 73,
              min: 57,
              x: 1446076800000,
              low: 57,
              high: 73
            },
            {
              dt: 1446163200000,
              serie: "Observed",
              max: 61,
              min: 48,
              x: 1446163200000,
              low: 48,
              high: 61
            },
            {
              dt: 1446249600000,
              serie: "Observed",
              max: 56,
              min: 42,
              x: 1446249600000,
              low: 42,
              high: 56
            },
            {
              dt: 1446336000000,
              serie: "Observed",
              max: 65,
              min: 54,
              x: 1446336000000,
              low: 54,
              high: 65
            },
            {
              dt: 1446422400000,
              serie: "Observed",
              max: 63,
              min: 54,
              x: 1446422400000,
              low: 54,
              high: 63
            },
            {
              dt: 1446508800000,
              serie: "Observed",
              max: 72,
              min: 48,
              x: 1446508800000,
              low: 48,
              high: 72
            },
            {
              dt: 1446595200000,
              serie: "Observed",
              max: 70,
              min: 56,
              x: 1446595200000,
              low: 56,
              high: 70
            },
            {
              dt: 1446681600000,
              serie: "Observed",
              max: 71,
              min: 56,
              x: 1446681600000,
              low: 56,
              high: 71
            },
            {
              dt: 1446768000000,
              serie: "Observed",
              max: 74,
              min: 66,
              x: 1446768000000,
              low: 66,
              high: 74
            },
            {
              dt: 1446854400000,
              serie: "Observed",
              max: 72,
              min: 53,
              x: 1446854400000,
              low: 53,
              high: 72
            },
            {
              dt: 1446940800000,
              serie: "Observed",
              max: 56,
              min: 46,
              x: 1446940800000,
              low: 46,
              high: 56
            },
            {
              dt: 1447027200000,
              serie: "Observed",
              max: 59,
              min: 43,
              x: 1447027200000,
              low: 43,
              high: 59
            },
            {
              dt: 1447113600000,
              serie: "Observed",
              max: 57,
              min: 51,
              x: 1447113600000,
              low: 51,
              high: 57
            },
            {
              dt: 1447200000000,
              serie: "Observed",
              max: 58,
              min: 49,
              x: 1447200000000,
              low: 49,
              high: 58
            },
            {
              dt: 1447286400000,
              serie: "Observed",
              max: 61,
              min: 51,
              x: 1447286400000,
              low: 51,
              high: 61
            },
            {
              dt: 1447372800000,
              serie: "Observed",
              max: 58,
              min: 46,
              x: 1447372800000,
              low: 46,
              high: 58
            },
            {
              dt: 1447459200000,
              serie: "Observed",
              max: 49,
              min: 42,
              x: 1447459200000,
              low: 42,
              high: 49
            },
            {
              dt: 1447545600000,
              serie: "Observed",
              max: 58,
              min: 39,
              x: 1447545600000,
              low: 39,
              high: 58
            },
            {
              dt: 1447632000000,
              serie: "Observed",
              max: 67,
              min: 51,
              x: 1447632000000,
              low: 51,
              high: 67
            },
            {
              dt: 1447718400000,
              serie: "Observed",
              max: 52,
              min: 40,
              x: 1447718400000,
              low: 40,
              high: 52
            },
            {
              dt: 1447804800000,
              serie: "Observed",
              max: 58,
              min: 46,
              x: 1447804800000,
              low: 46,
              high: 58
            },
            {
              dt: 1447891200000,
              serie: "Observed",
              max: 64,
              min: 57,
              x: 1447891200000,
              low: 57,
              high: 64
            },
            {
              dt: 1447977600000,
              serie: "Observed",
              max: 64,
              min: 46,
              x: 1447977600000,
              low: 46,
              high: 64
            },
            {
              dt: 1448064000000,
              serie: "Observed",
              max: 53,
              min: 42,
              x: 1448064000000,
              low: 42,
              high: 53
            },
            {
              dt: 1448150400000,
              serie: "Observed",
              max: 55,
              min: 42,
              x: 1448150400000,
              low: 42,
              high: 55
            },
            {
              dt: 1448236800000,
              serie: "Observed",
              max: 44,
              min: 33,
              x: 1448236800000,
              low: 33,
              high: 44
            },
            {
              dt: 1448323200000,
              serie: "Observed",
              max: 46,
              min: 32,
              x: 1448323200000,
              low: 32,
              high: 46
            },
            {
              dt: 1448409600000,
              serie: "Observed",
              max: 50,
              min: 36,
              x: 1448409600000,
              low: 36,
              high: 50
            },
            {
              dt: 1448496000000,
              serie: "Observed",
              max: 60,
              min: 41,
              x: 1448496000000,
              low: 41,
              high: 60
            },
            {
              dt: 1448582400000,
              serie: "Observed",
              max: 64,
              min: 51,
              x: 1448582400000,
              low: 51,
              high: 64
            },
            {
              dt: 1448668800000,
              serie: "Observed",
              max: 63,
              min: 43,
              x: 1448668800000,
              low: 43,
              high: 63
            },
            {
              dt: 1448755200000,
              serie: "Observed",
              max: 48,
              min: 37,
              x: 1448755200000,
              low: 37,
              high: 48
            },
            {
              dt: 1448841600000,
              serie: "Observed",
              max: 47,
              min: 33,
              x: 1448841600000,
              low: 33,
              high: 47
            },
            {
              dt: 1448928000000,
              serie: "Observed",
              max: 51,
              min: 44,
              x: 1448928000000,
              low: 44,
              high: 51
            },
            {
              dt: 1449014400000,
              serie: "Observed",
              max: 57,
              min: 46,
              x: 1449014400000,
              low: 46,
              high: 57
            },
            {
              dt: 1449100800000,
              serie: "Observed",
              max: 55,
              min: 44,
              x: 1449100800000,
              low: 44,
              high: 55
            },
            {
              dt: 1449187200000,
              serie: "Observed",
              max: 51,
              min: 42,
              x: 1449187200000,
              low: 42,
              high: 51
            },
            {
              dt: 1449273600000,
              serie: "Observed",
              max: 51,
              min: 40,
              x: 1449273600000,
              low: 40,
              high: 51
            },
            {
              dt: 1449360000000,
              serie: "Observed",
              max: 53,
              min: 39,
              x: 1449360000000,
              low: 39,
              high: 53
            },
            {
              dt: 1449446400000,
              serie: "Observed",
              max: 54,
              min: 42,
              x: 1449446400000,
              low: 42,
              high: 54
            },
            {
              dt: 1449532800000,
              serie: "Observed",
              max: 49,
              min: 41,
              x: 1449532800000,
              low: 41,
              high: 49
            },
            {
              dt: 1449619200000,
              serie: "Observed",
              max: 55,
              min: 40,
              x: 1449619200000,
              low: 40,
              high: 55
            },
            {
              dt: 1449705600000,
              serie: "Observed",
              max: 60,
              min: 51,
              x: 1449705600000,
              low: 51,
              high: 60
            },
            {
              dt: 1449792000000,
              serie: "Observed",
              max: 61,
              min: 50,
              x: 1449792000000,
              low: 50,
              high: 61
            },
            {
              dt: 1449878400000,
              serie: "Observed",
              max: 66,
              min: 55,
              x: 1449878400000,
              low: 55,
              high: 66
            },
            {
              dt: 1449964800000,
              serie: "Observed",
              max: 67,
              min: 55,
              x: 1449964800000,
              low: 55,
              high: 67
            },
            {
              dt: 1450051200000,
              serie: "Observed",
              max: 67,
              min: 53,
              x: 1450051200000,
              low: 53,
              high: 67
            },
            {
              dt: 1450137600000,
              serie: "Observed",
              max: 68,
              min: 53,
              x: 1450137600000,
              low: 53,
              high: 68
            },
            {
              dt: 1450224000000,
              serie: "Observed",
              max: 53,
              min: 46,
              x: 1450224000000,
              low: 46,
              high: 53
            },
            {
              dt: 1450310400000,
              serie: "Observed",
              max: 59,
              min: 50,
              x: 1450310400000,
              low: 50,
              high: 59
            },
            {
              dt: 1450396800000,
              serie: "Observed",
              max: 57,
              min: 38,
              x: 1450396800000,
              low: 38,
              high: 57
            },
            {
              dt: 1450483200000,
              serie: "Observed",
              max: 40,
              min: 35,
              x: 1450483200000,
              low: 35,
              high: 40
            },
            {
              dt: 1450569600000,
              serie: "Observed",
              max: 43,
              min: 34,
              x: 1450569600000,
              low: 34,
              high: 43
            },
            {
              dt: 1450656000000,
              serie: "Observed",
              max: 56,
              min: 39,
              x: 1450656000000,
              low: 39,
              high: 56
            },
            {
              dt: 1450742400000,
              serie: "Observed",
              max: 62,
              min: 53,
              x: 1450742400000,
              low: 53,
              high: 62
            },
            {
              dt: 1450828800000,
              serie: "Observed",
              max: 64,
              min: 52,
              x: 1450828800000,
              low: 52,
              high: 64
            },
            {
              dt: 1450915200000,
              serie: "Observed",
              max: 72,
              min: 63,
              x: 1450915200000,
              low: 63,
              high: 72
            },
            {
              dt: 1451001600000,
              serie: "Observed",
              max: 66,
              min: 57,
              x: 1451001600000,
              low: 57,
              high: 66
            },
            {
              dt: 1451088000000,
              serie: "Observed",
              max: 59,
              min: 47,
              x: 1451088000000,
              low: 47,
              high: 59
            },
            {
              dt: 1451174400000,
              serie: "Observed",
              max: 61,
              min: 46,
              x: 1451174400000,
              low: 46,
              high: 61
            },
            {
              dt: 1451260800000,
              serie: "Observed",
              max: 46,
              min: 34,
              x: 1451260800000,
              low: 34,
              high: 46
            },
            {
              dt: 1451347200000,
              serie: "Observed",
              max: 46,
              min: 34,
              x: 1451347200000,
              low: 34,
              high: 46
            },
            {
              dt: 1451433600000,
              serie: "Observed",
              max: 48,
              min: 38,
              x: 1451433600000,
              low: 38,
              high: 48
            },
            {
              dt: 1451520000000,
              serie: "Observed",
              max: 48,
              min: 42,
              x: 1451520000000,
              low: 42,
              high: 48
            }
          ],
          type: "columnrange",
          color: "#A90048"
        }
      ]
    }
  );
});
