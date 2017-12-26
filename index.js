$.extend( true, $.fn.dataTable.defaults, {
    "searching": false
} );

$(document).ready(function(){
	
	$('#customers').DataTable({
		"createdRow" : function(row,data,index){
			if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('highlight');
            }
		}
	});

});
		

	