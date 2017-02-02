
//get date
now = new Date();
day = String(now.getDate());
month = String(now.getMonth()+1);//0-11
if(month.length<2){
	month = "0".concat(month)
}
year = String(now.getFullYear());
now = new Date(year.concat("-").concat(month).concat("-").concat(day));
requests  = document.getElementById('RequestsView_TABLE').tBodies[0].rows;
//for rows in get element by ID where Id=RequestsView_Table
length = requests.length;
for(i = 3;i<length;i++){
	//if date is less than today (measured in days)
	cell_content = requests[i].cells[7].textContent.trim().substring(0,10);
	year = cell_content.substring(6,10);
	month = cell_content.substring(3,5);
	day = cell_content.substring(0,2);
	cell_date = new Date(year.concat("-").concat(month).concat("-").concat(day));
	if(cell_date.getTime()<now.getTime()){
		//hide the row
		requests[i].hidden=!requests[i].hidden;
	}
}
/*notes
requests  = document.getElementById('RequestsView_TABLE')
data = requests.tBodies[0].rows //get all rows
rowdat = data[3].cells //get first non header row
celldat = data[3].cells[7].textContent //get date
cell_date = celldat.trim().substring(0,10)
year = cell_date.substring(6,10);
month = cell_date.substring(3,5);
day = cell_date.substring(0,2);
final_date = year.concat("-").concat(month).concat("-").concat(day)
parsed_date = new Date(final_date)
data[3].hidden = true //hide row
now = new Date()
*/
