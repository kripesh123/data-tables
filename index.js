$(document).ready(function(){
	$('#customers').DataTable({
		/*"paging":   true,
        "ordering": true,
        "info":     true
        //order particular column
        "order":[[0,"asc"]]*/
        columnDefs: [{
            "targets": [ 2 ],
            "visible":false,
            "searchable":false
        },{
            "targets": [ 3 ],
            "visible": false
        }]
	});
})