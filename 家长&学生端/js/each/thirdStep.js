$(function(){
    $('textarea').bind('input',function(){
        var $this=$(this)
        var value=$this.val()
        var len=value.length
        console.log(value)
        $('.first').text(len)
        $this.val($this.val().slice(0,199))
        if(len>200){
            $this.val($this.val().slice(0,199))
            $('.first').text(200)
        }   
    })
})