function ClickCarName(a, carname) {
   debugger;

   var Car = document.getElementById("Car");
   var cars = document.getElementById("cars");
   var getclickcount = document.getElementById(carname);
   var countr = document.getElementById("countr");
   var num= parseInt(getclickcount.value);
   if (!cars.innerHTML.includes(carname)) {
       Car.innerText = carname.toUpperCase();
       cars.innerHTML = '<img src="Images/' + carname + '.jpg">';
       countr.innerText=num;
       ResetList();
       a.setAttribute("class", "active");
   } else {
       getclickcount.value =num+ 1;
       countr.innerText = num + 1;
   }

}
function ResetList() {
   debugger;
   for (var i = 0; i < document.getElementsByTagName("a").length; i++) {
       document.getElementsByTagName("a")[i].setAttribute("class", "")
   }
}
