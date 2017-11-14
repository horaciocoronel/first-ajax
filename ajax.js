document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
var stepOneTwo = document.querySelector('#button-1');
var stepThreeToSix = document.querySelector('#button-2');
var stepSeven = document.querySelector('#button-3');
var stepEight = document.querySelector('#button-4');
var stepNine = document.querySelector('#button-5');

stepOneTwo.addEventListener('click', function() {

    $.ajax({
      url: 'https://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    })

  });

  stepThreeToSix.addEventListener('click', function() {

      $.ajax({
        url: 'https://first-ajax-api.herokuapp.com/pong',
        method: 'GET',
        data: {},
        dataType: 'text'
      }).done(function (responseData) {
  //Here in the callback, we have a variable called responseData
  //that holds the content of the server's response,
  //in this case, a simple string
  console.log(responseData);
  document.getElementById('step3456').append(responseData);
        }).fail(function (responseData) {
        console.log(responseData);
        document.getElementById('step3456').append(responseData.responseText);
  //In this callback, everyone panic! Our request has failed!
  //Quickly, apologize to the user and try to fix it!
}).always(function (responseData) {
  //Well, I'm not really sure how that went, and I don't care
  //All I know is, it's over.
  console.log("Hey the request finished!");

});
    });
    stepSeven.addEventListener('click', function() {

        $.ajax({
          url: 'https://first-ajax-api.herokuapp.com/count',
          method: 'GET',
          data: {},
          dataType: 'text'
        }).done(function (responseData) {
    //Here in the callback, we have a variable called responseData
    //that holds the content of the server's response,
    //in this case, a simple string
    console.log(responseData);

    document.getElementById('result7').innerHTML = responseData;
          })

      });// end of stepSeven eventListener
      stepEight.addEventListener('click', function() {

          $.ajax({
            url: 'https://first-ajax-api.herokuapp.com/time',
            method: 'GET',
            data: {
              timezone: 'America/Argentina/Buenos_Aires'
            },
            dataType: 'text'
          }).done(function (responseData) {
      //Here in the callback, we have a variable called responseData
      //that holds the content of the server's response,
      //in this case, a simple string
      console.log(responseData);
      document.getElementById('step8').append(responseData);
            })

        }); //End of Step 8

  stepNine.addEventListener('click', function() {

      $.ajax({
        url: 'https://first-ajax-api.herokuapp.com/a_car',
        method: 'GET',
        dataType: 'html'
      }).done(function (responseData) {
  //Here in the callback, we have a variable called responseData
  //that holds the content of the server's response,
  //in this case, a simple string
  var emptyUl = document.createElement('ul');
  emptyUl.innerHTML = responseData;
  document.getElementById('step9').append(emptyUl);
        })

    });
}); //End of file
