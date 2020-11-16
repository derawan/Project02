costumer = [
    {id:1, name:'habibie', address:'tanah abang'},
    {id:2, name:'rizki', address:'kuningan timur'},
    {id:3, name:'nindya', address:'setia budi'},
    {id:4, name:'fakhri', address:'fakhri'},
]

function Cari(search_name, name)
{
    indeks_cari= -1;
    result = [];
    for(i=0;i<costumer.length;i++)
    {
        if (costumer[i][name]== search_name)
        {
            result.push(costumer[i]);
            indeks_dicari= i;
        }
    }
    return result;
}