num=0;
function vix() {
	var cart=document.getElementById("cart");
	num=num+1;
	cart.innerHTML=num;
}
function vit() {
 cart.innerHTML="checkout";
}
function vin() {
	cart.innerHTML=num;
}
function vixx() {
	var mess= document.getElementById("mess").value;
	if (mess==""){
		alert("message cannot be empty");
		return false;
	}
	else{
		alert("thank-you for your response");
		return false;
	}
	
}
$('#navbar a, .btn').on('click',function(event){
	if(this.hash !==''){
		event.preventDefault();
		
		const hash =this.hash;
		
		$('html,body').animate(
		{
			scrollTop: $(hash).offset().top - 80
			
		},
		800
		);
	}
});
