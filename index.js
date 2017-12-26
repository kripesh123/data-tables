$(document).ready(function(){
	$('#customers').DataTable({
		/*"paging":   true,
        "ordering": true,
        "info":     true
        //order particular column
        "order":[[0,"asc"]]*/
        /*columnDefs: [{
            "targets": [ 2 ],
            "visible":false,
            "searchable":false
        },{
            "targets": [ 3 ],
            "visible": false
        }]*/
        //"dom":'<"top"i>rt<"bottom"flp><"clear">'
         //"scrollY":        "300px",
         "scrollY":        "50vh",
        "scrollCollapse": true,
        "paging":         false
	});
})