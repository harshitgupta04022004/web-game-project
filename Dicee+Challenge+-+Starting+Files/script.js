var image1 = document.getElementsByTagName("img")[0];
var image2 = document.getElementsByTagName("img")[1];
var r_n1=Math.floor(Math.random()*6+1);
var img1="./images/dice"+r_n1+".png";
image1.setAttribute("src",img1);
var r_n2=Math.floor(Math.random()*6+1);
var img2="./images/dice"+r_n2+".png";
image2.src=img2;


if(r_n1 > r_n2)
{
    document.getElementsByTagName("h1")[0].innerHTML='❤️😍😂😍❤️Player 1 Wins'

}
else if(r_n1 < r_n2)
{
    document.getElementsByTagName("h1")[0].innerHTML='Player 2 Wins❤️😍😂😍❤️'
}
else
{
    document.getElementsByTagName("h1")[0].innerHTML='Tie'
}
    