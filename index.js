$(document).ready(function(){
	
	$('#customers').DataTable({
		"columnDefs": [
            {
              	"render": function ( data, type, row ) {
                return data +' ('+ row[3]+')';
                },
                "targets": 0
            },
            { 	
            	"visible": false,
              	"targets": [ 3 ] 
            }
        ]
	});

});
		

	