


$("#btnNew").on("click",function (){

    if (!!$("#input_task").val()) {


      $(".tasksContiner").append(

        "<div class='tasks'><div class='task'>" +$("#input_task").val() +"</div>" +
         "<button class='Ok' >Ok</button><button class='Remove' >Remove</button><br></div>"
      );

      $("#input_task").val("");
    }
    


    else
     {
      console.error("Not Value");
    }
  });



  $(document).on("click", ".Remove", function () {
    $(this).parent(".tasks").remove();
  });
  


  $(document).on("click", ".Ok", function () {

    $(this).parent(".tasks").toggleClass("TaskOk");
  });
  
  