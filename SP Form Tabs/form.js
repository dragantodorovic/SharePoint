<script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
<style type="text/css">
  .ms-formtable
  {display:none;}
</style>
<script type="text/javascript">
    $(document).ready(function() {
        //loop      
        $("span.spForm").each(function()
        {
            //get the display name
            displayName = $(this).attr("data-displayName");
            displayName  = displayName.replace(/&(?!amp;)/g,'&amp;');
            elem = $(this);
            //find the corresponding field 
            $("table.ms-formtable td").each(function(){
                if (this.innerHTML.indexOf('FieldName="'+displayName+'"') != -1){
                    $(this).contents().appendTo(elem);
                }
            });
        });
    });
</script>
