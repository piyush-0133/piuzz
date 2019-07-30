

function prr(num)
{
	document.getElementById("txts").value
	= document.getElementById("txts").value+num;

	if (num == "d") {

		var aa = document.getElementById("txts").value;
		aa.toString();
		var l=aa.length;

		document.getElementById("txts").value=aa.substring(0,l-2);
	}
}

function equal(){

	var ec=document.getElementById("txts").value;

	if(ec){
					document.getElementById("txts").value=	eval(document.getElementById("txts").value);
			 }
}
