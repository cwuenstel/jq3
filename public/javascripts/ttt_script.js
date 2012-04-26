



 $(document).ready(function() {
	 var board = [4,4,4,4,4,4,4,4,4]; // literal array
var owins = 0;
var xwins = 0;
var ties = 0;
var x = true;
var loc = 15;
var starts = 1;
	 
	 var empty = false;
	 $('#apDiv13').css('background', 'url(images/x.jpg)');

	function change(id){
		//if( ($(name).css('background', 'url(images/x.jpg)') == false) && ($(name).css('background', 'url(images/o.jpg)') == false)){
			//alert("GET HERE");
		

if(empty){
			
			
			if(x){
				$(id).css('background', 'url(images/x.jpg)'); 
				x=false;
				empty=false;
				$('#apDiv13').css('background', 'url(images/o.jpg)');
				
			}
			else{
				$(id).css('background', 'url(images/o.jpg)'); 
				x=true;
				empty=false;
				$('#apDiv13').css('background', 'url(images/x.jpg)');
			}

						   //remember x is backwards right now because it was changed in the last if statement for the next person's turn
			   
	var check = ['apDiv1','apDiv2','apDiv4','apDiv5','apDiv6','apDiv7','apDiv8','apDiv9','apDiv10'];
			   
switch (iden) {
    case check[0]: if(x){board[0] = 2;} else {board[0] = 1;}  break;
	case check[1]: if(x){board[1] = 2;} else {board[1] = 1;}  break;
	case check[2]: if(x){board[2] = 2;} else {board[2] = 1;}  break;
	case check[3]: if(x){board[3] = 2;} else {board[3] = 1;}  break;
	case check[4]: if(x){board[4] = 2;} else {board[4] = 1;}  break;
	case check[5]: if(x){board[5] = 2;} else {board[5] = 1;}  break;
	case check[6]: if(x){board[6] = 2;} else {board[6] = 1;}  break;
	case check[7]: if(x){board[7] = 2;} else {board[7] = 1;}  break;
	case check[8]: if(x){board[8] = 2;} else {board[8] = 1;}  break;	
}
			checkForWinner();
		}
	}
	var divs = ['#apDiv1','#apDiv2','#apDiv4','#apDiv5','#apDiv6','#apDiv7','#apDiv8','#apDiv9','#apDiv10'];
	for (var i=0; i < divs.length; i++) {
    //addFilteredMenuItem(divs[i]);
		$(divs[i]).hover(
   function(){
   				if(x){empty=true; board[loc] = 1; $(this).css({ opacity: 0.5 }); $(this).css('background', 'url(images/x.jpg)');} 
   				else{board[loc] = 2; $(this).css('background', 'url(images/o.jpg)'); empty=true; $(this).css({ opacity: 0.5 });}},
   function(){ $(this).css('background', ''); empty=false; $(this).css({ opacity: 1 });});
   
           $(divs[i]).click(function() {
			   $(this).css({ opacity: 1 });
			   $(this).unbind('mouseenter mouseleave');
				iden = this.id
				change($(divs[i]));
            
        });
		
function rebind(){
	for(var i=0;i<divs.length;i++){
		$(divs[i]).css('background', 'none');
	
		$(divs[i]).hover(
   function(){empty = true; 
   				if(x){board[loc] = 1; $(this).css({ opacity: 0.5 }); $(this).css('background', 'url(images/x.jpg)');} 
   				else{board[loc] = 2; $(this).css('background', 'url(images/o.jpg)'); $(this).css({ opacity: 0.5 });}},
   function(){ $(this).css('background', ''); $(this).css({ opacity: 1 });});}
	board = [4,4,4,4,4,4,4,4,4];
		if (starts%2 == 0){
		x = false
		$('#apDiv13').css('background', 'url(images/o.jpg)');
		}
		else{
		x = true;
		$('#apDiv13').css('background', 'url(images/x.jpg)');
		}
}
		
function checkForWinner(){

//alert(board[0] + " " + board[1] + " " +  board[2] + " " + board[3] + " " + board[4] + " " + board[5] + " " + board[6] + " " + board[7] + " " + board[8]);

if(((board[0] == 2) && (board[1] == 2) && (board[2] == 2)) ||
   ((board[3] == 2) && (board[4] == 2) && (board[5] == 2)) ||
   ((board[6] == 2) && (board[7] == 2) && (board[8] == 2)) ||
   ((board[0] == 2) && (board[3] == 2) && (board[6] == 2)) ||
   ((board[1] == 2) && (board[4] == 2) && (board[7] == 2)) ||
   ((board[2] == 2) && (board[5] == 2) && (board[8] == 2)) ||
   ((board[0] == 2) && (board[4] == 2) && (board[8] == 2)) ||
   ((board[2] == 2) && (board[4] == 2) && (board[6] == 2))){
	   alert("O WINS!!!");
	   owins++;
	   $('#owins').html(owins);
	   starts++
	   rebind();
	   }
	   
	
else if(((board[0] == 1) && (board[1] == 1) && (board[2] == 1)) ||
   ((board[3] == 1) && (board[4] == 1) && (board[5] == 1)) ||
   ((board[6] == 1) && (board[7] == 1) && (board[8] == 1)) ||
   ((board[0] == 1) && (board[3] == 1) && (board[6] == 1)) ||
   ((board[1] == 1) && (board[4] == 1) && (board[7] == 1)) ||
   ((board[2] == 1) && (board[5] == 1) && (board[8] == 1)) ||
   ((board[0] == 1) && (board[4] == 1) && (board[8] == 1)) ||
   ((board[2] == 1) && (board[4] == 1) && (board[6] == 1))){
	alert("X WINS!!!")   
	xwins++;
	$('#xwins').html(xwins);
	starts++;
	rebind();
   }
 else{
	 var tie = true;
	for(var z=0;z<board.length;z++){
		if(board[z] == 4){tie = false;}
	}
	if(tie){
		alert("Tie!");
		ties++;
		$('#ties').html(ties);
		starts++;
		rebind();
	}
 }
}
}


   
   
});


