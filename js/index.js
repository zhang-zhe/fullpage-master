$(function() {

     var wenzi=function(){
	   	move('#motion-2-1')
	   	.set('bottom',25+'%')
    	.duration('1s')
     	.end()
     	 move('#motion-2-2')
     	.set('top',50+'%')
     	.duration('1s')
     	.end()
     }
        var wenzia=function(){
        move('#motion-2-1')
     	.set('bottom',-42+'%')
     	.delay('0.2s')
     	.end()
     	move('#motion-2-2')
     	.set('top',-10+'%')
     	.delay('0.2s')
     	.end()
     }
    var wenzi3=function(){
	   	move('#motion-5-1')
	    .scale(1.0)
    	.duration('1s')
     	.end()
         move('#motion-5-2')
        .scale(1.0)
        .duration('1s')
        .end()
     }
    var wenzia3=function(){
        move('#motion-5-1')
     	.scale(1.5)
     	.end()
        move('#motion-5-2')
        .scale(1.5)
        .end()
     }
    var wenzi4=function(){
        move('#motion-6-1')
        .set('top',10+'%')
        .duration('1s')
        .end()
        move('#motion-6-2-1')
        .set('top',40+'%')
        .duration('1s')
        .end()
        move('#motion-6-2-2')
        .set('bottom',27+'%')
        .duration('1s')
        .end()
        move('#motion-6-4')
        .set('left',0)
        .duration('1s')
        .end()
        move('#motion-6-5')
        .scale(1.0)
        .duration('1s')
        .end()
     }
    var wenzia4=function(){
        move('#motion-6-1')
        .set('top',100+'%')
        .end()
         move('#motion-6-2-1')
        .set('top',-5+'%')
        .end()
         move('#motion-6-2-2')
        .set('bottom',-30+'%')
        .end()
         move('#motion-6-4')
        .set('left',50+'%')
        .duration('1s')
        .end()
        move('#motion-6-5')
        .scale(1.5)
        .end()
     }
     var wenzi5=function(){
        move('#motion-3-1')
        .set('bottom',25+'%')
        .duration('1s')
        .end();
         move('#motion-3-2')
        .set('top',-25+'%')
        .duration('1s')
        .end();
        move('#motion-3-3')
        .set('top',22+'%')
        .duration('1s')
        .end();
     }
     var wenzia5=function(){
        move('#motion-3-1')
         .set('bottom',160+'%')
        .end();
        move('#motion-3-2')
         .set('top',-80+'%')
        .end();
        move('#motion-3-3')
        .set('top',-80+'%')
        .end();
     }
	$('.fullpage').fullpage({
		anchors:['page-1', 'page-2', 'page-3', 'page-4', 'page-5', 'page-6', 'page-7'],
		scrollingSpeed: 500,
		resize:true,
		 afterLoad:function(a,b){
		 	switch(a){
                case 'page-2':wenzi();
                break;
                case 'page-3':wenzi3();
                break;
                case 'page-4':wenzi4();
                break;
                case 'page-5':wenzi5();
                break;
		 	}
		 },
		 onLeave:function(index,value){
		 	switch(index){
		 		case 2:wenzia();
		 		break;
		 		case 3:wenzia3();
		 		break;
                case 4:wenzia4();
                break;
                case 5:wenzia5();
                break;
		 	}
		 }
	});

	 $('.section-nav ul li a').each(function(i){
	 	$(this).click(function(e){
	 		$(this).parent().addClass('active').siblings().removeClass('active');
	 		$($('.job-content')[i]).addClass('active').siblings('.job-content').removeClass('active');
	 		e.preventDefault();
	 	})
	 });	















});




