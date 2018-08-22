$(".btnt.nsi .nsi").click(function(){
    alert("button press");
});

//$(".btnt.nsi .nsi").trigger("click");
//$("body")

var clone = document.body.cloneNode();
while (document.body.firstChild) {
  clone.appendChild(document.body.lastChild);
}
document.body.parentNode.replaceChild(clone, document.body);

$("body").mousemove(function(e){

    console.log(e);
});
//setInterval(function(){
//    var event = jQuery.Event( "mousemove" );
//    event.clientX = 300;
//    event.clientY = 300;
//    event.pageX = 300;
//    event.pageY = 300;
//    event.offsetY = 300;
//    event.offsetX = 300;
//    event.screenY = 300;
//    event.screenX = 300;
//    console.log("mousemove");
//    $( "body" ).trigger( event );
setInterval(function(){
simulateMove(document.body)} , 100);



//}, 100);
function simulateMove(target, options) {

  var event = target.ownerDocument.createEvent('MouseEvents'),
      options = options || {},
      opts = { // These are the default values, set up for un-modified left clicks
        type: 'mousemove',
        canBubble: true,
        cancelable: true,
        view: target.ownerDocument.defaultView,
        detail: 1,
        screenX: 300, //The coordinates within the entire page
        screenY: 300,
        clientX: 300, //The coordinates within the viewport
        clientY: 300,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
        button: 0, //0 = left, 1 = middle, 2 = right
        relatedTarget: null,
      };

  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      opts[key] = options[key];
    }
  }

  //Pass in the options
  event.initMouseEvent(
      opts.type,
      opts.canBubble,
      opts.cancelable,
      opts.view,
      opts.detail,
      opts.screenX,
      opts.screenY,
      opts.clientX,
      opts.clientY,
      opts.ctrlKey,
      opts.altKey,
      opts.shiftKey,
      opts.metaKey,
      opts.button,
      opts.relatedTarget
  );

  //Fire the event
  target.dispatchEvent(event);
}