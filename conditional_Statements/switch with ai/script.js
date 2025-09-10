function myFunction() {
    var text;
    var fruits = document.getElementById("myInput").ariaValueMax;

    switch(fruits){
        case "moos":
            text = "moos baad jeceshahay";
        break;
        case "tufaax":
            text ="tufaax baad jeceshahay";
        break;
        case "liindhanaan":
            text ="liindhanaan baad jeceshahay";
        break;
        default:
            text ="wax aan garanayn baad jeceshay";

    }
    document.getElementById("fruit-paragraph-id").innerHTML = text;
}