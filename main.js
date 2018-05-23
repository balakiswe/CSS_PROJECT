$('document').ready(function(){
    var brands = [{
        "name": "Product 1",
        "price": "20"
      },{
        "name": "Product 2",
        "price": "30"
      },{
        "name": "Product 3",
        "price": "40"
      },{
        "name": "Product 4",
        "price": "50"
      },{
        "name": "Product 5",
        "price": "60"
      },{
        "name": "Product 6",
        "price": "70"
      },{
        "name": "Product 7",
        "price": "80"
      },{
        "name": "Product 8",
        "price": "90"
      },{
        "name": "Product 9",
        "price": "210"
      },{
        "name": "Product 10",
        "price": "207"
      }];

      $.each(brands, function(key, val){
          var _html = '';
          _html += '<div class="product"><h2>' + val.name + '</h2>';
          _html += '<div class="product-content">';
          _html += '<strong>Title: </strong>';
          _html += val.name;
          _html += '<br>';
          _html += '<strong>Title: </strong>';
          _html += val.price;
          _html += '<br>';
          _html += '<button type="button" class="edit-btn">Edit</button>'
          _html += '</div>';
          _html += '</div>';
          $('#scrollable-div').html($('#scrollable-div').html() + _html);
      })

    $('#option1, #option2, #option3').click(function(){
        $(this).prop('checked', true);
    });
    
    $('#option4').change(function(){
        if($(this).prop('checked')) {
            $('#sp4').css('color','green');
        } else {
            $('#sp4').css('color','black');
        }
    });

    $('.edit-btn').click(function () {
        $('.overlay').show();
    });

    $('.popup-btn').click(function(){
        $('.overlay').hide();
    });

    $('#range').change(function(){
        $('#selected-range').html($(this).val());
    })




})