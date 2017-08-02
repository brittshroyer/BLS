$(function() {
  $.ajax({
      type: 'GET',
      url: 'https://api.bls.gov/publicAPI/v2/timeseries/data/APU0000702421',
      data: { },
      dataType: 'json'
    })
      .done(function(data) {
        console.log(data);
      })
    });
