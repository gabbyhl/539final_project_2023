mediaQuery = window.matchMedia('(min-width: 600px)')
if (mediaQuery.matches){
    $(".filter").hide()
    $(".controls").show()
}

else{
    $(".controls").hide()
    $(".filter").show()
    $(".filter").click(function(){
        $(".controls").toggle()
        })
}

$(document).ready(function(){
    console.log("loaded")
    $(".open").click(function(){
        console.log("open popup")
        var num = this.id
        console.log(this.id)
        popup = ("#popup_" + num)
        console.log(popup)
        console.log($(popup))
        $(popup)[0].classList.toggle('display')
        this.style.display = "none"
    });
    $(".close").click(function(){
        console.log("close popup")
        var num = this.id.slice(-2)
        console.log(this.id)
        console.log(num)
        popup = ("#popup_" + num)
        button = ("#" + num)
        console.log(popup)
        console.log($(popup))
        console.log(button)
        $(popup)[0].classList.toggle('display')
        $(button)[0].style.display = "revert"
    });
});
