console.log('client.js is loaded');

$(document).ready(onReady);

function onReady(){
    console.log('jquery has been loaded');
    $('#addNewSong').on('click', addNew);
    getAllSongs();
}

function getAllSongs() {

$.ajax({ //this contains an object
    method: 'GET',  //method and type are interchangeable here
    //where request is going
    url: '/record'
})
    .then(function(response) {
        console.log(response);
        response.forEach(function(record){
        $('#recordList').append(`<tr>
        <td>${record.title}</td>
        <td>${record.artist}</td>
        <td>${record.year}</td>
        <td>${record.cost}</td><tr>`);
    });
});
// .toLocaleString('en', { style: 'currency', currency: 'USD' }).slice(0, -3)}</td><tr>`);
}

function addNew(){
    const newSong = {
        title: $('#newSongTitle').val(),
        artist: $('#newSongArtist').val(),
        year: $('#newSongYear').val(),
        cost: $('#newSongCost').val(),
    };

    console.log('New song object', newSong)

    $.ajax({
        method: 'POST',
        url: '/record',
        data: newSong
    })

    .then(function(response){
        $('#recordList').empty();//so this empties the whole array
        console.log(response);
        //this GET request needs to go inside here
        getAllSongs(); //need this here and under onReady.  except it adds the whole array again.
    });
    

}