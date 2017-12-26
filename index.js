$(document).ready(function(){
	
	 $('#customers').DataTable({
		"initComplete": function () {
            var api = this.api();
            api.$('td').click( function () {
                api.search( this.innerHTML ).draw();
            } );
        }
	});
});
		

	