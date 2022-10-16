$(document).ready(function () {
  $('.sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('.main').toggleClass('active');
    $(this).toggleClass('active');
  });


  $('#addaddress').on('click', function () {
    $('#address').addClass('hide');
    $('#showAddAddr').removeClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#showAddr').on('click', function () {
    $('#address').removeClass('hide');
    $('#showAddAddr').toggleClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#addnin').on('click', function () {
    $('#nin').addClass('hide');
    $('#shownin').removeClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#showNINBtn').on('click', function () {
    $('#nin').removeClass('hide');
    $('#shownin').toggleClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#trigger').on('click', function () {
    $('#showEdit').addClass('hide');
    $('#hideEdit').removeClass('hide');
    // $(this).toggleClass('hide');
  })

  $('#trigger2').on('click', function () {
    $('#showEdit').removeClass('hide');
    $('#hideEdit').toggleClass('hide');
    // $(this).toggleClass('hide');
  })


  $('#file1').on('change', function () {
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

    if (/^image/.test(files[0].type)) { // only image file
      var reader = new FileReader(); // instance of the FileReader
      reader.readAsDataURL(files[0]); // read the local file

      reader.onloadend = function () { // set image data as background of div
        $('img.default').attr('src', reader.result).removeClass('default')
      }
      reader.onloadend = function () { // set image data as background of div
        $('img.default2').attr('src', reader.result).removeClass('p-4')
      }
    }
  })

  $('#file2').on('change', function () {
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

    if (/^image/.test(files[0].type)) { // only image file
      var reader = new FileReader(); // instance of the FileReader
      reader.readAsDataURL(files[0]); // read the local file
      reader.onloadend = function () { // set image data as background of div
        $('img.default3').attr('src', reader.result).removeClass('p-4')
      }
    }
  })

  $('#file3').on('change', function () {
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

    if (/^image/.test(files[0].type)) { // only image file
      var reader = new FileReader(); // instance of the FileReader
      reader.readAsDataURL(files[0]); // read the local file


      reader.onloadend = function () { // set image data as background of div
        $('img.default4').attr('src', reader.result).removeClass('p-4')
      }
    }
  })



  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['jan', 'Feb', 'Mar', 'April', 'May', 'June'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#DEA18678',
        borderColor: '#DEA186',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#DEA186',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        borderWidth: 3,
        fill: true
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: { display: false },

      }

    },

  });





  const ctx2 = document.getElementById('myChart2');
  const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Spending History',
        data: [12, 19, 3, 5, 2, 3, 8, 6, 5, 11, 10, 12],
        backgroundColor: '#DEA18678',
        borderColor: '#DEA186',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#DEA186',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        borderWidth: 3,
        fill: true
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: { display: false },

      }

    },

  });






  function change_tab(tab_id) {

    $(".nav-link").attr("class", "nav-link"); //clear classes
    $(".tab-pane").attr("class", "tab-pane fade"); //clear classes

    var tab_content = "#" + tab_id;
    var tab = "#" + tab_id + "-tab";
    $(tab).attr("class", "nav-link active show");
    $(tab_content).attr("class", " tab-pane fade active show");

    $('.mynav > .active').next('li').find('a').trigger('click');
  }

});


var input = document.querySelector('input[name=tags]');
var input2 = document.querySelector('input[name=tag2]');

// initialize Tagify on the above input node reference
new Tagify(input)
new Tagify(input2)











