      var X = 125;              // global scope
        function addNumbers(){
            document.write (25 + X + "<br>");
        }
        function addNumbers2(){
          document.write (23 + X);
        }
        addNumbers();
        addNumbers2();


        function addNumbers(){  // local scope
          var X = 125;
          document.write (25 + X + "<br>");
        }
        function addNumbers2(){
          document.write (23 + X);
        }
        addNumbers();
        addNumbers2();


        function addNumbers(){  // console.log () Method
          var X = 125;
          console.log (25 + X);
        }
        function addNumbers2(){
          console.log (23 + X);
        }
        addNumbers();
        addNumbers2();

        function get_Date(){    // If Statement  
          if (new Date().getMonth()<7){
            document.getElementById("Greeting").innerHTML = "Happy Summer :)";
          }
        }

        function check(){
          var x = document.getElementById ("input").value;
          if (x >= 20){
            document.getElementById("output").innerText = "You can buy it";
          } else {
            document.getElementById ("output").innerText + "Not enough";
          }
        }

        function Time_function(){
          var Time = new Date().getHours ();
          var Reply;
          if (Time<12 == Time >0){
            Reply = "It is morning time!";
          }
          else if (Time >= 12 ==Time < 18){
            Reply = "If it is afternoon.";
          } else {
            Reply = "Itis evening time.";
          }
          document.getElementById ("time_of_day").innerHTML = Reply;
        }