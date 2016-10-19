(function(){ 
  var speed = 900,
      containers = document.querySelectorAll(".animation-demo");
  for(var c = 0; c < containers.length; c++){
    var container = containers[c],
        children = container.children;
    
    if(!container.classList.contains("delay-set")){
      container.classList.add("delay-set");
      
      for(var i = 0; i < children.length; i++){
        var child = children[i],
            childOffset = child.getBoundingClientRect(),
            offset = childOffset.left*0.8 + childOffset.top,
            delay = parseFloat(offset/speed).toFixed(2);
        
        child.style.webkitTransitionDelay = delay + "s";
        child.style.transitionDelay = delay + "s";
      }
    }
    container.classList.add("animating-in");
 }
})();


var buttons = document.getElementsByTagName("button"),
    containers = document.querySelectorAll(".animation-demo");

for(var i = 0; i < buttons.length; i++){
 buttons[i].addEventListener("click", function(e){
   var attr = this.getAttribute("data-animation"),
       opposite = attr == "in" ? "out" : "in";
   console.log(attr);
   for(var c = 0; c < containers.length; c++){
     containers[c].classList.remove("animating-" + opposite);
     containers[c].classList.add("animating-" + attr);
   }
 }, false);
}