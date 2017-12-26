$(document).ready(function(){
	var table = $('#customers').DataTable();

	$('#customers tbody').on('click','tr',function(){
		var data = table.row(this).data();
		alert('You clicked on ' +data[1]+'\'s row')
	});
});
		

	