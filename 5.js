var obj = [{
    "id" : 4, "name":"abc"},
    {
    "id" : 10, "name":"abc2"},
    {
    "id" : 5, "name":"abc3"},{
    "id" : 6, "name":"abc5"
}]

obj.sort(function(a,b){
    return (a.id - b.id || a.name.localeCompare(b.name));
})

obj.forEach((e) =>  {

    document.write("\n"+e.id + e.name + "\n");
    
});