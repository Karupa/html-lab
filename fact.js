<!DOCTYPE html>
<html>
<head>
<title>factorial<title>

<script>
 function fact(n)
   { 
     var c;
     n=window.prompt("enter n");
      if(n==0 || n==1)
       return 1;
      else{
            c=n*fact(n-1);
            return c;
           }
    document.getElementById("z1").innerHTML=c;
    }
</script>
</head>
<body>
<h1>factorial</h1>
<p id="z1"></p>
</body>
</html>

